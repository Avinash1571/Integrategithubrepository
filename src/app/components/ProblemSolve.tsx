export function ProblemSolve() {
  return (
    <section className="bg-[#F8F7F5] py-20 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto text-center px-10">

        {/* Section label */}
        <div className="mb-10">
          <span
            className="inline-block text-[0.7rem] uppercase tracking-[0.14em] text-[var(--rams-accent)]  border-[var(--rams-accent)] pb-1"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            The Problem We Solve
          </span>
        </div>

        {/* Text + Formula */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-8 items-start">
          <div>
            <blockquote className="border-l-4 border-[#432975] pl-6 mb-8">
              <p
                className="text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.55] text-[#1a1a2e] italic text-left"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
              >
                "I've watched reliability engineers re-enter the same failure rate into three different tools - every single project cycle."
              </p>
            </blockquote>
            <div
              className="space-y-4 text-[0.93rem] text-[#4a4a6a] leading-[1.75]"
              style={{ fontFamily: 'var(--ff-body)' }}
            >
              <p className="text-left text-[18px]">
                RAMS analysis is one of engineering's most rigorous disciplines. But the tooling has barely moved since the 1980s. Most teams run a patchwork of Windows desktop applications — if they can afford them — or live in Excel. Either way, work lives in silos, versions drift, and the analyst becomes the bottleneck. Every change triggers a manual reconciliation sprint. Every audit risks exposing a discrepancy between files that should have been the same document all along.
              </p>
              <p className="text-left text-[18px]">
                RAMS360 was built to fix this exactly. Ten modules — from PBS to Lifecycle Cost Analysis to Reports — in a single browser-based platform where every data point is live-linked, every change propagates automatically, and every team member has the right level of access to the right modules.
              </p>
            </div>
          </div>
          <div>
            <div className="space-y-4">

              {/* BEFORE card */}
              <div className="rounded-xl border border-[#DDD6FE] bg-[#F5F2FF] px-6 py-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--rams-primary)]" />
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--rams-primary)]"
                    style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                  >
                    Before
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    'FMECA in one Excel file, failure rates in another, MTTR in a third. No live links. The customer review found the disconnect.',
                    'A single desktop license held by one person, on one machine. The team queues up. Deadlines slip while the analyst is on holiday.',
                    '"Which version are we on?" — Every project generates fifteen copies of the same spreadsheet. The customer gets four. You submitted the wrong one. The audit fails.',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-[var(--rams-primary)]" />
                      <p
                        className="text-[0.82rem] text-[#1F2937] leading-[1.65] text-left text-[14px]"
                        style={{ fontFamily: 'var(--ff-body)' }}
                      >
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AFTER card */}
              <div className="rounded-xl border border-[#FED7AA] bg-[#FFF8F3] px-6 py-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--rams-accent)]" />
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--rams-accent)]"
                    style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                  >
                    After RAMS360
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    'Update a failure rate in FRP and watch it propagate to FMECA, MMEA, and the Report — automatically, instantly, with a full audit trail.',
                    'Browser-based, multi-user, role-controlled. Every engineer on the team works simultaneously. No queue. No bottlenecks. No install.',
                    'One source of truth. Every team member — reviewer, analyst, manager — sees the same live data, always. One version. Shareable.',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-[var(--rams-accent)]" />
                      <p
                        className="text-[0.82rem] text-[var(--rams-accent)] leading-[1.65] text-left text-[14px]"
                        style={{ fontFamily: 'var(--ff-body)' }}
                      >
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
