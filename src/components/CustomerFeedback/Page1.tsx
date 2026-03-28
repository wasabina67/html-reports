const reportInfo = {
  title: '顧客フィードバック分析レポート',
  period: '2026年2月1日〜2026年2月28日',
  department: 'カスタマーサクセス部',
  author: '田中 美咲',
  reportDate: '2026年3月5日',
  totalResponses: 1284,
  previousResponses: 1156,
}

const overallSatisfaction = {
  score: 4.2,
  maxScore: 5,
  previousScore: 4.0,
  nps: 42,
  previousNps: 38,
  distribution: [
    { stars: 5, count: 412, percentage: 32.1 },
    { stars: 4, count: 489, percentage: 38.1 },
    { stars: 3, count: 245, percentage: 19.1 },
    { stars: 2, count: 89, percentage: 6.9 },
    { stars: 1, count: 49, percentage: 3.8 },
  ],
}

const categoryScores = [
  { name: '製品品質', score: 4.5, previous: 4.3, responses: 1120 },
  { name: 'カスタマーサポート', score: 4.1, previous: 3.8, responses: 856 },
  { name: '配送・納期', score: 3.9, previous: 4.0, responses: 743 },
  { name: '価格・コストパフォーマンス', score: 3.6, previous: 3.5, responses: 968 },
  { name: '使いやすさ・UI', score: 4.3, previous: 4.1, responses: 692 },
]

const recentFeedback = [
  { customer: '山田 太郎', company: '株式会社ABC', date: '2026/02/26', category: '製品品質', rating: 5, comment: '新機能のダッシュボードが非常に使いやすく、業務効率が大幅に改善しました。チーム全体で活用しています。' },
  { customer: '佐々木 花子', company: 'DEF商事', date: '2026/02/24', category: 'サポート', rating: 4, comment: '問い合わせへの対応が迅速で丁寧でした。ナレッジベースの充実を希望します。' },
  { customer: '鈴木 一郎', company: 'GHI工業', date: '2026/02/22', category: '配送', rating: 2, comment: '納品予定日から3日遅延がありました。事前連絡もなく、プロジェクトに影響が出ました。' },
  { customer: '高橋 恵', company: 'JKLシステムズ', date: '2026/02/20', category: '価格', rating: 3, comment: '機能に対して月額費用がやや高い印象です。年間契約の割引プランがあると嬉しいです。' },
  { customer: '伊藤 健太', company: 'MNOテック', date: '2026/02/18', category: 'UI', rating: 5, comment: 'モバイル対応が素晴らしく、外出先でもストレスなく利用できています。' },
]

const actionItems = [
  { priority: '高', action: '配送遅延の原因分析および物流パートナーとの改善協議', owner: '物流管理部', deadline: '2026年3月末' },
  { priority: '高', action: 'サポートナレッジベースの拡充（FAQ 50件追加目標）', owner: 'CS部', deadline: '2026年3月中旬' },
  { priority: '中', action: '年間契約向け割引プランの設計・収益シミュレーション', owner: '営業企画部', deadline: '2026年4月末' },
]

