import { TabsNav } from "@/components/nav/tabs-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="appShell">
      <header className="appNav" aria-label="Hovednavigasjon">
        <div className="appNavInner">
          <div className="appNavTop">
            <p className="appName">Fredrik Storheil</p>
            <ThemeToggle />
          </div>
          <TabsNav />
        </div>
      </header>

      <main className="appMain">
        <div className="appMainInner">{children}</div>
      </main>
    </div>
  );
}
