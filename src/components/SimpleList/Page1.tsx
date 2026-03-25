const todos = [
  { id: 1, title: '企画書の作成', deadline: '2026-03-28', done: true },
  { id: 2, title: 'デザインレビュー', deadline: '2026-03-30', done: true },
  { id: 3, title: 'APIの実装', deadline: '2026-04-01', done: false },
  { id: 4, title: 'テストケースの作成', deadline: '2026-04-03', done: false },
  { id: 5, title: 'ドキュメント更新', deadline: '2026-04-05', done: false },
  { id: 6, title: 'リリース準備', deadline: '2026-04-07', done: false },
]

const buyList = [
  { id: 1, item: 'ノートPC用スタンド', category: '機材', done: true },
  { id: 2, item: 'ワイヤレスキーボード', category: '機材', done: false },
  { id: 3, item: 'モニターライト', category: '機材', done: false },
  { id: 4, item: 'A4コピー用紙', category: '消耗品', done: true },
  { id: 5, item: 'ホワイトボードマーカー', category: '消耗品', done: false },
  { id: 6, item: 'USBハブ', category: '機材', done: false },
  { id: 7, item: 'デスクマット', category: '備品', done: true },
  { id: 8, item: '付箋（大）', category: '消耗品', done: false },
]

const bookmarks = [
  { id: 1, title: 'React公式ドキュメント', url: 'react.dev', tag: '技術' },
  { id: 2, title: 'TypeScript Handbook', url: 'typescriptlang.org', tag: '技術' },
  { id: 3, title: 'デザインシステムガイド', url: 'design-system.example.com', tag: 'デザイン' },
  { id: 4, title: 'プロジェクト管理ツール', url: 'pm-tool.example.com', tag: '業務' },
  { id: 5, title: 'CI/CDパイプライン設定', url: 'ci.example.com', tag: 'インフラ' },
  { id: 6, title: '社内Wiki', url: 'wiki.example.com', tag: '業務' },
]

function Page1() {
  return (
    <section className="sheet padding-10mm">
      <h2 className="simple-list-title">Todo List</h2>
      <ul className="simple-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`simple-list-item ${todo.done ? 'done' : ''}`}>
            <span className="simple-list-check">{todo.done ? '☑' : '☐'}</span>
            <span className="simple-list-text">{todo.title}</span>
            <span className="simple-list-deadline">{todo.deadline}</span>
          </li>
        ))}
      </ul>

      <h2 className="simple-list-title margin-top-24">Buy List</h2>
      <ul className="simple-list">
        {buyList.map((item) => (
          <li key={item.id} className={`simple-list-item ${item.done ? 'done' : ''}`}>
            <span className="simple-list-check">{item.done ? '☑' : '☐'}</span>
            <span className="simple-list-text">{item.item}</span>
            <span className="simple-list-category">{item.category}</span>
          </li>
        ))}
      </ul>

      <h2 className="simple-list-title margin-top-24">Bookmarks</h2>
      <ul className="simple-list">
        {bookmarks.map((bm) => (
          <li key={bm.id} className="simple-list-item">
            <span className="simple-list-text">{bm.title}</span>
            <span className="simple-list-url">{bm.url}</span>
            <span className="simple-list-tag">{bm.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Page1
