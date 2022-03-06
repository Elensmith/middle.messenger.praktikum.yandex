import './chat.scss'

export default `
<div class="chat">
  <div class="box">
    <img class="avatar" src="{{avatar}}" alt="user avatar" />
  </div>
  <div class="box box-message">
    <h4 class="title">{{userName}}</h4>
    <span class="message"><span class="message-from-user">{{userAuthor}}</span>{{message}}</span>
  </div>
  <div class="box box-time">
    <span class="message-arrival-time">{{messageArrivalTime}}</span>
    {{#if newMessages}}
      <div class="new-messages">
        <p class="new-messages-text">{{newMessages}}</p>
      </div>
    {{/if}}
  </div>
</div>`
