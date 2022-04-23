import './chat-messages-component.scss'

export default `
<div class="chat-messages-list">
  {{#each chatMessages}}
    {{{ChatMessage userId=this.user_id arrivedTime=this.time messageContent=this.content image="" }}}
  {{/each}}
`
