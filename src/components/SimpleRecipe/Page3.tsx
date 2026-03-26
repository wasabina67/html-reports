const recipeInfo = {
  title: '豚の角煮',
  description: '豚バラ肉をじっくり煮込んで、箸で崩れるほど柔らかく仕上げた和風の定番料理です。甘辛い味付けがご飯によく合います。',
  servings: '4人分',
  cookingTime: '約2時間30分',
  difficulty: '★★★☆☆',
}

const ingredients = [
  { name: '豚バラブロック肉', amount: '600g' },
  { name: '長ねぎ（青い部分）', amount: '1本分' },
  { name: 'しょうが', amount: '1片' },
  { name: 'ゆで卵', amount: '4個' },
  { name: '大根', amount: '1/3本' },
  { name: '醤油', amount: '大さじ4' },
  { name: '砂糖', amount: '大さじ3' },
  { name: 'みりん', amount: '大さじ3' },
  { name: '酒', amount: '200ml' },
  { name: '水', amount: '400ml' },
  { name: 'からし', amount: '適量' },
]

const steps = [
  '豚バラブロック肉を4〜5cm角に切る。大根は2cm幅の輪切りにし、面取りをしておく。',
  'フライパンで豚肉の全面に焼き色をつける。油は引かずに豚肉自体の脂で焼く。',
  '鍋にたっぷりの水（分量外）、長ねぎの青い部分、薄切りにしたしょうがと豚肉を入れ、沸騰したら弱火で40分ほど下茹でする。',
  '下茹でした豚肉を取り出し、流水で軽く洗う。茹で汁は捨てる。',
  '鍋に豚肉・大根・水・酒・砂糖を入れて中火にかける。沸騰したらアクを取り、醤油・みりんを加えて落し蓋をし、弱火で1時間煮込む。',
  'ゆで卵を加えてさらに20分煮込む。煮汁にとろみがついたら完成。器に盛り、からしを添える。',
]

const tips = [
  '下茹でをしっかり行うことで、余分な脂が抜けてさっぱりした仕上がりになります。',
  '落し蓋がない場合は、アルミホイルやクッキングシートで代用できます。',
  '一晩冷蔵庫で寝かせると味が染み込み、表面の脂も取り除きやすくなります。',
  '圧力鍋を使えば煮込み時間を大幅に短縮できます。',
]

function Page3() {
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

export default Page3
