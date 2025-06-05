import './App.css';

function WonderCard(props) {
  return (
    <div className="card-design">
      <img
        src={props.image}
        alt={'photo ' + props.title}
        className="card-image"
      />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="grid">
      <WonderCard
        title="Галикарнасский мавзолей"
        image="mavz.jpg"
        description="Мавзолей, построенный в Галикарнасе — одно из семи чудес света."
      />
      <WonderCard
        title="Храм Артемиды в Эфесе"
        image="hram.jpg"
        description="Один из самых больших храмов античности, посвящённый Артемиде."
      />
      <WonderCard
        title="Пирамиды Гизы"
        image="giza-pyramids.jpg"
        description="Единственное чудо света, сохранившееся до наших дней."
      />
      <WonderCard
        title="Колосс Родосский"
        image="kolos.jpg"
        description="Огромная статуя Гелиоса, стоявшая в порту Родоса."
      />
      <WonderCard
        title="Олимпийская статуя Зевса"
        image="zevs.jpg"
        description="Знаменитая статуя Зевса, созданная Фидием в Олимпии."
      />
      <WonderCard
        title="Висячие сады Семирамиды"
        image="sad.jpg"
        description="Легендарные сады, построенные в древнем Вавилоне."
      />
      <WonderCard
        title="Александрийский маяк"
        image="may.jpg"
        description="Маяк на острове Фарос, помогавший кораблям входить в порт Александрии."
      />
    </div>
  );
}

export default App;
