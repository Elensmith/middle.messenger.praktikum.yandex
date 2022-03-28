import './chat-list.scss'

export default `
<div class="chat-list">
  {{#each chats}}
    {{{Chat id=this.id avatar=this.avatar userName=this.title userAuthor="" newMessages=this.unread_count message=this.last_message messageArrivalTime=this.messageArrivalTime }}}
  {{/each}}
</div>`
