import { TabsNav } from "@/components/nav/tabs-nav";

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
      <header className="appNav" aria-label="Hovednavigasjon">
        <div className="appNavInner">
          <div className="appNavTop">
            <p className="appName">Fredrik Storheil</p>
            <p className="appRole">Produktdesigner</p>
          </div>
          <TabsNav />
        </div>
      </header>

      <main id="main-content" className="appMain" tabIndex={-1}>
        <div className="appMainInner">{children}</div>
      </main>
    </div>
  );
}
