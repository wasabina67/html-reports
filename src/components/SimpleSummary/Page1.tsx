const reportInfo = {
  title: '2025年度 第3四半期 業績サマリー',
  period: '2025年10月〜2025年12月',
  department: '経営企画部',
  author: '佐藤 一郎',
  date: '2026年1月15日',
}

const kpiData = [
  { label: '売上高', value: '¥128,500,000', change: '+12.3%', positive: true },
  { label: '営業利益', value: '¥18,200,000', change: '+8.7%', positive: true },
  { label: '新規顧客数', value: '245件', change: '+15.1%', positive: true },
  { label: '顧客解約率', value: '2.1%', change: '-0.5%', positive: true },
]

const monthlySummary = [
  { month: '10月', revenue: 41200000, cost: 34800000, profit: 6400000 },
  { month: '11月', revenue: 43100000, cost: 35200000, profit: 7900000 },
  { month: '12月', revenue: 44200000, cost: 40300000, profit: 3900000 },
]

const highlights = [
  '新規大型案件（A社）の受注により、売上高が前年同期比12.3%増加',
  'マーケティング施策の効果により新規顧客獲得数が目標を20%上回る',
  '業務効率化プロジェクトの推進でオペレーションコストを5%削減',
]

const issues = [
  '12月の利益率が低下（年末キャンペーンによる販促費増加）',
  'エンジニア採用が計画比70%にとどまり、開発リソースが不足',
  '一部サービスの応答速度が目標値を下回る状況が継続',
]

const nextActions = [
  { action: 'Q4販促費の見直しと予算再配分', assignee: 'マーケティング部', due: '2026年2月末' },
  { action: 'エンジニア採用強化（リファラル制度拡充）', assignee: '人事部', due: '2026年3月末' },
  { action: 'インフラ増強によるパフォーマンス改善', assignee: '開発部', due: '2026年2月中旬' },
]

function Page1() {
  const totalRevenue = monthlySummary.reduce((sum, m) => sum + m.revenue, 0)
  const totalCost = monthlySummary.reduce((sum, m) => sum + m.cost, 0)
  const totalProfit = monthlySummary.reduce((sum, m) => sum + m.profit, 0)

  return (
    <section className="sheet padding-10mm">
      <h1 className="simple-summary-title">{reportInfo.title}</h1>
      <div className="simple-summary-meta">
        <span>対象期間：{reportInfo.period}</span>
        <span>作成部署：{reportInfo.department}</span>
        <span>作成者：{reportInfo.author}</span>
        <span>作成日：{reportInfo.date}</span>
      </div>

      <h2 className="simple-summary-section-title">主要KPI</h2>
      <div className="simple-summary-kpi-grid">
        {kpiData.map((kpi) => (
          <div className="simple-summary-kpi-card" key={kpi.label}>
            <span className="simple-summary-kpi-label">{kpi.label}</span>
            <span className="simple-summary-kpi-value">{kpi.value}</span>
            <span className={`simple-summary-kpi-change ${kpi.positive ? 'simple-summary-positive' : 'simple-summary-negative'}`}>
              前年同期比 {kpi.change}
            </span>
          </div>
        ))}
      </div>

      <h2 className="simple-summary-section-title">月別実績</h2>
      <table className="simple-summary-table">
        <thead>
          <tr>
            <th className="simple-summary-th">月</th>
            <th className="simple-summary-th">売上高</th>
            <th className="simple-summary-th">原価</th>
            <th className="simple-summary-th">利益</th>
            <th className="simple-summary-th">利益率</th>
          </tr>
        </thead>
        <tbody>
          {monthlySummary.map((m) => (
            <tr key={m.month}>
              <td className="simple-summary-td simple-summary-center">{m.month}</td>
              <td className="simple-summary-td simple-summary-right">¥{m.revenue.toLocaleString()}</td>
              <td className="simple-summary-td simple-summary-right">¥{m.cost.toLocaleString()}</td>
              <td className="simple-summary-td simple-summary-right">¥{m.profit.toLocaleString()}</td>
              <td className="simple-summary-td simple-summary-center">{((m.profit / m.revenue) * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="simple-summary-td simple-summary-foot">合計</td>
            <td className="simple-summary-td simple-summary-foot simple-summary-right">¥{totalRevenue.toLocaleString()}</td>
            <td className="simple-summary-td simple-summary-foot simple-summary-right">¥{totalCost.toLocaleString()}</td>
            <td className="simple-summary-td simple-summary-foot simple-summary-right">¥{totalProfit.toLocaleString()}</td>
            <td className="simple-summary-td simple-summary-foot simple-summary-center">{((totalProfit / totalRevenue) * 100).toFixed(1)}%</td>
          </tr>
        </tfoot>
      </table>

      <div className="simple-summary-two-column">
        <div>
          <h2 className="simple-summary-section-title">ハイライト</h2>
          <ul className="simple-summary-list simple-summary-list-highlight">
            {highlights.map((item, i) => (
              <li className="simple-summary-list-item" key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="simple-summary-section-title">課題</h2>
          <ul className="simple-summary-list simple-summary-list-issue">
            {issues.map((item, i) => (
              <li className="simple-summary-list-item" key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="simple-summary-section-title">次期アクション</h2>
      <table className="simple-summary-table">
        <thead>
          <tr>
            <th className="simple-summary-th">アクション</th>
            <th className="simple-summary-th">担当部署</th>
            <th className="simple-summary-th">期限</th>
          </tr>
        </thead>
        <tbody>
          {nextActions.map((a, i) => (
            <tr key={i}>
              <td className="simple-summary-td">{a.action}</td>
              <td className="simple-summary-td simple-summary-center">{a.assignee}</td>
              <td className="simple-summary-td simple-summary-center">{a.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Page1
