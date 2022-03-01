import '../auth.scss'
import Input from '../../../components/input/index'
import Button from '../../../components/button/button'

export default `
  <div class="form">
    <h3 class="header">Вход</h3>
    ${Input({
      labelText: 'Логин',
      classInput: 'input_main',
      type: 'text',
      inputName: 'login',
      pattern: '',
      error: '',
    })}
    ${Input({
      labelText: 'Пароль',
      classInput: 'input_main',
      type: 'password',
      inputName: 'password',
      pattern: '',
      error: '',
    })}
    ${Button({
      title: 'Вход',
      className: 'button_large',
      id: 'signinBtn',
    })}
    ${Button({
      title: 'Зарегистрироваться',
      className: 'button_small',
      id: 'signupBtn',
    })}
  </div>
`
