const recipeInfo = {
  title: '夏野菜カレー',
  description: '旬の夏野菜をたっぷり使った、彩り豊かなカレーです。野菜の甘みとスパイスの香りが食欲をそそります。',
  servings: '4人分',
  cookingTime: '約45分',
  difficulty: '★★☆☆☆',
}

const ingredients = [
  { name: '鶏もも肉', amount: '300g' },
  { name: '玉ねぎ', amount: '1個' },
  { name: 'なす', amount: '2本' },
  { name: 'ズッキーニ', amount: '1本' },
  { name: 'パプリカ（赤）', amount: '1個' },
  { name: 'パプリカ（黄）', amount: '1個' },
  { name: 'トマト', amount: '2個' },
  { name: 'にんにく', amount: '1片' },
  { name: 'しょうが', amount: '1片' },
  { name: 'カレールー', amount: '1箱（約8皿分）' },
  { name: '水', amount: '600ml' },
  { name: 'サラダ油', amount: '大さじ2' },
]

const steps = [
  '鶏もも肉をひと口大に切り、塩こしょうで下味をつける。玉ねぎは薄切り、にんにく・しょうがはみじん切りにする。',
  'なすは乱切りにして水にさらす。ズッキーニは1cm幅の半月切り、パプリカは乱切り、トマトはざく切りにする。',
  '鍋にサラダ油を熱し、にんにく・しょうがを炒めて香りを出す。鶏肉を加えて表面に焼き色がつくまで中火で炒める。',
  '玉ねぎを加え、しんなりするまで炒める。水を加えて沸騰させ、アクを取り除く。',
  '弱火にして10分ほど煮込んだら火を止め、カレールーを割り入れてよく溶かす。',
  '再び弱火にかけ、なす・ズッキーニ・パプリカ・トマトを加えて10分ほど煮込む。野菜が柔らかくなったら完成。',
]

const tips = [
  'なすは水にさらすことでアク抜きができ、変色を防げます。',
  '夏野菜は煮込みすぎると食感が失われるため、後から加えるのがポイントです。',
  'お好みでオクラやかぼちゃを追加しても美味しく仕上がります。',
  '仕上げにガラムマサラを少量加えると、より本格的な風味になります。',
]

function Page1() {
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

export default Page1
