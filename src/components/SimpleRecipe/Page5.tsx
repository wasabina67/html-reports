const recipeInfo = {
  title: 'ほうれん草とベーコンのクリームパスタ',
  description: '濃厚なクリームソースにほうれん草の彩りとベーコンの旨みが絡む、満足感たっぷりのパスタです。',
  servings: '2人分',
  cookingTime: '約25分',
  difficulty: '★★☆☆☆',
}

const ingredients = [
  { name: 'スパゲッティ', amount: '200g' },
  { name: 'ほうれん草', amount: '1束' },
  { name: 'ベーコン（ブロック）', amount: '80g' },
  { name: '玉ねぎ', amount: '1/2個' },
  { name: 'にんにく', amount: '1片' },
  { name: 'しめじ', amount: '1/2パック' },
  { name: '生クリーム', amount: '200ml' },
  { name: '牛乳', amount: '100ml' },
  { name: '粉チーズ', amount: '大さじ2' },
  { name: 'バター', amount: '10g' },
  { name: 'オリーブオイル', amount: '大さじ1' },
  { name: '塩・こしょう', amount: '適量' },
  { name: 'コンソメ顆粒', amount: '小さじ1' },
]

const steps = [
  'たっぷりの湯に塩（分量外）を入れ、スパゲッティを袋の表示時間より1分短く茹でる。茹で汁を100mlほど取り分けておく。',
  'ほうれん草はさっと茹でて冷水にとり、水気を絞って4cm幅に切る。ベーコンは5mm幅の拍子切り、玉ねぎは薄切り、しめじは小房に分ける。',
  'フライパンにオリーブオイルとバターを熱し、にんにく（みじん切り）を炒めて香りを出す。ベーコンを加えてカリッとするまで炒める。',
  '玉ねぎとしめじを加えてしんなりするまで炒め、生クリーム・牛乳・コンソメを加えて中火で2〜3分煮る。',
  '茹で上がったパスタとほうれん草を加え、よく絡める。茹で汁を少しずつ加えて濃度を調整し、粉チーズを加えて混ぜる。',
  '塩こしょうで味を調え、器に盛り付けて完成。お好みで粗びき黒こしょうをふる。',
]

const tips = [
  'パスタはソースと絡める時間を考慮して、表示より1分短く茹でるのがポイントです。',
  '生クリームは沸騰させすぎると分離するので、中火以下で調理しましょう。',
  '茹で汁を加えることで、ソースの乳化が進みなめらかに仕上がります。',
  'ほうれん草の代わりにブロッコリーやアスパラガスでもアレンジできます。',
]

function Page5() {
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

export default Page5
