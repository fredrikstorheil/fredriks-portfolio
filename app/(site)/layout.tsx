import { TabsNav } from "@/components/nav/tabs-nav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <header className="appHeader" aria-label="Hovednavigasjon">
        <div className="appHeaderInner">
          <div className="appHeaderTop">
            <p className="appName">Fredrik Storheil</p>
          </div>
          <TabsNav />
        </div>
      </header>

      <main className="appMain">{children}</main>
    </div>
  );
}
