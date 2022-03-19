import '../auth.scss'

export default `
  <div class="form">
    <form>
      <h3 class="header">Вход</h3>
      {{{Input labelText="Логин" classInput="input_main" typeName="text" inputName="login" }}}
      {{{Input labelText="Пароль" classInput="input_main" typeName="password" inputName="password" }}}
      {{{Button title="Вход" className="button_large" onClick=signInClick }}}
      {{{Button title="Зарегистрироваться" className="button_small" onClick=goSignUp }}}
    </form>
  </div>
`
