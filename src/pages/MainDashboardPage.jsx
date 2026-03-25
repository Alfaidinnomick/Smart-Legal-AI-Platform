import MainLayout from "../layouts/MainLayout";

function MainDashboardPage() {
  return (
    <MainLayout
      sidebarProps={{
        activeKey: "home",
      }}
      topBarProps={{
        searchPlaceholder: "Search case law...",
      }}
    >
      <main className="mx-auto w-full max-w-7xl flex-1 p-10">
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-on-surface">
              Precision Jurisprudence, <span className="text-secondary">Instantly.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-on-surface-variant">
              Access Morocco&apos;s most advanced legal intelligence engine. Analyze codes, draft documents, and navigate
              procedures with digital certainty.
            </p>
          </div>
          <div className="group relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-secondary/20 to-tertiary/20 blur-xl opacity-50 transition duration-1000 group-hover:opacity-100"></div>
            <div className="relative flex flex-col rounded-[2rem] bg-surface-container-lowest p-2 shadow-2xl">
              <div className="flex items-center px-6 py-4">
                <span className="material-symbols-outlined mr-4 text-3xl text-secondary">bolt</span>
                <input
                  className="font-body flex-1 border-none bg-transparent text-xl text-on-surface placeholder:text-outline/50 focus:ring-0"
                  placeholder="Ask any legal question..."
                  type="text"
                />
                <button className="signature-gradient flex items-center justify-center rounded-2xl p-3 text-white shadow-lg hover:opacity-90">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="flex items-center justify-between border-t border-outline-variant/10 px-6 py-4">
                <div className="flex gap-2">
                  <button className="rounded-full bg-surface-container-low px-4 py-1.5 text-xs font-medium transition-colors hover:bg-surface-container-high">
                    Draft a legal document
                  </button>
                  <button className="rounded-full bg-surface-container-low px-4 py-1.5 text-xs font-medium transition-colors hover:bg-surface-container-high">
                    Explain a law
                  </button>
                  <button className="rounded-full bg-surface-container-low px-4 py-1.5 text-xs font-medium transition-colors hover:bg-surface-container-high">
                    Summarize a case
                  </button>
                  <button className="rounded-full bg-surface-container-low px-4 py-1.5 text-xs font-medium transition-colors hover:bg-surface-container-high">
                    Prepare for exam
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-outline">Confidence Level</span>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-6 rounded-full bg-tertiary shadow-[0_0_8px_rgba(0,78,51,0.4)]" title="High Confidence"></div>
                    <div className="h-1.5 w-6 rounded-full bg-secondary opacity-30"></div>
                    <div className="h-1.5 w-6 rounded-full bg-error opacity-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-6">
          <div className="group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-[2rem] bg-surface-container-low p-8 md:col-span-8">
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-2xl">menu_book</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Moroccan Codes &amp; Laws</h3>
                  <p className="text-sm text-on-surface-variant">Full legislative database with real-time updates.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="cursor-pointer rounded-2xl border border-white bg-white/60 p-4 transition-all hover:bg-white">
                  <span className="mb-1 block text-xs font-bold uppercase text-secondary">Code Civil</span>
                  <p className="text-sm text-on-surface">Dahir des Obligations et des Contrats</p>
                </div>
                <div className="cursor-pointer rounded-2xl border border-white bg-white/60 p-4 transition-all hover:bg-white">
                  <span className="mb-1 block text-xs font-bold uppercase text-secondary">Code PÃ©nal</span>
                  <p className="text-sm text-on-surface">Comprehensive criminal justice framework</p>
                </div>
              </div>
            </div>
            <img
              className="absolute right-0 bottom-0 w-1/3 opacity-10 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-20"
              data-alt="close up of leather bound law books on a dark wooden shelf with dramatic warm lighting from the side"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjYUZQqn8iVnq29roXcsbXvlW9CrFc787tLm2oIpXUD0j1RqlOpmg-XDgMj0QNDl7pZJ1KycEk29BdinidiudgRlqCz9rRsMkFUZGMxsSP1J18c8EADh_aBg17dUYxHdeXXw7lila9hzpFJTih7pVnxedDGlWhqt2sGIF88Z5kzaooMcfOUTufOj1XVXTHgGyfv3riw3Gjx1FCA1PdDpif-LSSNWlqXUEmqnm2HuUGtE7cYMaQ00w1Cgqg8R0wN4RT5cpMH4_eavU"
            />
            <div className="mt-8 flex justify-end">
              <button className="flex items-center gap-2 text-sm font-bold text-secondary">
                Browse Library <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
          </div>

          <div className="relative col-span-12 overflow-hidden rounded-[2rem] bg-primary p-8 text-on-primary md:col-span-4">
            <div className="relative z-10 flex h-full flex-col">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary-fixed">balance</span>
              <h3 className="mb-2 text-2xl font-bold">Case Law Analytics</h3>
              <p className="mb-8 text-sm text-on-primary-container">
                Access Supreme Court rulings and comparative foreign jurisprudence with AI synthesis.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 py-2 text-xs">
                  <span>Recent Moroccan Rulings</span>
                  <span className="rounded bg-primary-container px-2 py-0.5">+12</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 py-2 text-xs">
                  <span>Comparative Law (FR/ES)</span>
                  <span className="rounded bg-primary-container px-2 py-0.5">840 Cases</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 rounded-[2rem] border border-outline-variant/5 bg-surface-container-lowest p-8 shadow-sm md:col-span-4">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary/10 text-tertiary">
              <span className="material-symbols-outlined">how_to_reg</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Citizen Actions</h3>
            <p className="mb-6 text-sm text-on-surface-variant">
              Simplified procedures for notarial services, court drafts, and formal legal letters.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>
                Demand Letters
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>
                Rental Agreements
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>
                Power of Attorney
              </li>
            </ul>
          </div>

          <div className="col-span-12 rounded-[2rem] bg-secondary-fixed p-8 text-on-secondary-fixed md:col-span-4">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                <span className="material-symbols-outlined">school</span>
              </div>
              <span className="rounded-full bg-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Education</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Student Portal</h3>
            <p className="mb-6 text-sm text-on-secondary-fixed-variant">
              Master the bar exam with AI-powered quizzes, lecture summaries, and study guides.
            </p>
            <button className="w-full rounded-xl bg-white py-3 text-sm font-bold text-secondary transition-shadow hover:shadow-md">
              Start Quiz
            </button>
          </div>

          <div className="group col-span-12 cursor-pointer rounded-[2rem] bg-surface-container-low p-8 transition-all hover:bg-surface-container-high md:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">gavel</span>
              <h3 className="text-xl font-bold">Lawyer Suite</h3>
            </div>
            <p className="mb-6 text-sm text-on-surface-variant">
              Professional contracts, corporate filings, and high-stakes court document templates.
            </p>
            <div className="mb-6 flex -space-x-2">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-slate-200">
                <img
                  className="h-full w-full object-cover"
                  data-alt="professional headshot of a lawyer in a dark suit against a blurred office background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-C7UsGUsW8w790vmYbDVlkbtNDBmRHX-OmmQO1u-Ks43Bu5j6xeqJwjpJDb4fEseBiMDj_77h0oBzRnc1v8r6APFppfq7qgtRi3WjZnMZTUNv3ic7DPScknnEw0g9gdhIZQOLwsfU15tEMIOk1EV0NAHHmYA-XYNsbGbNn75rOHK_JldaFlgMuLw1RaU4w7GUIF4nYRTVuyq1e6TsVCoK4FlOVMLzjd-7y0zstmBeRfzW3eA7qLNPJG-fXUJ5LxrU3lFESCb_PU"
                />
              </div>
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-slate-200">
                <img
                  className="h-full w-full object-cover"
                  data-alt="professional headshot of a legal consultant smiling softly with a neutral gray background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mgfM0k-VR_gNDv34uREAAgU683TOexbhlI26y84s62_NlZTztwz9Ck7KhOvaAuBxgsbl07T2fkfZkxM1eXd1I_0N0SFbQU9p9AJ8qkYEqUNR1zmFnHY__mYE8hrQrUzeiBnRJZ4U9n8gZKmlYQ6XH-YImZTCM_87SMIIJzHezty63HK5CE73LGkU4hjK_vyc0Hr-BewXn06JeCkWm63abMq27F08SdVrrhWZQLXSEJ3CYJYEeCo1N45anVc_R6WSkR_uGBBeRAQ"
                />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-[10px] font-bold">
                +40
              </div>
            </div>
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-outline-variant/10">
              <div className="h-full w-2/3 bg-secondary"></div>
            </div>
            <div className="mt-2 flex justify-between">
              <span className="text-[10px] font-bold text-outline">Subscription Usage</span>
              <span className="text-[10px] font-bold text-secondary">68%</span>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-outline-variant/10 py-10">
          <div className="flex flex-col items-center justify-between gap-6 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-error/5 p-3 text-error">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Legal Disclaimer</p>
                <p className="text-sm text-on-surface-variant">
                  Sovereign Intelligence provides guidance and data synthesis, not professional legal advice.
                </p>
              </div>
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-outline">
              <a className="transition-colors hover:text-primary" href="#">
                Privacy Policy
              </a>
              <a className="transition-colors hover:text-primary" href="#">
                Terms of Service
              </a>
              <a className="transition-colors hover:text-primary" href="#">
                Ethics Guidelines
              </a>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed right-8 bottom-8 z-50">
        <button className="signature-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-2xl transition-transform hover:scale-105">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
            support_agent
          </span>
        </button>
      </div>
    </MainLayout>
  );
}

export default MainDashboardPage;
