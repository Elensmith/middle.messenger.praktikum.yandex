import '../auth.scss'

export default `
<div class="form">
  <form>
    <h3 class="header">Регистрация</h3>
    {{{Input labelText="Почта" classInput="input_main" placeholder="example@mail.com" type="email" inputName="email" }}}
    {{{Input labelText="Логин" classInput="input_main" type="text" inputName="login" }}}
    {{{Input labelText="Имя" classInput="input_main" type="text" inputName="first_name" }}}
    {{{Input labelText="Фамилия" classInput="input_main" type="text" inputName="second_name" }}}
    {{{Input labelText="Телефон" classInput="input_main" type="text" inputName="phone" }}}
    {{{Input labelText="Пароль" classInput="input_main" type="password" inputName="password" }}}
    {{{Input labelText="Пароль (еще раз)" classInput="input_main" type="password" inputName="password1"  }}}
    {{{Button title="Зарегистрироваться" type="submit" className="button_large" onClick=submitBtn}}}
  </form>
  {{{Button title="Войти" className="button_small" onClick=authBtn }}}
</div>
`
