import MainLayout from "../layouts/MainLayout";

function LawyerSectionPage() {
  return (
    <MainLayout
      sidebarProps={{
        activeKey: "lawyers",
        showLogoBadge: true,
        headerClassName: "flex items-center space-x-3",
        navClassName: "flex-1 px-4 py-4 space-y-1",
        footerClassName: "px-4 py-6 mt-auto",
        footerBorder: true,
        ctaContent: (
          <>
            <span className="material-symbols-outlined text-sm">add</span>
            <span>New Consultation</span>
          </>
        ),
        ctaClassName:
          "w-full signature-gradient text-white py-3 rounded-xl font-bold text-sm shadow-sm hover:opacity-90 transition-all flex items-center justify-center space-x-2",
        settingsClassName: "flex items-center space-x-3 px-4 py-2 text-slate-500 hover:text-slate-900 transition-colors",
      }}
      topBarProps={{
        searchPlaceholder: "Search precedents...",
        wrapperClassName:
          "w-full h-16 sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex items-center justify-between px-8 border-none shadow-sm dark:shadow-none",
        searchWrapperClassName: "relative hidden lg:block",
        searchInputClassName:
          "w-64 bg-surface-container-low border-none rounded-full py-2 px-10 text-sm focus:ring-2 focus:ring-secondary/20 placeholder:text-outline transition-all",
        upgradeClassName:
          "bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold hover:shadow-md transition-all",
        actionsClassName: "flex items-center space-x-3",
      }}
    >
      <main className="flex-1 space-y-10 p-8">
        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-12 flex items-center justify-between">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Legal Workbench</h2>
              <p className="mt-1 text-on-surface-variant">Manage active litigation and draft complex legal instruments.</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 rounded-xl bg-surface-container-high px-4 py-2 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-highest">
                <span className="material-symbols-outlined text-lg">upload_file</span>
                <span>Upload Case</span>
              </button>
              <button className="signature-gradient rounded-xl px-6 py-2 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg">
                New Draft
              </button>
            </div>
          </div>

          <div className="col-span-12 space-y-6 lg:col-span-3">
            <div className="rounded-2xl bg-surface-container-low p-6">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Document Templates</h3>
              <div className="space-y-4">
                <div className="group cursor-pointer rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-secondary">contract</span>
                      <span className="text-sm font-bold">Master Service Agreement</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-outline opacity-0 transition-opacity group-hover:opacity-100">
                      chevron_right
                    </span>
                  </div>
                  <p className="mt-2 text-[10px] text-on-surface-variant">B2B Software Compliance â€¢ Updated 2d ago</p>
                </div>
                <div className="group cursor-pointer rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-secondary">balance</span>
                      <span className="text-sm font-bold">Summary Judgment Motion</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-outline opacity-0 transition-opacity group-hover:opacity-100">
                      chevron_right
                    </span>
                  </div>
                  <p className="mt-2 text-[10px] text-on-surface-variant">Civil Procedure â€¢ Standard Federal Form</p>
                </div>
                <div className="group cursor-pointer rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-secondary">gavel</span>
                      <span className="text-sm font-bold">Affidavit of Facts</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-outline opacity-0 transition-opacity group-hover:opacity-100">
                      chevron_right
                    </span>
                  </div>
                  <p className="mt-2 text-[10px] text-on-surface-variant">Discovery Phase â€¢ Notarized Template</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-lg py-2 text-xs font-bold uppercase tracking-wider text-secondary transition-colors hover:bg-secondary/5">
                View All Templates
              </button>
            </div>

            <div className="rounded-2xl bg-surface-container-low p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Case Analytics</h3>
                <span className="material-symbols-outlined text-tertiary">trending_up</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <span className="text-xs font-medium text-on-surface-variant">Win Probability</span>
                  <span className="text-sm font-bold text-tertiary">84%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full w-[84%] bg-tertiary"></div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-xs font-medium text-on-surface-variant">Risk Exposure</span>
                  <span className="text-sm font-bold text-error">Low</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="flex h-[800px] flex-col overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container-lowest shadow-sm">
              <div className="flex items-center justify-between border-b border-surface-container-low bg-white px-6 py-4">
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-on-surface">Mutual_NDA_v2.docx</span>
                  <span className="rounded bg-tertiary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-tertiary">
                    AI Verified
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-lg">undo</span>
                  </button>
                  <button className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-lg">redo</span>
                  </button>
                  <div className="mx-2 h-6 w-[1px] bg-outline-variant/30"></div>
                  <button className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-lg">print</span>
                  </button>
                  <button className="signature-gradient ml-2 rounded-lg px-4 py-1.5 text-xs font-bold text-white">Finalize</button>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden">
                <div className="no-scrollbar flex-1 overflow-y-auto bg-white p-12">
                  <div className="mx-auto max-w-2xl space-y-8">
                    <div className="mb-12 text-center">
                      <h1 className="text-xl font-bold uppercase tracking-widest text-on-surface">MUTUAL NON-DISCLOSURE AGREEMENT</h1>
                    </div>
                    <p className="text-sm leading-relaxed text-on-surface">
                      This Mutual Non-Disclosure Agreement (the &quot;Agreement&quot;) is entered into as of this 24th day of October,
                      2023, by and between Sovereign Tech Corp (&quot;Disclosing Party&quot;) and Alpha Legal Partners (&quot;Receiving
                      Party&quot;).
                    </p>
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold">1. DEFINITION OF CONFIDENTIAL INFORMATION</h4>
                      <p className="text-sm leading-relaxed text-on-surface">
                        For purposes of this Agreement, &quot;Confidential Information&quot; shall include all information or material
                        that has or could have commercial value or other utility in the business in which Disclosing Party is
                        engaged.
                      </p>
                    </div>
                    <div className="space-y-4 rounded-xl border-l-4 border-secondary bg-secondary/5 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="text-sm font-bold text-secondary">2. EXCLUSIONS FROM CONFIDENTIAL INFORMATION</h4>
                        <span className="rounded bg-white px-2 py-1 text-[10px] font-bold uppercase text-secondary shadow-sm">
                          AI Drafting Suggestion
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-on-surface-variant italic">
                        Receiving Party&apos;s obligations under this Agreement do not extend to information that is: (a) publicly known
                        at the time of disclosure or subsequently becomes publicly known through no fault of the Receiving Party; (b)
                        discovered or created by the Receiving Party before disclosure by Disclosing Party; (c) learned by the
                        Receiving Party through legitimate means other than from the Disclosing Party or Disclosing Party&apos;s
                        representatives.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold">3. OBLIGATIONS OF RECEIVING PARTY</h4>
                      <p className="text-sm leading-relaxed text-on-surface">
                        Receiving Party shall hold and maintain the Confidential Information in strictest confidence for the sole and
                        exclusive benefit of the Disclosing Party. Receiving Party shall carefully restrict access to Confidential
                        Information to employees, contractors, and third parties as is reasonably required.
                      </p>
                    </div>
                  </div>
                </div>

                <aside className="flex w-80 flex-col border-l border-surface-container-low bg-surface-container-lowest">
                  <div className="no-scrollbar space-y-8 overflow-y-auto p-6">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary">AI Drafting Assistant</h4>
                      <div className="space-y-3 rounded-2xl bg-surface-container-low p-4">
                        <div className="flex items-center space-x-2 text-tertiary">
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                            auto_awesome
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider">Clause Improvement</span>
                        </div>
                        <p className="text-xs leading-relaxed text-on-surface-variant">
                          The &quot;Obligations&quot; clause is currently broad. Adding a 3-year sunset period is standard for MSAs in the Tech
                          sector.
                        </p>
                        <button className="w-full rounded-xl border border-outline-variant/30 bg-white py-2 text-xs font-bold text-secondary transition-colors hover:bg-secondary/5">
                          Apply Optimization
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Precedent Alerts</h4>
                        <span className="rounded bg-error/10 px-2 py-0.5 text-[10px] font-bold text-error">2 Risks</span>
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-xl border-l-2 border-secondary bg-surface-container-low p-3">
                          <p className="text-[11px] font-bold text-on-surface">Smith v. Delaware (2021)</p>
                          <p className="mt-1 text-[10px] text-on-surface-variant">
                            Court ruled that &apos;utility&apos; must be defined more specifically in tech IP disputes.
                          </p>
                          <a className="mt-2 inline-block text-[10px] font-bold text-secondary" href="#">
                            View Case Detail â†’
                          </a>
                        </div>
                        <div className="rounded-xl border-l-2 border-secondary bg-surface-container-low p-3">
                          <p className="text-[11px] font-bold text-on-surface">Arasaka v. Militech (2023)</p>
                          <p className="mt-1 text-[10px] text-on-surface-variant">
                            Recent ruling on non-compete enforceability in remote work scenarios.
                          </p>
                          <a className="mt-2 inline-block text-[10px] font-bold text-secondary" href="#">
                            View Case Detail â†’
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="flex flex-col items-center justify-center rounded-xl bg-surface-container-low p-3 transition-colors hover:bg-surface-container-high">
                          <span className="material-symbols-outlined mb-1 text-secondary">policy</span>
                          <span className="text-[9px] font-bold text-on-surface-variant">Review IP</span>
                        </button>
                        <button className="flex flex-col items-center justify-center rounded-xl bg-surface-container-low p-3 transition-colors hover:bg-surface-container-high">
                          <span className="material-symbols-outlined mb-1 text-secondary">translate</span>
                          <span className="text-[9px] font-bold text-on-surface-variant">Translate</span>
                        </button>
                        <button className="flex flex-col items-center justify-center rounded-xl bg-surface-container-low p-3 transition-colors hover:bg-surface-container-high">
                          <span className="material-symbols-outlined mb-1 text-secondary">security</span>
                          <span className="text-[9px] font-bold text-on-surface-variant">Compliance</span>
                        </button>
                        <button className="flex flex-col items-center justify-center rounded-xl bg-surface-container-low p-3 transition-colors hover:bg-surface-container-high">
                          <span className="material-symbols-outlined mb-1 text-secondary">share</span>
                          <span className="text-[9px] font-bold text-on-surface-variant">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-surface-container-low p-4">
                    <div className="relative">
                      <input
                        className="w-full rounded-2xl border-none bg-surface-container-low py-3 pr-12 pl-4 text-xs focus:ring-secondary/30"
                        placeholder="Ask AI to draft..."
                        type="text"
                      />
                      <button className="absolute top-1/2 right-2 -translate-y-1/2 text-secondary">
                        <span className="material-symbols-outlined">send</span>
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="flex items-center space-x-4 rounded-2xl bg-surface-container-low p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <span className="material-symbols-outlined">folder_open</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Active Cases</p>
              <p className="text-2xl font-black text-on-surface">24</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-2xl bg-surface-container-low p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary">
              <span className="material-symbols-outlined">history_edu</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Drafts Pending</p>
              <p className="text-2xl font-black text-on-surface">08</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-2xl bg-surface-container-low p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">alarm</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Hours Saved</p>
              <p className="text-2xl font-black text-on-surface">142</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-2xl bg-surface-container-low p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-error/10 text-error">
              <span className="material-symbols-outlined">event_note</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Hearings Today</p>
              <p className="text-2xl font-black text-on-surface">02</p>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default LawyerSectionPage;
