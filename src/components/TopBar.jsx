function TopBar({
  showBrand = true,
  brandText = "Sovereign Intelligence",
  noticeText = "AI provides guidance, not legal advice",
  searchPlaceholder = "Search case law...",
  wrapperClassName,
  innerClassName = "",
  searchWrapperClassName = "relative flex items-center",
  searchInputClassName = "bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all",
  upgradeClassName = "text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-primary/10 hover:bg-surface-container-high transition-colors",
  actionsClassName = "flex items-center gap-2",
}) {
  const wrapper =
    wrapperClassName ??
    "sticky top-0 z-40 flex h-16 w-full items-center justify-between bg-white/80 px-8 shadow-sm backdrop-blur-xl dark:bg-slate-900/80 dark:shadow-none";

  return (
    <header className={wrapper}>
      <div className={`flex items-center gap-6 ${innerClassName}`.trim()}>
        {showBrand ? (
          <>
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{brandText}</span>
            <div className="h-4 w-[1px] bg-outline-variant/30"></div>
          </>
        ) : null}
        <span className="font-manrope text-[10px] font-bold uppercase tracking-widest text-blue-600">{noticeText}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className={searchWrapperClassName}>
          <span className="material-symbols-outlined absolute left-3 text-lg text-slate-400">search</span>
          <input className={searchInputClassName} placeholder={searchPlaceholder} type="text" />
        </div>
        <button className={upgradeClassName}>Upgrade</button>
        <div className={actionsClassName}>
          <button className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
