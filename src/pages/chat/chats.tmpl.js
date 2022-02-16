import './chats.scss'
import Input from '../../components/input/index'
import Button from '../../components/button/index'

export default `
  <main class="chats">
    <div class="messages-container">
    ${Button({
      title: 'Профиль',
      className: 'button_back-to-profile',
      id: 'settingsBtn',
    })}
    ${Input({
      labelText: 'Поиск',
      classInput: 'input_search',
      type: 'text',
      inputName: 'search-message',
      pattern: '',
      error: '',
    })}
    </div>
    <div class="chat">
      <p>Выберите чат чтобы отправить сообщение</p>
    </div>
  </main>
`
