import './chats.scss'

export default `
  <main class="chats">
    <div class="messages-container">
    {{{Button title="Профиль" className="button_back-to-profile"}}}
    {{{Input labelText="Поиск" classInput="input_search" type="text" inputName="search-message"}}}
    </div>
    <div class="chat">
      <p>Выберите чат чтобы отправить сообщение</p>
    </div>
  </main>
`
