export function ProblemSolve() {
  const beforeItems = [
    {
      text: 'FMECA in one Excel file, failure rates in another, MTTR in a third. No live links. The customer review found the disconnect.',
    },
    {
      text: 'A single desktop license held by one person, or one machine. The team queues up. Deadlines slip while the analyst is on holiday.',
    },
    {
      text: '"Which version are we on?" — Every project generates fifteen copies of the same spreadsheet. The customer gets four. You submitted the wrong one. The audit fails.',
    },
  ];

  const afterItems = [
    {
      text: 'Update a failure rate in FRP and watch it propagate to FMECA, MMEA, and the Report — automatically, instantly, with a full audit trail.',
    },
    {
      text: 'Browser-based, multi-user, role-controlled. Every engineer on the team works simultaneously. No queue. No bottlenecks. No install.',
    },
    {
      text: 'One source of truth. Every team member — reviewer, analyst, manager — sees the same live data, always. One version. Shareable.',
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-10">

        {/* Section label */}
        <div className="mb-10">
          <span
            className="inline-block text-[0.7rem] uppercase tracking-[0.14em] text-[var(--rams-accent)] border-b-2 border-[var(--rams-accent)] pb-1"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            The Problem We Solve
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — quote + body */}
          <div>
            {/* Pull quote */}
            <blockquote className="border-l-4 border-[#432975] pl-6 mb-8">
              <p
                className="text-[clamp(1.15rem,2vw,1.45rem)] leading-[1.55] text-[#1a1a2e] italic"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
              >
                "I've watched reliability engineers re-enter the same failure rate into three different tools - every single project cycle."
              </p>
            </blockquote>

            {/* Body paragraphs */}
            <div className="space-y-4 text-[0.93rem] text-[#4a4a6a] leading-[1.75]">
              <p>
                RAMS analysis is one of engineering's most rigorous disciplines. But the tooling has barely moved since the 1980s. Most teams are running a patchwork of Windows desktop applications — if they can afford them — or living in Excel. Either way, the work lives in silos, the versions drift, and the analyst becomes the bottleneck.
              </p>
              <p>
                RAMS360 was built to fix this exactly. Ten modules — from PBS to Reports — running in a single browser-based platform where every data point is live-linked, every change propagates automatically, and every team member has the right access to the right modules.
              </p>
            </div>

            {/* Formula block */}
            <div className="mt-10 rounded-lg bg-[#1a1a2e] px-6 py-5">
              <p
                className="text-[0.62rem] uppercase tracking-[0.14em] text-[#e8722a] mb-3"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                MIL-HDBK-217F — Failure Rate, As Implemented
              </p>
              <p
                className="text-[1rem] leading-[1.8] text-white"
                style={{ fontFamily: 'monospace', fontWeight: 400 }}
              >
                <span className="text-[#e8722a] font-bold">λp</span>
                {' = λb × πT × πC × πV × πSR × πQ × πE'}
              </p>
            </div>
          </div>

          {/* RIGHT — before / after comparison */}
          <div className="space-y-4">

            {/* BEFORE column */}
            <div className="rounded-xl border border-[#432975]/15 bg-[#f8f5ff] p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#432975]" />
                <span
                  className="text-[0.68rem] uppercase tracking-[0.12em] text-[#432975]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  Before
                </span>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[0.85rem] text-[#4a4a6a] leading-[1.65]">
                    <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-[#432975]" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER column */}
            <div className="rounded-xl border border-orange-100 bg-orange-50/40 p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[var(--rams-accent)]" />
                <span
                  className="text-[0.68rem] uppercase tracking-[0.12em] text-[var(--rams-accent)]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  After RAMS360
                </span>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[0.85rem] text-[#4a4a6a] leading-[1.65]">
                    <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-orange-300" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
