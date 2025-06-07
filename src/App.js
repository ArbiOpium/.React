import './App.css';

export function SideImage() {
  return (
    <div className="side-image-wrapper">

      <button className="back-button" onClick={() => window.history.back()}>
        <span className="arrow-left"></span>
      </button>

      <div className="side-image">
        <img src="/figma.jpg" alt="logo" />
        <div className="side-image-text">
          <p>заповніть вхід до <br />облікового запису</p>
        </div>
      </div>
    </div>
  );
}

export function Form() {
  return (
    <div className="form-wrapper">
      <form className="login-form">
        <label htmlFor="email">Електронна пошта або мобільний номер</label>
        <input type="text" id="email" name="email" />

        <p className="description">
          By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply. <br />
          <a className="link" href="#">More info about Privacy Policy</a>
        </p>

        <label htmlFor="password">Пароль</label>
        <div className="password-input">
          <input type="password" id="password" name="password" />
        </div>

        <a href="#" className="link">Забули свій пароль?</a>

        <div className="checkbox-wrapper">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Зберегти інформацію</label>
        </div>

        <button type="submit" className="btn-primary">Продовжити</button>

        <p className="no-account">У вас ще немає облікового запису? Створіть його:</p>
        <button type="button" className="btn-secondary">Створити Акаунт</button>
      </form>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <>
        <SideImage />
        <Form />
      </>
    </div>
  );
}

export default App;
