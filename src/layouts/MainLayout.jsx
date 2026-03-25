import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

function MainLayout({ sidebarProps, topBarProps, containerClassName = "ml-64 min-h-screen flex flex-col", children }) {
  return (
    <div className="bg-background text-on-surface">
      <Sidebar {...sidebarProps} />
      <div className={containerClassName}>
        <TopBar {...topBarProps} />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
