import MainLayout from "../layouts/MainLayout";

function MediaPage() {
  return (
    <MainLayout
      sidebarProps={{
        activeKey: "media",
        headerPadding: "p-8",
        navClassName: "flex-1 px-4 space-y-2",
        footerClassName: "p-4 space-y-4",
        footerBorder: false,
        ctaClassName: "w-full signature-gradient text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20",
        settingsClassName: "flex items-center px-4 py-2 text-slate-500 hover:text-slate-900 transition-colors text-sm",
      }}
      topBarProps={{
        searchPlaceholder: "Search case law...",
        wrapperClassName:
          "w-full h-16 sticky top-0 z-40 bg-white/80 backdrop-blur-xl flex items-center justify-between px-8 shadow-sm",
        innerClassName: "gap-4",
        upgradeClassName: "text-blue-600 font-bold text-xs uppercase tracking-widest hover:opacity-80",
        searchWrapperClassName: "relative",
        searchInputClassName:
          "pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-secondary/20 w-64",
        actionsClassName: "flex items-center gap-3",
      }}
      containerClassName="ml-64 min-h-screen"
    >
      <div className="mx-auto max-w-7xl space-y-12 p-10">
        <section className="grid grid-cols-12 items-end gap-6">
          <div className="group relative col-span-12 aspect-video cursor-pointer overflow-hidden rounded-3xl shadow-2xl lg:col-span-8">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              data-alt="high-tech law office with panoramic city views at night, cool blue tones and sleek glass surfaces"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGZzMuLkebj119Ik3aN9QUH_YuCgrGM0L_AE4VgMVs5BXv7TS9lRKM4he70rqggi4Ltk4PxEkKgCeLN6i9CLQSOXk_u6720At3EiksNVVaelx_UyL-F3Yb5BaKLh9QyNr63fGL0fb9lBlP0RdegPvWxqq4DtnZDYfITEHJWX_TAkRfkRFdjpc6BeeBBCGCHRH8CkfbzVwLyRJqD2ONBW8AnPa9wBsWe5zdfty8o0ffdHarFOM9tVcEPtlfJz5EDjr4yoRYuLSYh5A"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-10">
              <div className="max-w-xl">
                <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Live Analysis
                </span>
                <h2 className="font-headline mb-3 text-4xl font-extrabold text-white">
                  The Digital Services Act: Impact on AI Governance
                </h2>
                <p className="font-body text-sm leading-relaxed text-slate-300">
                  Join Chief Counsel Sarah Miller as she breaks down the latest EU compliance mandates for generative models.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md transition-all hover:bg-white/40">
                  <span className="material-symbols-outlined text-3xl text-white" style={{ fontVariationSettings: '"FILL" 1' }}>
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
            <div className="glass-panel absolute top-10 right-10 w-72 rounded-2xl border border-white/20 p-5 shadow-xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>
                  auto_awesome
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">AI Context Engine</span>
              </div>
              <h4 className="font-headline mb-1 font-bold text-slate-900">Mandatory Disclosure</h4>
              <p className="text-xs leading-normal text-slate-600">
                Legal requirement for AI systems to explicitly state they are non-human and list data sources used for training
                outputs.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded bg-tertiary/10 px-2 py-0.5 text-[9px] font-bold text-tertiary">HIGH CONFIDENCE</span>
                <button className="flex items-center text-xs font-semibold text-secondary">
                  Cite Source <span className="material-symbols-outlined ml-1 text-sm">arrow_outward</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 flex h-full flex-col gap-6 lg:col-span-4">
            <div className="flex flex-1 flex-col justify-between rounded-3xl bg-surface-container-low p-6">
              <div>
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-secondary">Weekly Digest</span>
                <h3 className="font-headline text-xl font-bold text-on-surface">Podcast: Legal Pulse</h3>
                <p className="mt-2 text-sm text-on-surface-variant">
                  Episode 42: &quot;Algorithmic Liability in the Automotive Sector&quot;
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="h-1 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-1/3 bg-secondary"></div>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="font-mono text-[10px]">12:45 / 45:00</span>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined cursor-pointer hover:text-secondary">replay_10</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      pause_circle
                    </span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-secondary">forward_10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl bg-surface-container-lowest p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed">
                <span className="material-symbols-outlined text-primary">book_2</span>
              </div>
              <div>
                <h4 className="text-sm font-bold">Download Transcript</h4>
                <p className="text-xs text-slate-500">Available in PDF, DOCX, MD</p>
              </div>
              <span className="material-symbols-outlined ml-auto text-slate-300">download</span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-headline text-2xl font-extrabold text-slate-900">Analysis Briefings</h3>
              <p className="text-sm text-slate-500">Expert-led breakdowns of regional legal shifts</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-outline-variant px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors hover:bg-white">
                Latest
              </button>
              <button className="rounded-full bg-slate-200/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Trending
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Intellectual Property Rights in Synthetic Media",
                author: "Dr. Elena Vance",
                time: "2 days ago",
                duration: "14:20",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBc1pn_32LUwYXJQkqdyLFHfiauEJWbyfN9BImh_XBHAuWZt_RfsOJsIgyycGMmRHML9tEevMNmiyqkA7jCn63u2iybynBGunOmUATuje3hs1GM2_4MVuFZa2Flaek0r3lfEVP1FXk-hdtrazfOACxEOjy1zchVVVSgpQmPhWgcAFcImJJcIdB-_kBuRdYNV3agPqwBc02FQTFNSOy5DLOeAP16jevtVS4i1unJDftmY1psQFu_NRsybm-GlKOhirBIszXsslPw7Jk",
                avatar:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmEbZLjlCmiGoB-Vf0ZyPeA9yeRtRfwPXkdvdg6bZi9fh7RiaozuRMNyaQCvmNJiWH2yDOo8CVj2-F28J5Zaof1DH1kYDlhsxplaEKq0yHW7SFvy6HFzfucdta3KFAy3ZA9fQY6sZHOGciTyKBwJrSKc4l4kW79jZrK1w4DE8oyzbFSFwH5DNz6AdUKzROjZmZ8w4kgkeyYt3Le6gsCfL2pP6icKRK0dLAhe14vWS71LaF_L9w8lduinLjIqzwxNFC2OU4MQdrlVw",
              },
              {
                title: "GDPR 2.0: Preparing for the Compliance Shift",
                author: "Marcus Sterling",
                time: "5 days ago",
                duration: "08:45",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzUIPG2iGLYiIX_YJltCaO66jRp9P-8jPVxm6aiDEgI9da-onlK7vTVRl2ZxFF-ZT8VhvZ9TtjKoPvaTQ7G2UvC0hlBa2d1EAWI5M5JOB91CmRQdoDWBKTbmBFiHY_pCxXPA4JgEx2utaNXTaRPCqXE1PivWFoQlj0u1i5CYymG48K1-mT0V2kORES57IR9co4l5hufv9PhhIUuK5mAccRSQXpam2BvjIA8Jl2gYBXt0jT8HVS_AgBsaw3EaLyEx6aRHWj38NoAIs",
                avatar:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpNDvZqSrxBpuNk0YX7PWIYEHVeH0qcAQ8oyYdIFtmkK4yUnMdqKfmzYFVU7wKqp3SDcFrMD94lUE0FMGrUNwldtsdIwnNMcCTofpqMn8dELbBi6XeHKUvr7dFsrST3sW0aIfqbWOd5PiV7ba_X908uSlByiB30RHJD20yOIjHkDTN2dQbEUuahJGbbjs7M9TdbgToUa6X0O78yhXrDl4gc2dpJYKkSLM50F3gr3UVyJ6wVZCiLfzZDLidr1Pv3TlaWLW6MJJFeTY",
              },
              {
                title: "Global Jurisdictional Conflict in Cloud Data",
                author: "Ava Chen",
                time: "1 week ago",
                duration: "22:15",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBvnuF4fKPC2rlCA9Jtpm19Zuvef49F99kfYVcq6ddSj0xmb6qY1hXoOsUL2ZlNRsHBkPq7wV4eylIl7dQcWeL0NQQMffcoKHHx8rIp42ilo33HoayNYxo34tZREiU-osENSKHt8mWWbxvBSGeYGc-wF18jiyHxQW8e6Pmz8se-Al23n7X1UghyNZl-4sx4ZgEhCvEpnpFPg3fIj1XUcgVjg9tzrvA12Vsq1-9bhRq8qG2L20knwp3wX2RiL0JoRYI5L17qUCPPJX4",
                avatar:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCt4vRVZxQztW7nLxcZdecP9ksvWSfcZu-rsk7nvf2ikpEZDMs-upCMnqidbfsgtwWDt8gO7ryYpuUVdIZDVgWm5xxcbfemt8WnDCyovSDiE9xks3IcM1nnMxO6NGBsiNSaNCIUyCd2O_YJXAzPESIrtjtl0H3zBOCtbqteWknIqxT2XNDz7RF5ALMsxuv8eKOC50rTrNhRvPGUC9EDa8zKH7au08wcyXIRABaeS8P93fMPPIJpTmta610tVXobe3OT_QdREuMApI",
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl shadow-sm transition-shadow group-hover:shadow-xl">
                  <img className="h-full w-full object-cover" src={item.image} />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0"></div>
                  <div className="absolute right-3 bottom-3 rounded bg-black/60 px-2 py-1 text-[10px] font-mono text-white backdrop-blur-md">
                    {item.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-transform group-hover:scale-100">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="font-headline leading-tight font-bold text-on-surface transition-colors group-hover:text-secondary">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-3">
                  <img className="h-6 w-6 rounded-full object-cover" src={item.avatar} />
                  <span className="text-xs font-medium text-on-surface-variant">{item.author}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-headline text-2xl font-extrabold text-slate-900">Audio Discussions</h3>
              <p className="text-sm text-slate-500">In-depth legal discourse for on-the-go professionals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 p-8 text-white lg:col-span-2">
              <img
                className="absolute top-0 right-0 w-1/2 translate-x-1/4 -translate-y-1/4 transform opacity-20"
                data-alt="abstract audio wave patterns in deep navy and vibrant blue gradients"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARV2CRirOoBSZZxu5L0SY7ljPpQbYVzaxUaq6nv53-4NB7tbcREqGbchgBzjmeP1HIBmKaY9DsJwp91S1G4JGwXghs85pNVq8TSngnERTBi2R3SnvzUlwv963SyYTK21w4-2LNBTylhuD9nPvYlv3FXuJnZErIhj36Vn1L4wrOkQxDnZuiEnCWBDwAVHrHC84numlIzj6nC15y5KQSDddPOnVmlD4l5rJan3mgGwI67D0i42WqRRdci-8W4sxf8zb8HKXG0rjXQKI"
              />
              <div className="z-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-lg bg-secondary p-2">
                    <span className="material-symbols-outlined">podcasts</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary-fixed">Sovereign Voice</span>
                </div>
                <h3 className="font-headline mb-4 text-3xl font-bold">A Look Into Antitrust Laws of the Metaverse</h3>
                <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                  Exploring how digital property rights intersect with current competition standards in immersive environments.
                </p>
              </div>
              <div className="z-10 mt-12 flex items-center gap-6">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform hover:scale-105">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                    play_arrow
                  </span>
                </button>
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <span>Now Playing</span>
                    <span>48 Minutes</span>
                  </div>
                  <div className="flex h-4 items-center gap-1">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/4 bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              {[
                {
                  title: "The Future of Smart Contracts",
                  meta: "24 min â€¢ Jan 15, 2024",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuClctF4SqcwCtXwSy5PLM9f2fSm70RvYNinoPDT-xN8kZyFce13lbigHVlb8ztdbwDUflqT6fmKhROf7knpNW-OczC5QA7F4VCdTxj7jJrF1MphZPnCXgKofqC2Pa83V1vEAKtOuQ2MHv5-OCkWxVz5tUBvAg2qtvt0femXBub3sUuFlt2FCP5TYm94s2E5L8qY1YhedrgfBW4nmRhXsxW7tH5xnSUCNgE7Tuk1RbI-f5mw5RcMKbQUFINOkwkbTBOFL0y-5h4nkD8",
                },
                {
                  title: "Employment Law in the Gig Economy",
                  meta: "32 min â€¢ Jan 12, 2024",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4D3JED7nt7GrrXPvWfjUQoWECRWywlR_3ZXbhp9MWx7A2pK9_APx5LlKdFwJzHEJPU6nOqftjcmW9tvmsPrHe0lCNuhuh8psYmfw-0-1J0xBwVYvfJb2N8d4pl9iuk32A_Na_X8mMz3LEFuDrm5zX_SfSacQfIHhHB0brYHu6mto8sm-2PwQfy1ckQwuL_xEWijNhiJ-CcQa5PB6aLemzq2-IQ11u3VmBe8bY4pLqdBswEYzmWEQClxLKTTS2HPiqIYk_WKG3TEQ",
                },
                {
                  title: "Privacy by Design: Legal Strategies",
                  meta: "19 min â€¢ Jan 08, 2024",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuApQSOjDx1qsgkGB_mVJPu2KQdcuwhB95Cqzeco23TlgO46rMKwQkpJtno6k6ihPqWUJ1JQCWqD1tRwlEkqeSP0aXTUemB_idHHDSCmGWzvF80m4fT28VuDw-KZX3gN19aUUKKXclLC5t67-RuBvP_dIZcvRJttY5ynJq3P2ZsMamG2d_pOE0wap1GICGtENk0azKsHEb1SjXNSsWUVOW0do6YFo_pRHF6ToJ2lTjpIIKAYGi8FxKYzJM6ucZUeS88TQvx1ETRCiNU",
                },
              ].map((podcast) => (
                <div
                  key={podcast.title}
                  className="group flex cursor-pointer items-center gap-4 rounded-2xl bg-surface-container-low p-4 shadow-sm transition-all hover:bg-surface-container-lowest"
                >
                  <div className="h-16 w-16 overflow-hidden rounded-xl bg-slate-300">
                    <img className="h-full w-full object-cover" src={podcast.image} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-on-surface transition-colors group-hover:text-secondary">{podcast.title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{podcast.meta}</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 transition-colors group-hover:text-secondary">
                    play_circle
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 pt-12 text-center">
          <p className="font-manrope text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Media generated by Sovereign AI context engine. Verbatim transcripts verified by senior legal analysts.
          </p>
        </footer>
      </div>
    </MainLayout>
  );
}

export default MediaPage;
