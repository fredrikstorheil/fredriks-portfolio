# fredriks-portfolio — CLAUDE.md

Project context for Claude Code. Keep this file updated as the codebase evolves.

## Tech stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules / global CSS (`app/globals.css`)
- **Font**: Manrope (configured in `app/layout.tsx`)
- **Database**: None

## Project structure

```
app/
  (site)/
    layout.tsx          # Shared site layout: header + nav tabs
    page.tsx            # Home page: intro + project cards
    projects/
      [slug]/
        page.tsx        # Dynamic project page (legacy + case layout)
components/
  case/                 # Modular case layout components
    artifacts-gallery.tsx
    build-plan.tsx
    case-header.tsx
    case-section.tsx
    data-model.tsx
    exceptions-list.tsx
    findings-grid.tsx
    flow-map.tsx
    scope-matrix.tsx
    scoreboard.tsx
    index.ts
  projects/
    project-cards.tsx
  icons.tsx
  nav/
  theme/
data/
  projects.ts           # Project list, types, and getProjectBySlug helper
  project-case.ts       # Types for modular case content (CaseHeaderData, etc.)
public/
  images/               # Portrait + project mockups
```

## Data model

### `data/projects.ts`

- `Project` type: `slug`, `title`, `subtitle`, `logo`, `signals`, `heroText`, `context`, `role`, `process`, `outcome`, `caseContent?`
- `projects` array: all projects
- `getProjectBySlug(slug)` helper

Current projects (slugs): `resource`, `credit-builder`, `portfolio-insight`, `scoreflow`

### `data/project-case.ts`

Typed building blocks for rich case pages:

| Type | Purpose |
|---|---|
| `CaseHeaderData` | Title, intro, role, team, timeline, responsibilities, deliverables |
| `CaseFinding` | Research/insight findings |
| `CaseKpi` | Key result metrics |
| `CaseScope` | MoSCoW-style scope matrix |
| `CaseFlowNode` / `CaseFlow` | User flow nodes with screens |
| `CaseException` | Edge case handling table |
| `CaseDataEntity` | Data model entities |
| `ProjectCaseContent` | Aggregates all above into one content object |

## Case layout system

Projects with `caseContent` defined use the modular case layout (rendered in `app/(site)/projects/[slug]/page.tsx`). Projects without fall back to `renderLegacyContent()`.

Case sections rendered in order: `CaseHeader → FindingsGrid → Scoreboard → ScopeMatrix → FlowMap → ExceptionsList → DataModel → BuildPlan → ArtifactsGallery → Reflection`

## Language

All user-facing copy is in **Norwegian (Bokmål)**, including component text, case content, and UI labels. This includes characters æ, ø, å — use them correctly.

## Key conventions

- CSS class names use camelCase (e.g. `projectBodyText`, `caseReflectionList`)
- Project-specific CSS scoped via `projectPage-{slug}` class on the page wrapper
- `renderProjectText()` in the project page parses newline-separated text with `**bold**` for headings and `- ` for lists
- Static params generated via `generateStaticParams()` from the projects array
