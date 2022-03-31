import './chats.scss'
import createNewChatIcon from '../../assets/create-new-chat.svg'
import sendMessageIcon from '../../assets/send-message.svg'
import paperclip from '../../assets/paperclip.svg'
import moreInfo from '../../assets/more-info.svg'

export default `
  <main class="chats">
    <div class="messages-container">
      {{{Button title="Профиль" className="button_back-to-profile" onClick=goToSettings }}}
      <div class="search-area">
        {{{Input placeholderInfo="Поиск" classInput="input_search" type="text" inputName="search_message"}}}
        {{{ButtonWithIcon onClick=createNewChat iconSrc="${createNewChatIcon}" }}}
      </div>
      {{{ChatList }}}
    </div>
    {{{ModalWithInput inputLabel=inputLabel buttonName=buttonName title=modalTitle saveClick=saveModalBtn modalWindowClose=modalWindowClose }}}
    <div class="chat-area">
      <div class="chat-info" id="chatInfo">
        <div class="selected-chat-user">
          {{{ChatHeader }}}
          {{{ButtonWithIcon onClick=showMoreInfoMenu iconSrc="${moreInfo}" }}}
          <div class="chat__menu">
            {{{Button title="Добавить пользователя" className="button_menu" onClick=addUser }}}
            {{{Button title="Удалить пользователя" className="button_menu" onClick=removeUser }}}
            {{{Button title="Удалить чат" className="button_menu" onClick=deleteChat }}}
          </div>
        </div>
        <div class="messages">
          {{{ChatMessagesComponent }}}
        </div>
        <div class="new-message-box">
          {{{ButtonWithIcon onClick=addContentToMessage iconSrc="${paperclip}" }}}
          {{{Input placeholderInfo="Сообщение" classInput="input_message" type="text" inputName="message"}}}
          {{{ButtonWithIcon onClick=sendMessage iconSrc="${sendMessageIcon}" }}}
        </div>
      </div>
      <div id="messageNoSelect" class="no-selected-chat"
        <p>Выберите чат чтобы отправить сообщение</p>
      </div>
    </div>
  </main>
`
