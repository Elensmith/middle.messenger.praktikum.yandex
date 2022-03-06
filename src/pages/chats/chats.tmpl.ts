import './chats.scss'

export default `
  <main class="chats">
    <div class="messages-container">
    {{{Button title="Профиль" className="button_back-to-profile" onClick=onClick }}}
    {{{Input placeholder="Поиск" classInput="input_search" type="text" inputName="search-message"}}}
    {{{Chat avatar="https://farm5.staticflickr.com/4630/40154768462_b54bd2f94b_o.jpg" userName="Anna" userAuthor="" message="по поводу завтра, слушай, наверно не смогу, вообще еще уточню, напишу ближе к делу или как буду пряяям точно знать" messageArrivalTime="10:50" }}}
    {{{Chat avatar="https://kulturakumertau.ru/wp-content/uploads/3/f/4/3f47f7753e4c02145f5b3c66983ee127.jpeg" userName="Ira" userAuthor="Вы: " message="Ну так вот короче, как будет время пиши, лады? у меня есть что рассказать, рили))" messageArrivalTime="10:50" newMessages="1" }}}
    {{{Chat avatar="https://kto-chto-gde.ru/wp-content/uploads/2018/12/rozhdestva-ne-budet-ochen-strannye-zakony-iz-raznyx-stran-5.jpg" userName="Ivan" userAuthor="Вы: " message="Как дела у тебя?" messageArrivalTime="10:50" }}}
    {{{Chat avatar="https://farm5.staticflickr.com/4630/40154768462_b54bd2f94b_o.jpg" userName="work-chat" message="Ребят, что у нас по поводу созвона? где же ссылка?" messageArrivalTime="13:40" newMessages="3" }}}
    </div>
    <div class="chat-area">
      <div class="selected-chat-user">
        <div class="user-info-box">
          <img class="avatar" src="{{selectedUserAvatar}}" alt="avatar" />
          <h4 class="user-name">{{selectedUserName}}</h4>
        </div>
        <button class="button-more-info">
          <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="grey" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
          </svg>
        </button>
      </div>
      <div class="messages">
        {{{ChatMessage className="chat-message" arrivedTime="10:40" messageContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi aperiam ipsa eligendi accusamus perspiciatis consequuntur excepturi deserunt labore? Sapiente aut ad natus excepturi explicabo dignissimos pariatur repellat atque! Eveniet.
        "}}}
        {{{ChatMessage className="chat-message" arrivedTime="10:45" messageContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi aperiam ipsa eligendi accusamus perspiciatis consequuntur excepturi deserunt labore?.
        "}}}
        {{{ChatMessage className="chat-message" arrivedTime="10:50" messageContent="" image="https://funart.pro/uploads/posts/2021-03/1617049917_2-p-oboi-kartinki-na-rabochii-stol-vesna-priro-3.jpg"}}}
      </div>
      <div class="new-message-box">
        <button class="button-more-info">
          <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="grey" d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z" />
          </svg>
        </button>
        {{{Input placeholder="Сообщение" classInput="input_message" type="text" inputName="message"}}}
        <button class="button-more-info">
        <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="teal" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
        </svg>
        </button>
      </div>
    </div>
  </main>
`
