const meetingInfo = {
  title: '第12回 開発チーム定例会議',
  date: '2026-03-26',
  time: '14:00 〜 15:30',
  place: '第2会議室 / オンライン（Zoom）',
  facilitator: '鈴木 花子',
}

const attendees = [
  { name: '鈴木 花子', department: '開発部', role: 'ファシリテーター' },
  { name: '田中 太郎', department: '営業部', role: '出席' },
  { name: '佐藤 一郎', department: '総務部', role: '出席' },
  { name: '渡辺 さくら', department: 'デザイン部', role: '出席' },
  { name: '山本 大輔', department: '開発部', role: '出席' },
  { name: '高橋 美咲', department: '開発部', role: '欠席' },
]

const agenda = [
  '前回アクション確認',
  'Q1進捗レポート',
  '新機能リリース計画',
  'チームビルディングイベントの提案',
  'その他連絡事項',
]

const decisions = [
  'リリース日を2026-04-15に決定',
  'テスト環境の移行は山本が担当',
  '次回定例は2026-04-09（木）14時',
]

const actions = [
  { task: 'テスト仕様書の更新', assignee: '山本 大輔', due: '2026-04-01' },
  { task: 'リリースノートの作成', assignee: '渡辺 さくら', due: '2026-04-08' },
  { task: '顧客向け案内メールの送付', assignee: '田中 太郎', due: '2026-04-10' },
  { task: 'インフラコスト試算', assignee: '佐藤 一郎', due: '2026-04-05' },
]

function Page1() {
  return (
    <section className="sheet padding-10mm">
      <h2 className="two-column-report-title">{meetingInfo.title}</h2>
      <p className="two-column-report-subtitle">会議議事録</p>

      <div className="two-column-grid">
        <div className="two-column-left">
          <h3 className="two-column-section-title margin-top-6 margin-bottom-6">会議情報</h3>
          <dl className="two-column-info-list">
            <div className="two-column-info-row">
              <dt className="two-column-info-label">開催日</dt>
              <dd className="two-column-info-value">{meetingInfo.date}</dd>
            </div>
            <div className="two-column-info-row">
              <dt className="two-column-info-label">時間</dt>
              <dd className="two-column-info-value">{meetingInfo.time}</dd>
            </div>
            <div className="two-column-info-row">
              <dt className="two-column-info-label">場所</dt>
              <dd className="two-column-info-value">{meetingInfo.place}</dd>
            </div>
            <div className="two-column-info-row">
              <dt className="two-column-info-label">主催者</dt>
              <dd className="two-column-info-value">{meetingInfo.facilitator}</dd>
            </div>
          </dl>

          <h3 className="two-column-section-title margin-top-6 margin-bottom-6">出席者</h3>
          <table className="two-column-table">
            <thead>
              <tr>
                <th className="two-column-th">氏名</th>
                <th className="two-column-th">部署</th>
                <th className="two-column-th">状況</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((a, i) => (
                <tr key={i}>
                  <td className="two-column-td">{a.name}</td>
                  <td className="two-column-td">{a.department}</td>
                  <td className={`two-column-td two-column-td-center ${a.role === '欠席' ? 'two-column-absent' : ''}`}>{a.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="two-column-section-title margin-top-6 margin-bottom-6">議題</h3>
          <ol className="two-column-agenda">
            {agenda.map((item, i) => (
              <li key={i} className="two-column-agenda-item">{item}</li>
            ))}
          </ol>
        </div>

        <div className="two-column-right">
          <h3 className="two-column-section-title margin-top-6 margin-bottom-6">決定事項</h3>
          <ul className="two-column-decisions">
            {decisions.map((d, i) => (
              <li key={i} className="two-column-decision-item">{d}</li>
            ))}
          </ul>

          <h3 className="two-column-section-title margin-top-6 margin-bottom-6">アクションアイテム</h3>
          <table className="two-column-table">
            <thead>
              <tr>
                <th className="two-column-th">タスク</th>
                <th className="two-column-th">担当者</th>
                <th className="two-column-th">期日</th>
              </tr>
            </thead>
            <tbody>
              {actions.map((a, i) => (
                <tr key={i}>
                  <td className="two-column-td">{a.task}</td>
                  <td className="two-column-td two-column-td-center">{a.assignee}</td>
                  <td className="two-column-td two-column-td-center">{a.due}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="two-column-section-title margin-top-6 margin-bottom-6">備考</h3>
          <div className="two-column-notes">
            <p className="two-column-notes-text">
              次回は4月の新年度キックオフと合わせて実施予定。アジェンダは3日前までに共有すること。
              資料はプロジェクト管理ツールの「定例会議」フォルダに格納する。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page1
