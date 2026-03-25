import MainLayout from "../layouts/MainLayout";

function StudentSectionPage() {
  return (
    <MainLayout
      sidebarProps={{
        activeKey: "students",
        navClassName: "flex-1 px-4 space-y-1",
        footerClassName: "p-4 border-t border-slate-200/50 dark:border-slate-800/50",
        subtitleClassName: "text-xs uppercase tracking-widest text-slate-500 mt-1",
        ctaClassName: "w-full signature-gradient text-white py-3 rounded-xl font-semibold mb-6 shadow-lg shadow-primary/20",
        settingsClassName: "flex items-center gap-3 px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 text-sm",
      }}
      topBarProps={{
        showBrand: false,
        noticeText: "AI provides guidance, not legal advice",
        searchPlaceholder: "Search curriculum...",
        wrapperClassName:
          "flex items-center justify-between px-8 w-full h-16 sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all",
        innerClassName: "gap-4",
        searchWrapperClassName: "relative group",
        searchInputClassName:
          "pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-secondary/20 w-64 transition-all",
        upgradeClassName: "text-secondary font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity",
        actionsClassName: "flex items-center gap-2",
      }}
      containerClassName="ml-64"
    >
      <main className="mx-auto max-w-7xl space-y-20 p-12">
        <section className="signature-gradient relative flex items-center justify-between overflow-hidden rounded-[2rem] p-12 text-white">
          <div className="relative z-10 max-w-lg space-y-6">
            <h2 className="font-headline text-5xl font-extrabold tracking-tight">The Future of Legal Mastery</h2>
            <p className="text-lg leading-relaxed text-primary-fixed">
              Harness Sovereign Intelligence to navigate complex case law, synthesize statutes, and accelerate your path to the
              bar.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 rounded-full bg-surface-container-lowest px-8 py-3 font-bold text-primary shadow-xl transition-colors hover:bg-blue-50">
                <span className="material-symbols-outlined">auto_awesome</span>
                Summarize with AI
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="material-symbols-outlined">psychology</span>
                Learn with AI
              </button>
            </div>
          </div>
          <div className="group relative hidden lg:block">
            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl transition-all duration-700 group-hover:bg-secondary/40"></div>
            <img
              alt="Legal books and digital tablet"
              className="relative z-10 h-auto w-80 rotate-3 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:rotate-0"
              data-alt="Modern close-up of heavy leather-bound legal books next to a glowing minimalist digital tablet on a clean white desk"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYDE_wEpYGmElSJSzA1CG_p9nV2EOJRhYAORyIJw7GSJEWO05An5hZpOu8x1bFJrjlBjzrUbPzV0gDrPWbSQkW7uj5WHkF_6b39bTPcN7jZ06RIIoHR_LtcYX5ISrMuvi0dZywlIA9AbxWihgIzqZ2YYN3761K9_OMVa4b60Jn7G0FozYgTZ1aQja-r34Je-RXRtlmRWm48hCUCLQQ9eIsjWwKgYDY4ZXEcYFZwDMQQ8R7fHeBQNom8aMU_hFebiWwHYtX8f3ZnTg"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="space-y-8 md:col-span-8">
            <div className="flex items-baseline justify-between">
              <h3 className="font-headline text-2xl font-bold text-on-background">Active Courses</h3>
              <a className="text-sm font-semibold text-secondary hover:underline" href="#">
                View All Curriculum
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group rounded-[1.5rem] border border-transparent bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:border-secondary/10 hover:shadow-xl">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/5 text-secondary">
                    <span className="material-symbols-outlined">balance</span>
                  </div>
                  <span className="rounded-full bg-tertiary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-tertiary">
                    In Progress
                  </span>
                </div>
                <h4 className="font-headline mb-2 text-xl font-bold">Civil Law &amp; Procedure</h4>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                  Understanding liability, negligence, and the mechanics of civil litigation.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                    <span>Curriculum Progress</span>
                    <span>74%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-surface-container-high">
                    <div className="h-full w-[74%] rounded-full bg-secondary transition-all"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-transparent bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:border-secondary/10 hover:shadow-xl">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/5 text-secondary">
                    <span className="material-symbols-outlined">account_balance</span>
                  </div>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                    New Content
                  </span>
                </div>
                <h4 className="font-headline mb-2 text-xl font-bold">Constitutional Law</h4>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                  The foundational principles of state power and individual liberties.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                    <span>Curriculum Progress</span>
                    <span>22%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-surface-container-high">
                    <div className="h-full w-[22%] rounded-full bg-secondary transition-all"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-[2rem] bg-surface-container-low p-8 md:col-span-4">
            <div className="mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">draw</span>
              <h3 className="font-headline text-xl font-bold">Recent Notes</h3>
            </div>
            <div className="flex-1 space-y-4">
              {[
                {
                  category: "Civil Procedure",
                  title: "Summary of Res Judicata",
                  text: "Analysis of finality in judicial proceedings and bars on subsequent litigation...",
                },
                {
                  category: "Torts",
                  title: "Vicarious Liability Matrix",
                  text: "Relationship between employee actions and employer responsibility standards...",
                },
                {
                  category: "Constitutional",
                  title: "Due Process Clauses",
                  text: "Comparison of the 5th and 14th amendments regarding procedural protections...",
                },
              ].map((note) => (
                <div key={note.title} className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-5 transition-colors hover:bg-white">
                  <p className="mb-1 text-xs font-bold uppercase tracking-tighter text-secondary">{note.category}</p>
                  <h5 className="font-bold text-on-surface transition-colors group-hover:text-secondary">{note.title}</h5>
                  <p className="line-clamp-2 mt-2 text-sm text-on-surface-variant">{note.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-outline-variant/30 py-4 font-bold text-on-surface transition-colors hover:bg-surface-container-highest">
              <span className="material-symbols-outlined">add</span>
              Create New Note
            </button>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-headline text-3xl font-extrabold text-on-background">Bar Readiness Quizzes</h3>
              <p className="mt-2 text-on-surface-variant">Personalized adaptive assessments powered by Sovereign AI.</p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-surface-container-high px-6 py-2">
              <div className="h-3 w-3 rounded-full bg-tertiary"></div>
              <span className="text-sm font-bold">Overall Accuracy: 88.4%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="group flex flex-col overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img
                  alt="Legal document with glasses"
                  className="h-full w-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  data-alt="Monochromatic overhead shot of a legal contract with elegant tortoise-shell glasses lying on top of the text"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLk96_m8-dR9QQyyuLJ3hJbUdkh4ODz4J9ObV13eS6fFMK4mC7oMUyuBb1fw7ykRA21r7Yb54TKGhVL7I-ZlplLmjzoOzBV2oBUDmNGNtMDl2SMy24jIFpsIxUNUnCM-1PWao9Iibv6hnUHPdxQYNDdP7Gv7NAB1Ysk_Sv1qldajaI4ue22r-2em6VT6IbSN05fQizBqNxcDZ_4VKLhZavMTuA8af40g23BWH-d5TXIyLU_t6V9eUBICUWLi6WuTlRXf7IQhNYCT4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                    Practice Exam
                  </span>
                </div>
              </div>
              <div className="space-y-4 p-8">
                <h4 className="font-headline text-xl font-bold">Ethics &amp; Professional Conduct</h4>
                <div className="flex items-center gap-6 text-sm font-medium text-on-surface-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">timer</span> 20 mins
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">quiz</span> 15 Questions
                  </div>
                </div>
                <button className="w-full rounded-2xl bg-secondary py-4 font-bold text-white transition-opacity hover:opacity-90">
                  Start Assessment
                </button>
              </div>
            </div>

            <div className="group flex flex-col overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img
                  alt="Statue of justice"
                  className="h-full w-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  data-alt="Distant silhouette of Lady Justice statue against a bright hazy background emphasizing scales and sword"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxPmuzD5Dr7Oom1vDibwW2Rv7ae5uukTthT-9S40VlPTi8_nYLWEqUwgf6vLU537Fa_Fs2kL9z4-jQ0m7AXgj_c9YPV91uTTJuTMqn0b5-T2TeGH6eGQ5BIireYMQ67P91FwX-nP38v_OewUWfGjA8_VgyHKOMxZCEklkaXePo0f2QIsvqXcNtTLQffh-nnDFrKhCYXTU3Ix4a8nZNMrN0Ki7Q9EdO-HBrZiqOW11nabwcig4gmCN8aIq97-QQRcZu4VQk1LoIQSw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="rounded-full bg-tertiary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                    AI Recommendation
                  </span>
                </div>
              </div>
              <div className="space-y-4 p-8">
                <h4 className="font-headline text-xl font-bold">Criminal Procedure Drill</h4>
                <div className="flex items-center gap-6 text-sm font-medium text-on-surface-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">timer</span> 10 mins
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">quiz</span> 10 Questions
                  </div>
                </div>
                <button className="w-full rounded-2xl border-2 border-secondary py-4 font-bold text-secondary transition-colors hover:bg-secondary/5">
                  Resume Quiz
                </button>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-sm">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-secondary/5"></div>
              <div className="relative z-10">
                <div className="relative mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-surface-container-high">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 96 96">
                    <circle
                      className="text-secondary"
                      cx="48"
                      cy="48"
                      fill="none"
                      r="42"
                      stroke="currentColor"
                      strokeDasharray="264"
                      strokeDashoffset="66"
                      strokeWidth="6"
                    ></circle>
                  </svg>
                  <span className="absolute text-2xl font-black text-on-surface">75%</span>
                </div>
                <h4 className="font-headline text-xl font-bold">Weekly Mastery</h4>
                <p className="mx-auto mt-2 max-w-[200px] text-sm text-on-surface-variant">
                  You&apos;re in the top 5% of Sovereign AI users this week.
                </p>
                <div className="mt-8 flex justify-center gap-2">
                  <div className="h-12 w-3 rounded-full bg-secondary"></div>
                  <div className="h-12 w-3 rounded-full bg-secondary"></div>
                  <div className="h-12 w-3 rounded-full bg-secondary"></div>
                  <div className="h-12 w-3 rounded-full bg-secondary/20"></div>
                  <div className="h-12 w-3 rounded-full bg-secondary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-12 pt-10 lg:grid-cols-2">
          <div className="glass-panel flex items-start gap-8 rounded-[2rem] p-10 transition-shadow hover:shadow-lg">
            <div className="rounded-2xl bg-primary p-4 text-on-primary">
              <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-2xl font-bold">Summarize with AI</h4>
              <p className="leading-relaxed text-on-surface-variant">
                Upload any judicial opinion or legal textbook chapter. Sovereign AI will extract key holdings, procedural history,
                and core arguments into a 2-minute brief.
              </p>
              <button className="flex items-center gap-2 font-bold text-secondary transition-all hover:gap-3">
                Upload Document <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="glass-panel flex items-start gap-8 rounded-[2rem] p-10 transition-shadow hover:shadow-lg">
            <div className="rounded-2xl bg-secondary p-4 text-on-secondary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-2xl font-bold">Learn with AI</h4>
              <p className="leading-relaxed text-on-surface-variant">
                Engage in a Socratic dialogue with our legal model. Challenge your understanding of difficult concepts through
                interactive case law simulation.
              </p>
              <button className="flex items-center gap-2 font-bold text-secondary transition-all hover:gap-3">
                Launch Tutor <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default StudentSectionPage;
