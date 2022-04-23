import './chat-list.scss'

export default `
<div class="chat-list">
  {{#each chats}}
    {{{Chat id=this.id avatar=this.avatar userName=this.title userAuthor=this.last_message.user.login newMessages=this.unread_count message=this.last_message.content messageArrivalTime=this.messageArrivalTime }}}
  {{/each}}
</div>`
