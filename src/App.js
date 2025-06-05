import logo from './logo.svg';
import './App.css';

export function Book() {
  return (
      <div className='card'>
      <h1>Title: Arthur and the Minimoys</h1>
      <p>Author: Luc Besson</p>
      <p>Genre: Fantasy / Adventure</p>
      <p>Pages: 200</p>
      <h3>Reviews:</h3>
      <ul>
        <li>Magical story with charming characters.</li>
        <li>Great for kids and nostalgic for adults.</li>
      </ul>
    </div>
  );
}

export function Group() {
  return (
    <div className="card">
      <h1>Imagine Dragons</h1>
      <p>Band Members:</p>
      <ul>
        <li>Dan Reynolds – Vocals</li>
        <li>Wayne Sermon – Guitar</li>
        <li>Ben McKee – Bass</li>
        <li>Daniel Platzman – Drums</li>
      </ul>
      <p>Albums:</p>
      <ul>
        <li>Night Visions</li>
        <li>Smoke + Mirrors</li>
        <li>Evolve</li>
        <li>Origins</li>
      </ul>
      <img src="imagine.jpg" alt="App-logo" />
    </div>
  );
}

export function Recipe() {
  return (
      <div className="card">
      <h1>Spaghetti Carbonara</h1>
      <p>Ingredients:</p>
      <ul>
        <li>200g spaghetti</li>
        <li>100g pancetta</li>
        <li>2 eggs</li>
        <li>50g Parmesan cheese</li>
        <li>Salt and black pepper</li>
      </ul>
      <p>Steps:</p>
      <ol>
        <li>Boil pasta in salted water.</li>
        <li>Fry pancetta until crisp.</li>
        <li>Mix eggs and cheese in a bowl.</li>
        <li>Drain pasta, add pancetta and egg mixture.</li>
        <li>Stir quickly and serve hot.</li>
      </ol>
      <img src="carbonara-horizontal-mediumSquareAt3X-v2.jpg
" alt="Carbonara" />
    </div>
  );
}

function App() {
  return (
    <div>
      <div className='Cards'>
        <Book />
        <Group/>
        <Recipe/>
      </div>
    </div>
  );
}

export default App;