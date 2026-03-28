const monthlySales = [
  { month: '1月', value: 4200 },
  { month: '2月', value: 3800 },
  { month: '3月', value: 5100 },
  { month: '4月', value: 4700 },
  { month: '5月', value: 5600 },
  { month: '6月', value: 6200 },
  { month: '7月', value: 5800 },
  { month: '8月', value: 4900 },
  { month: '9月', value: 5300 },
  { month: '10月', value: 6100 },
  { month: '11月', value: 6800 },
  { month: '12月', value: 7200 },
]

const departmentBudget = [
  { department: '営業部', actual: 8500, budget: 9000 },
  { department: '開発部', actual: 7200, budget: 7000 },
  { department: 'マーケティング部', actual: 4300, budget: 5000 },
  { department: '人事部', actual: 2800, budget: 3000 },
  { department: '総務部', actual: 1900, budget: 2000 },
]

function Page1() {
  const salesMax = Math.max(...monthlySales.map((s) => s.value))
  const budgetMax = Math.max(...departmentBudget.flatMap((d) => [d.actual, d.budget]))

  return (
    <section className="sheet padding-10mm">
      <h1 className="simple-bar-chart-title">売上・予算レポート</h1>
      <p className="simple-bar-chart-subtitle margin-bottom-12">2025年度 年間実績</p>

      <h2 className="simple-bar-chart-section-title">月別売上推移（単位：万円）</h2>
      <div className="simple-bar-chart-graph">
        {monthlySales.map((s) => (
          <div className="simple-bar-chart-row" key={s.month}>
            <span className="simple-bar-chart-label">{s.month}</span>
            <div className="simple-bar-chart-bar-area">
              <div
                className="simple-bar-chart-bar simple-bar-chart-bar-primary"
                style={{ width: `${(s.value / salesMax) * 100}%` }}
              >
                <span className="simple-bar-chart-value">{s.value.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="simple-bar-chart-section-title">部門別 予算 vs 実績（単位：万円）</h2>
      <div className="simple-bar-chart-graph">
        {departmentBudget.map((d) => (
          <div className="simple-bar-chart-group" key={d.department}>
            <span className="simple-bar-chart-label simple-bar-chart-label-wide">{d.department}</span>
            <div className="simple-bar-chart-bar-area">
              <div
                className="simple-bar-chart-bar simple-bar-chart-bar-primary"
                style={{ width: `${(d.actual / budgetMax) * 100}%` }}
              >
                <span className="simple-bar-chart-value">{d.actual.toLocaleString()}</span>
              </div>
              <div
                className="simple-bar-chart-bar simple-bar-chart-bar-secondary"
                style={{ width: `${(d.budget / budgetMax) * 100}%` }}
              >
                <span className="simple-bar-chart-value">{d.budget.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="simple-bar-chart-legend">
        <span className="simple-bar-chart-legend-item">
          <span className="simple-bar-chart-legend-color simple-bar-chart-legend-primary"></span>実績
        </span>
        <span className="simple-bar-chart-legend-item">
          <span className="simple-bar-chart-legend-color simple-bar-chart-legend-secondary"></span>予算
        </span>
      </div>
    </section>
  )
}

export default Page1
