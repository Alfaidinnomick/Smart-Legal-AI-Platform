import { NavLink } from "react-router-dom";

const navItems = [
  { key: "home", label: "Home", icon: "home", to: "/" },
  { key: "students", label: "Students", icon: "school", to: "/student-section" },
  { key: "lawyers", label: "Lawyers", icon: "gavel", to: "/lawyer-section" },
  { key: "media", label: "Media", icon: "videocam", to: "/media-page" },
  { key: "documents", label: "Documents", icon: "description", to: "#" },
  { key: "history", label: "History", icon: "history", to: "#" },
];

function Sidebar({
  activeKey,
  showLogoBadge = false,
  headerPadding = "p-6",
  headerClassName = "",
  navClassName = "flex-1 px-4 space-y-2 mt-4",
  footerClassName = "px-4 py-6 mt-auto space-y-2",
  footerBorder = false,
  subtitleClassName = "text-[10px] uppercase tracking-widest text-slate-500 mt-1",
  ctaContent = "New Consultation",
  ctaClassName = "w-full signature-gradient text-on-primary py-3 rounded-xl font-bold text-sm mb-4 shadow-lg shadow-primary/20",
  settingsClassName = "flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 text-sm",
}) {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-full h-screen w-64 flex-col border-r-0 bg-slate-50 font-manrope antialiased tracking-tight dark:bg-slate-950">
      <div className={`${headerPadding} ${headerClassName}`.trim()}>
        {showLogoBadge ? (
          <div className="flex items-center space-x-3">
            <div className="signature-gradient flex h-8 w-8 items-center justify-center rounded-lg text-white">
              <span className="material-symbols-outlined text-sm">gavel</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sovereign AI</h1>
              <p className={subtitleClassName}>Legal Framework</p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sovereign AI</h1>
            <p className={subtitleClassName}>Legal Framework</p>
          </>
        )}
      </div>

      <nav className={navClassName}>
        {navItems.map((item) => {
          const isActive = item.key === activeKey;
          const baseClass = "flex items-center rounded-xl duration-200 ease-in-out transition-colors";
          const activeClass =
            "text-blue-700 dark:text-blue-400 font-semibold border-r-2 border-blue-700 dark:border-blue-400 bg-slate-200/50 dark:bg-slate-800/50";
          const inactiveClass =
            "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50";
          const spacingClass = activeKey === "lawyers" ? "space-x-3 px-4 py-3" : "gap-3 px-4 py-3";
          const content = (
            <>
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className={activeKey === "lawyers" ? "font-medium" : ""}>{item.label}</span>
            </>
          );

          if (item.to === "#") {
            return (
              <a key={item.key} className={`${baseClass} ${spacingClass} ${isActive ? activeClass : inactiveClass}`} href="#">
                {content}
              </a>
            );
          }

          return (
            <NavLink
              key={item.key}
              className={`${baseClass} ${spacingClass} ${isActive ? activeClass : inactiveClass}`}
              to={item.to}
            >
              {content}
            </NavLink>
          );
        })}
      </nav>

      <div className={`${footerClassName} ${footerBorder ? "border-t border-slate-200/50" : ""}`.trim()}>
        <button className={ctaClassName}>{ctaContent}</button>
        <div className={footerBorder ? "mt-6 space-y-1" : ""}>
          <a className={settingsClassName} href="#">
            <span className="material-symbols-outlined text-lg">settings</span>
            <span>Settings</span>
          </a>
          <a className={settingsClassName} href="#">
            <span className="material-symbols-outlined text-lg">help_center</span>
            <span>Support</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
