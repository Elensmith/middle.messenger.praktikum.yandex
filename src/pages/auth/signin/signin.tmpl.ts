import '../auth.scss'

export default `
  <div class="form">
    <h3 class="header">Вход</h3>
    {{{Input labelText="Логин" classInput="input_main" type="text" inputName="login" pattern="//"}}}
    {{{Input labelText="Пароль" classInput="input_main" type="password" inputName="password" pattern="//"}}}
    {{{Button title="Вход" className="button_large" onClick=onClick }}}
    {{{Button title="Зарегистрироваться" className="button_small" onClick=onClick }}}
  </div>
`
