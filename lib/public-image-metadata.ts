import "server-only";

import { readFileSync } from "node:fs";
import path from "node:path";

import { isSvgImage } from "@/lib/image-paths";

type PublicImageMetadata = {
  width: number;
  height: number;
  unoptimized: boolean;
};

const DEFAULT_METADATA = {
  width: 1200,
  height: 800,
} as const;

type PublicImageSize = {
  width: number;
  height: number;
};

const metadataCache = new Map<string, PublicImageMetadata>();

function parseSvgDimensions(source: string) {
  const width = source.match(/\bwidth=["']([^"']+)["']/i)?.[1];
  const height = source.match(/\bheight=["']([^"']+)["']/i)?.[1];
  const viewBox = source.match(/\bviewBox=["']([^"']+)["']/i)?.[1];

  const parsedWidth = width ? Number.parseFloat(width) : Number.NaN;
  const parsedHeight = height ? Number.parseFloat(height) : Number.NaN;

  if (Number.isFinite(parsedWidth) && Number.isFinite(parsedHeight)) {
    return { width: parsedWidth, height: parsedHeight };
  }

  if (viewBox) {
    const [, , viewBoxWidth, viewBoxHeight] = viewBox
      .split(/[\s,]+/)
      .map((value) => Number.parseFloat(value));

    if (Number.isFinite(viewBoxWidth) && Number.isFinite(viewBoxHeight)) {
      return { width: viewBoxWidth, height: viewBoxHeight };
    }
  }

  return DEFAULT_METADATA;
}

function parsePngDimensions(buffer: Buffer) {
  const signature = buffer.toString("hex", 0, 8);

  if (signature !== "89504e470d0a1a0a" || buffer.length < 24) {
    return DEFAULT_METADATA;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function resolveAssetPath(src: string) {
  const publicRoot = path.resolve(process.cwd(), "public");
  const assetPath = path.resolve(publicRoot, src.replace(/^\/+/, ""));

  if (assetPath === publicRoot || assetPath.startsWith(`${publicRoot}${path.sep}`)) {
    return assetPath;
  }

  return null;
}

export function getPublicImageMetadata(src: string): PublicImageMetadata {
  const normalizedSrc = src.split("?")[0];
  const cachedMetadata = metadataCache.get(normalizedSrc);

  if (cachedMetadata) {
    return cachedMetadata;
  }

  const assetPath = resolveAssetPath(normalizedSrc);
  const unoptimized = isSvgImage(normalizedSrc);

  if (!assetPath) {
    return { ...DEFAULT_METADATA, unoptimized };
  }

  let metadata: PublicImageSize = DEFAULT_METADATA;

  try {
    if (unoptimized) {
      metadata = parseSvgDimensions(readFileSync(assetPath, "utf8"));
    } else if (path.extname(normalizedSrc).toLowerCase() === ".png") {
      metadata = parsePngDimensions(readFileSync(assetPath));
    }
  } catch {
    metadata = DEFAULT_METADATA;
  }

  const resolvedMetadata = {
    ...metadata,
    unoptimized,
  };

  metadataCache.set(normalizedSrc, resolvedMetadata);

  return resolvedMetadata;
}