function Page1() {
  const scoreDiff = +(overallSatisfaction.score - overallSatisfaction.previousScore).toFixed(1)
  const npsDiff = overallSatisfaction.nps - overallSatisfaction.previousNps
  const responsesDiff = reportInfo.totalResponses - reportInfo.previousResponses

  const renderStars = (score: number) => {
    const full = Math.floor(score)
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= full ? 'customer-feedback-star-filled' : 'customer-feedback-star-empty'}>
          {i <= full ? '★' : '☆'}
        </span>
      )
    }
    return stars
  }

  const barColorClass = (score: number) => {
    if (score >= 4.0) return 'customer-feedback-bar-fill-high'
    if (score >= 3.5) return 'customer-feedback-bar-fill-mid'
    return 'customer-feedback-bar-fill-low'
  }

  const ratingClass = (rating: number) => `customer-feedback-rating customer-feedback-rating-${rating}`

  const priorityClass = (priority: string) =>
    `customer-feedback-priority customer-feedback-priority-${priority === '高' ? 'high' : 'mid'}`

  const formatDiff = (diff: number, suffix = '') => {
    const sign = diff > 0 ? '+' : ''
    const cls = diff >= 0 ? 'customer-feedback-change-positive' : 'customer-feedback-change-negative'
    return <span className={`customer-feedback-change ${cls}`}>{sign}{diff}{suffix} 前月比</span>
  }

  return (
    <section className="sheet padding-10mm">
      <h1 className="customer-feedback-title">{reportInfo.title}</h1>
      <div className="customer-feedback-meta">
        <span>対象期間：{reportInfo.period}</span>
        <span>部署：{reportInfo.department}</span>
        <span>担当：{reportInfo.author}</span>
        <span>報告日：{reportInfo.reportDate}</span>
      </div>

      <h2 className="customer-feedback-section-title">総合評価サマリー</h2>
      <div className="customer-feedback-summary-row">
        <div className="customer-feedback-metrics-grid">
          <div className="customer-feedback-metric-card">
            <span className="customer-feedback-metric-label">総合満足度</span>
            <span className="customer-feedback-score-large">
              {overallSatisfaction.score}<span className="customer-feedback-score-suffix"> / {overallSatisfaction.maxScore}</span>
            </span>
            <span className="customer-feedback-stars">{renderStars(overallSatisfaction.score)}</span>
            {formatDiff(scoreDiff)}
          </div>
          <div className="customer-feedback-metric-card">
            <span className="customer-feedback-metric-label">NPS（推奨度）</span>
            <span className="customer-feedback-nps-value">{overallSatisfaction.nps}</span>
            {formatDiff(npsDiff, 'pt')}
          </div>
          <div className="customer-feedback-metric-card">
            <span className="customer-feedback-metric-label">回答数</span>
            <span className="customer-feedback-responses">
              {reportInfo.totalResponses.toLocaleString()}<span className="customer-feedback-responses-unit"> 件</span>
            </span>
            {formatDiff(responsesDiff, '件')}
          </div>
        </div>
        <div className="customer-feedback-distribution">
          <span className="customer-feedback-dist-title">評価分布</span>
          {overallSatisfaction.distribution.map((d) => (
            <div className="customer-feedback-dist-row" key={d.stars}>
              <span className="customer-feedback-dist-label">★{d.stars}</span>
              <div className="customer-feedback-dist-bar-track">
                <div
                  className="customer-feedback-dist-bar-fill"
                  style={{ width: `${d.percentage}%` }}
                />
              </div>
              <span className="customer-feedback-dist-count">{d.count}件 ({d.percentage}%)</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="customer-feedback-section-title">カテゴリ別満足度</h2>
      <div className="customer-feedback-categories">
        {categoryScores.map((cat) => {
          const diff = +(cat.score - cat.previous).toFixed(1)
          return (
            <div className="customer-feedback-category-row" key={cat.name}>
              <span className="customer-feedback-category-name">{cat.name}</span>
              <div className="customer-feedback-bar-track">
                <div
                  className={`customer-feedback-bar-fill ${barColorClass(cat.score)}`}
                  style={{ width: `${(cat.score / 5) * 100}%` }}
                />
              </div>
              <span className="customer-feedback-category-score">{cat.score}</span>
              <span className={`customer-feedback-category-change ${diff >= 0 ? 'customer-feedback-change-positive' : 'customer-feedback-change-negative'}`}>
                {diff > 0 ? '▲' : diff < 0 ? '▼' : '→'}{Math.abs(diff)}
              </span>
            </div>
          )
        })}
      </div>

      <h2 className="customer-feedback-section-title">直近のフィードバック</h2>
      <table className="customer-feedback-table">
        <thead>
          <tr>
            <th className="customer-feedback-th">顧客名</th>
            <th className="customer-feedback-th">企業</th>
            <th className="customer-feedback-th">日付</th>
            <th className="customer-feedback-th">カテゴリ</th>
            <th className="customer-feedback-th">評価</th>
            <th className="customer-feedback-th">コメント</th>
          </tr>
        </thead>
        <tbody>
          {recentFeedback.map((fb, i) => (
            <tr key={i}>
              <td className="customer-feedback-td">{fb.customer}</td>
              <td className="customer-feedback-td">{fb.company}</td>
              <td className="customer-feedback-td customer-feedback-center">{fb.date}</td>
              <td className="customer-feedback-td customer-feedback-center">{fb.category}</td>
              <td className="customer-feedback-td customer-feedback-center">
                <span className={ratingClass(fb.rating)}>{fb.rating}</span>
              </td>
              <td className="customer-feedback-td customer-feedback-comment">{fb.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="customer-feedback-section-title">改善アクション</h2>
      <table className="customer-feedback-table">
        <thead>
          <tr>
            <th className="customer-feedback-th">優先度</th>
            <th className="customer-feedback-th">アクション内容</th>
            <th className="customer-feedback-th">担当</th>
            <th className="customer-feedback-th">期限</th>
          </tr>
        </thead>
        <tbody>
          {actionItems.map((item, i) => (
            <tr key={i}>
              <td className="customer-feedback-td customer-feedback-center">
                <span className={priorityClass(item.priority)}>{item.priority}</span>
              </td>
              <td className="customer-feedback-td">{item.action}</td>
              <td className="customer-feedback-td customer-feedback-center">{item.owner}</td>
              <td className="customer-feedback-td customer-feedback-center">{item.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Page1
