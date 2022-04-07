import '../auth.scss'

export default `
  <div class="form">
    <form>
      <h3 class="form__header">Вход</h3>
      {{{Input labelText="Логин" classInput="input_main" typeName="text" inputName="login" }}}
      {{{Input labelText="Пароль" classInput="input_main" typeName="password" inputName="password" }}}
      <div class="form__button-devider"></div>
      {{{Button title="Авторизоваться" className="button_large" onClick=signInClick }}}
      {{{Button title="Нет аккаунта?" className="button_small" onClick=goSignUp }}}
    </form>
  </div>
`
