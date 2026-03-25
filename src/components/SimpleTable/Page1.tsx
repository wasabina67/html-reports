const employees = [
  { id: 1, name: '田中 太郎', department: '営業部', position: '主任', joinDate: '2020-04-01', email: 'tanaka@example.com' },
  { id: 2, name: '鈴木 花子', department: '開発部', position: 'リーダー', joinDate: '2019-07-15', email: 'suzuki@example.com' },
  { id: 3, name: '佐藤 一郎', department: '総務部', position: '課長', joinDate: '2015-04-01', email: 'sato@example.com' },
  { id: 4, name: '高橋 美咲', department: '開発部', position: 'メンバー', joinDate: '2022-04-01', email: 'takahashi@example.com' },
  { id: 5, name: '伊藤 健二', department: '営業部', position: '部長', joinDate: '2012-10-01', email: 'ito@example.com' },
  { id: 6, name: '渡辺 さくら', department: 'デザイン部', position: 'リーダー', joinDate: '2018-01-16', email: 'watanabe@example.com' },
  { id: 7, name: '山本 大輔', department: '開発部', position: 'メンバー', joinDate: '2023-04-01', email: 'yamamoto@example.com' },
  { id: 8, name: '中村 由美', department: '総務部', position: '主任', joinDate: '2017-09-01', email: 'nakamura@example.com' },
]

const tasks = [
  { id: 1, task: 'サーバー移行計画の策定', assignee: '佐藤 一郎', status: '完了', priority: '高', dueDate: '2026-03-10' },
  { id: 2, task: '新規API設計レビュー', assignee: '鈴木 花子', status: '進行中', priority: '高', dueDate: '2026-03-20' },
  { id: 3, task: '社内研修資料の作成', assignee: '中村 由美', status: '完了', priority: '中', dueDate: '2026-03-15' },
  { id: 4, task: 'セキュリティ監査対応', assignee: '伊藤 健二', status: '未着手', priority: '高', dueDate: '2026-04-01' },
  { id: 5, task: 'UI改善提案書の作成', assignee: '渡辺 さくら', status: '進行中', priority: '中', dueDate: '2026-03-28' },
  { id: 6, task: '採用面接スケジュール調整', assignee: '中村 由美', status: '完了', priority: '低', dueDate: '2026-03-12' },
  { id: 7, task: 'パフォーマンス改善調査', assignee: '山本 大輔', status: '進行中', priority: '中', dueDate: '2026-04-05' },
  { id: 8, task: '顧客ヒアリング結果まとめ', assignee: '田中 太郎', status: '未着手', priority: '低', dueDate: '2026-04-10' },
]

const sales = [
  { id: 1, month: '2026-01', product: 'プランA', quantity: 120, unitPrice: 5000, total: 600000 },
  { id: 2, month: '2026-01', product: 'プランB', quantity: 85, unitPrice: 12000, total: 1020000 },
  { id: 3, month: '2026-02', product: 'プランA', quantity: 98, unitPrice: 5000, total: 490000 },
  { id: 4, month: '2026-02', product: 'プランB', quantity: 110, unitPrice: 12000, total: 1320000 },
  { id: 5, month: '2026-03', product: 'プランA', quantity: 145, unitPrice: 5000, total: 725000 },
  { id: 6, month: '2026-03', product: 'プランB', quantity: 92, unitPrice: 12000, total: 1104000 },
]

function Page1() {
  const salesTotalQuantity = sales.reduce((sum, s) => sum + s.quantity, 0)
  const salesGrandTotal = sales.reduce((sum, s) => sum + s.total, 0)

  return (
    <section className="sheet padding-10mm">
      <h2 className="simple-table-title">社員一覧表</h2>
      <table className="simple-table">
        <thead>
          <tr>
            <th className="simple-table-th">No</th>
            <th className="simple-table-th">氏名</th>
            <th className="simple-table-th">部署</th>
            <th className="simple-table-th">役職</th>
            <th className="simple-table-th">入社日</th>
            <th className="simple-table-th">メール</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="simple-table-td simple-table-center">{emp.id}</td>
              <td className="simple-table-td">{emp.name}</td>
              <td className="simple-table-td">{emp.department}</td>
              <td className="simple-table-td">{emp.position}</td>
              <td className="simple-table-td simple-table-center">{emp.joinDate}</td>
              <td className="simple-table-td">{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="simple-table-title margin-top-24">売上実績表</h2>
      <table className="simple-table">
        <thead>
          <tr>
            <th className="simple-table-th">月</th>
            <th className="simple-table-th">商品</th>
            <th className="simple-table-th">数量</th>
            <th className="simple-table-th">単価</th>
            <th className="simple-table-th">合計</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s) => (
            <tr key={s.id}>
              <td className="simple-table-td simple-table-center">{s.month}</td>
              <td className="simple-table-td">{s.product}</td>
              <td className="simple-table-td simple-table-right">{s.quantity.toLocaleString()}</td>
              <td className="simple-table-td simple-table-right">¥{s.unitPrice.toLocaleString()}</td>
              <td className="simple-table-td simple-table-right">¥{s.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="simple-table-td simple-table-foot" colSpan={2}>合計</td>
            <td className="simple-table-td simple-table-foot simple-table-right">{salesTotalQuantity.toLocaleString()}</td>
            <td className="simple-table-td simple-table-foot"></td>
            <td className="simple-table-td simple-table-foot simple-table-right">¥{salesGrandTotal.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>

      <h2 className="simple-table-title margin-top-24">タスク管理表</h2>
      <table className="simple-table">
        <thead>
          <tr>
            <th className="simple-table-th">No</th>
            <th className="simple-table-th">タスク</th>
            <th className="simple-table-th">担当者</th>
            <th className="simple-table-th">ステータス</th>
            <th className="simple-table-th">優先度</th>
            <th className="simple-table-th">期日</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <td className="simple-table-td simple-table-center">{t.id}</td>
              <td className="simple-table-td">{t.task}</td>
              <td className="simple-table-td">{t.assignee}</td>
              <td className="simple-table-td simple-table-center">
                <span className={`simple-table-status simple-table-status-${t.status === '完了' ? 'done' : t.status === '進行中' ? 'active' : 'pending'}`}>
                  {t.status}
                </span>
              </td>
              <td className="simple-table-td simple-table-center">{t.priority}</td>
              <td className="simple-table-td simple-table-center">{t.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Page1
