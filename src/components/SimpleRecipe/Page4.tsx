const recipeInfo = {
  title: 'サーモンのムニエル',
  description: 'バターの香りとレモンの酸味が絶妙なサーモンのムニエル。外はカリッと中はふっくら、簡単なのに本格的な味わいです。',
  servings: '2人分',
  cookingTime: '約20分',
  difficulty: '★★☆☆☆',
}

const ingredients = [
  { name: '生鮭切り身', amount: '2切れ' },
  { name: '塩', amount: '少々' },
  { name: 'こしょう', amount: '少々' },
  { name: '薄力粉', amount: '適量' },
  { name: 'バター', amount: '30g' },
  { name: 'オリーブオイル', amount: '大さじ1' },
  { name: 'レモン', amount: '1/2個' },
  { name: 'パセリ（みじん切り）', amount: '適量' },
  { name: 'ベビーリーフ', amount: '1袋' },
  { name: 'ミニトマト', amount: '6個' },
]

const steps = [
  '鮭の切り身の水気をキッチンペーパーでしっかり拭き取り、両面に塩こしょうをふる。',
  '焼く直前に薄力粉を両面にまんべんなくまぶし、余分な粉をはたき落とす。',
  'フライパンにオリーブオイルとバター（10g）を入れて中火で熱し、バターが溶けたら鮭を皮目から入れる。',
  '中火で3〜4分焼き、皮がカリッとしたら裏返す。残りのバター（20g）を加え、スプーンで溶けたバターを鮭にかけながら2〜3分焼く。',
  '器にベビーリーフとミニトマトを添えて鮭を盛り付け、レモンを絞り、パセリを散らして完成。',
]

const tips = [
  '鮭の水気をしっかり拭き取ることで、薄力粉がむらなくつき、カリッと焼き上がります。',
  '薄力粉は焼く直前にまぶすのがポイント。時間が経つと水分を吸ってべたつきます。',
  'バターは焦げやすいので、最初はオリーブオイルと少量のバターで焼き始め、仕上げに追加すると風味よく仕上がります。',
  'タラやメカジキなど、他の白身魚でも同様に作れます。',
]

function Page4() {
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

export default Page4
