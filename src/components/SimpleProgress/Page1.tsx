const projectInfo = {
  title: '社内基幹システム刷新プロジェクト',
  period: '2025年4月〜2026年3月',
  manager: '鈴木 花子',
  department: '開発部',
  reportDate: '2026年1月31日',
  overallProgress: 68,
}

const phases = [
  { name: '要件定義', progress: 100, status: '完了', start: '2025/04', end: '2025/06' },
  { name: '基本設計', progress: 100, status: '完了', start: '2025/06', end: '2025/08' },
  { name: '詳細設計', progress: 100, status: '完了', start: '2025/08', end: '2025/09' },
  { name: '開発（フロントエンド）', progress: 85, status: '進行中', start: '2025/09', end: '2026/01' },
  { name: '開発（バックエンド）', progress: 72, status: '進行中', start: '2025/09', end: '2026/01' },
  { name: '結合テスト', progress: 30, status: '進行中', start: '2025/12', end: '2026/02' },
  { name: 'ユーザーテスト', progress: 0, status: '未着手', start: '2026/02', end: '2026/03' },
  { name: 'リリース準備', progress: 0, status: '未着手', start: '2026/03', end: '2026/03' },
]

const milestones = [
  { name: '要件定義完了レビュー', date: '2025/06/30', status: '完了' },
  { name: '設計ドキュメント承認', date: '2025/09/15', status: '完了' },
  { name: '開発フェーズ中間レビュー', date: '2025/11/30', status: '完了' },
  { name: 'コードフリーズ', date: '2026/01/31', status: '遅延' },
  { name: '結合テスト完了', date: '2026/02/28', status: '未着手' },
  { name: 'UAT開始', date: '2026/02/15', status: '未着手' },
  { name: '本番リリース', date: '2026/03/31', status: '未着手' },
]

const risks = [
  { risk: 'バックエンド開発の遅延によるコードフリーズ延期', impact: '高', action: '追加リソース投入を検討中' },
  { risk: '外部API連携の仕様変更', impact: '中', action: 'ベンダーと週次で仕様確認を実施' },
  { risk: 'テスト環境のインフラ不足', impact: '中', action: 'クラウド環境の一時増設を申請済み' },
]

function Page1() {
  const statusClass = (status: string) => {
    if (status === '完了') return 'simple-progress-status-done'
    if (status === '進行中') return 'simple-progress-status-active'
    if (status === '遅延') return 'simple-progress-status-delayed'
    return 'simple-progress-status-pending'
  }

  return (
    <section className="sheet padding-10mm">
      <h1 className="simple-progress-title">{projectInfo.title}</h1>
      <div className="simple-progress-meta">
        <span>期間：{projectInfo.period}</span>
        <span>PM：{projectInfo.manager}（{projectInfo.department}）</span>
        <span>報告日：{projectInfo.reportDate}</span>
      </div>

      <h2 className="simple-progress-section-title">全体進捗</h2>
      <div className="simple-progress-overall">
        <div className="simple-progress-bar-track simple-progress-bar-track-large">
          <div
            className="simple-progress-bar-fill simple-progress-bar-fill-primary"
            style={{ width: `${projectInfo.overallProgress}%` }}
          >
            <span className="simple-progress-bar-text">{projectInfo.overallProgress}%</span>
          </div>
        </div>
      </div>

      <h2 className="simple-progress-section-title">フェーズ別進捗</h2>
      <div className="simple-progress-phases">
        {phases.map((phase) => (
          <div className="simple-progress-phase-row" key={phase.name}>
            <div className="simple-progress-phase-info">
              <span className="simple-progress-phase-name">{phase.name}</span>
              <span className="simple-progress-phase-period">{phase.start}〜{phase.end}</span>
            </div>
            <div className="simple-progress-phase-bar">
              <div className="simple-progress-bar-track">
                <div
                  className={`simple-progress-bar-fill ${phase.status === '完了' ? 'simple-progress-bar-fill-done' : phase.progress > 0 ? 'simple-progress-bar-fill-primary' : ''}`}
                  style={{ width: `${phase.progress}%` }}
                />
              </div>
            </div>
            <span className="simple-progress-phase-percent">{phase.progress}%</span>
            <span className={`simple-progress-status ${statusClass(phase.status)}`}>{phase.status}</span>
          </div>
        ))}
      </div>

      <h2 className="simple-progress-section-title">マイルストーン</h2>
      <table className="simple-progress-table">
        <thead>
          <tr>
            <th className="simple-progress-th">マイルストーン</th>
            <th className="simple-progress-th">予定日</th>
            <th className="simple-progress-th">ステータス</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((m, i) => (
            <tr key={i}>
              <td className="simple-progress-td">{m.name}</td>
              <td className="simple-progress-td simple-progress-center">{m.date}</td>
              <td className="simple-progress-td simple-progress-center">
                <span className={`simple-progress-status ${statusClass(m.status)}`}>{m.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="simple-progress-section-title">リスク・課題</h2>
      <table className="simple-progress-table">
        <thead>
          <tr>
            <th className="simple-progress-th">リスク</th>
            <th className="simple-progress-th">影響度</th>
            <th className="simple-progress-th">対応策</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((r, i) => (
            <tr key={i}>
              <td className="simple-progress-td">{r.risk}</td>
              <td className="simple-progress-td simple-progress-center">
                <span className={`simple-progress-impact simple-progress-impact-${r.impact === '高' ? 'high' : 'mid'}`}>{r.impact}</span>
              </td>
              <td className="simple-progress-td">{r.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Page1
