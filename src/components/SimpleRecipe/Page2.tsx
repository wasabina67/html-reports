const recipeInfo = {
  title: 'ビーフシチュー',
  description: 'じっくり煮込んだ牛肉と野菜がとろけるように柔らかい、濃厚なビーフシチューです。寒い季節にぴったりの一品。',
  servings: '4人分',
  cookingTime: '約2時間',
  difficulty: '★★★☆☆',
}

const ingredients = [
  { name: '牛すね肉（またはカレー用）', amount: '500g' },
  { name: '玉ねぎ', amount: '2個' },
  { name: 'にんじん', amount: '1本' },
  { name: 'じゃがいも', amount: '2個' },
  { name: 'マッシュルーム', amount: '6個' },
  { name: 'セロリ', amount: '1本' },
  { name: 'にんにく', amount: '1片' },
  { name: 'デミグラスソース缶', amount: '1缶（290g）' },
  { name: '赤ワイン', amount: '200ml' },
  { name: '水', amount: '400ml' },
  { name: 'トマトペースト', amount: '大さじ2' },
  { name: 'バター', amount: '20g' },
  { name: '塩・こしょう', amount: '適量' },
  { name: '薄力粉', amount: '大さじ2' },
]

const steps = [
  '牛すね肉をひと口大に切り、塩こしょうをふって薄力粉をまぶす。玉ねぎはくし切り、にんじん・じゃがいもは乱切り、セロリは斜め切りにする。',
  '厚手の鍋にバターを熱し、牛肉の表面に焼き色がつくまで強火で焼く。焼き色がついたらいったん取り出す。',
  '同じ鍋でにんにく（みじん切り）を炒め、玉ねぎ・セロリを加えてしんなりするまで中火で炒める。',
  '赤ワインを加えてアルコールを飛ばし、水・トマトペースト・牛肉を戻し入れる。沸騰したらアクを丁寧に取り除く。',
  '蓋をして弱火で約1時間煮込む。途中で水分が減りすぎたら水を足す。',
  'にんじん・じゃがいも・マッシュルームを加え、デミグラスソースを入れてさらに30分煮込む。塩こしょうで味を調えて完成。',
]

const tips = [
  '牛肉に薄力粉をまぶすことで、煮込んだときにとろみがつきやすくなります。',
  '赤ワインがない場合は、料理酒で代用できますが、風味はやや異なります。',
  '一晩寝かせると味がなじんでさらに美味しくなります。',
  '仕上げに生クリームを回しかけると、レストラン風の仕上がりになります。',
]

function Page2() {
  return (
    <section className="sheet padding-10mm">
      <h2 className="simple-recipe-title">{recipeInfo.title}</h2>
      <p className="simple-recipe-description">{recipeInfo.description}</p>

      <div className="simple-recipe-info">
        <div className="simple-recipe-info-item">
          <div className="simple-recipe-info-label">分量</div>
          <div className="simple-recipe-info-value">{recipeInfo.servings}</div>
        </div>
        <div className="simple-recipe-info-item">
          <div className="simple-recipe-info-label">調理時間</div>
          <div className="simple-recipe-info-value">{recipeInfo.cookingTime}</div>
        </div>
        <div className="simple-recipe-info-item">
          <div className="simple-recipe-info-label">難易度</div>
          <div className="simple-recipe-info-value">{recipeInfo.difficulty}</div>
        </div>
      </div>

      <h3 className="simple-recipe-section margin-top-24">材料（{recipeInfo.servings}）</h3>
      <ul className="simple-recipe-ingredients">
        {ingredients.map((item) => (
          <li key={item.name} className="simple-recipe-ingredient">
            <span className="simple-recipe-ingredient-name">{item.name}</span>
            <span className="simple-recipe-ingredient-amount">{item.amount}</span>
          </li>
        ))}
      </ul>

      <h3 className="simple-recipe-section margin-top-24">作り方</h3>
      <ol className="simple-recipe-steps">
        {steps.map((step, index) => (
          <li key={index} className="simple-recipe-step">
            <span className="simple-recipe-step-number">{index + 1}</span>
            <span className="simple-recipe-step-text">{step}</span>
          </li>
        ))}
      </ol>

      <h3 className="simple-recipe-section margin-top-24">ポイント・コツ</h3>
      <ul className="simple-recipe-tips">
        {tips.map((tip, index) => (
          <li key={index} className="simple-recipe-tip">{tip}</li>
        ))}
      </ul>
    </section>
  )
}

export default Page2
