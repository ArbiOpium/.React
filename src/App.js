import logo from './logo.svg';
import './App.css';

export function SideImage() {
  return (
    <><div className="side-image">
      <div>
      </div>
      <img src="figma.jpg" className="side-image" alt="logo" />
    </div><div className="login-right">
        <form className="login-form">
          <div className="form-group">
            <label className="form-label">Електронна пошта або мобільний номер</label>
            <input
              type="text"
              className="form-input"
              placeholder="Email або номер" />
          </div>

          <div className="form-group">
            <label className="form-label">Пароль</label>
            <input type="password" className="form-input" placeholder="Ваш пароль" />
          </div>

          <button className="continue-button">ПРОДОВЖИТИ</button>
        </form>
      </div></>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <SideImage />
      </>
    </div>
  );
}

export default App;
