import '../auth.scss'

export default `
<div class="form">
  <form>
    <h3 class="form__header">Регистрация</h3>
    {{{Input labelText="Почта" classInput="input_main" typeName="email" inputName="email" }}}
    {{{Input labelText="Логин" classInput="input_main" typeName="text" inputName="login"}}}
    {{{Input labelText="Имя" classInput="input_main" typeName="text" inputName="first_name" }}}
    {{{Input labelText="Фамилия" classInput="input_main" typeName="text" inputName="second_name" }}}
    {{{Input labelText="Телефон" classInput="input_main" typeName="text" inputName="phone" }}}
    {{{Input labelText="Пароль" classInput="input_main" typeName="password" inputName="password" }}}
    {{{Input labelText="Пароль (еще раз)" classInput="input_main" typeName="password" inputName="password1" }}}
    <div class="form__button-devider"></div>
    {{{Button title="Зарегистрироваться" typeName="submit" className="button_large" onClick=signUpClick}}}
  </form>
  {{{Button title="Войти" className="button_small" onClick=goSignIn }}}
</div>
`
