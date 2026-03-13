import { AppNav } from "@/components/nav/app-nav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="appShell">
      <a className="skipLink" href="#main-content">
        Hopp til innhold
      </a>
      <AppNav />

      <main id="main-content" className="appMain" tabIndex={-1}>
        <div className="appMainInner">{children}</div>
      </main>
    </div>
  );
}
