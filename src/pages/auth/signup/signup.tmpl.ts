import '../auth.scss'
import Input from '../../../components/input/index'
import Button from '../../../components/button/button'

export default `
  <form class="form">
    <h3 class="header">Регистрация</h3>
    ${Input({
      labelText: 'Почта',
      placeholder: 'example@mail.com',
      classInput: 'input_main',
      type: 'email',
      inputName: 'email',
      pattern: '/.+@.+..+/',
      error: '',
    })}
    ${Input({
      labelText: 'Логин',
      classInput: 'input_main',
      type: 'text',
      inputName: 'login',
      pattern: '',
      error: '',
    })}
    ${Input({
      labelText: 'Имя',
      classInput: 'input_main',
      type: 'text',
      inputName: 'first_name',
      pattern: '',
      error: '',
    })}
    ${Input({
      labelText: 'Фамилия',
      classInput: 'input_main',
      type: 'text',
      inputName: 'second_name',
      pattern: '',
      error: '',
    })}
    ${Input({
      labelText: 'Телефон',
      classInput: 'input_main',
      type: 'text',
      inputName: 'phone',
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
    ${Input({
      labelText: 'Пароль (еще раз)',
      classInput: 'input_main',
      type: 'password',
      inputName: 'password',
      pattern: '',
      error: '',
    })}
    ${Button({
      title: 'Зарегистрироваться',
      className: 'button_large',
      id: 'signupBtn',
    })}
    ${Button({
      title: 'Войти',
      className: 'button_small',
      id: 'signinBtn',
    })}
  </form>
`
