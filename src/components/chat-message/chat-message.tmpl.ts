import './chat-message.scss'

export default `
<div class={{className}}>
  <div class="message-content">{{messageContent}}</div>
  {{#if image}}
    <img class="message-image" src="{{image}}" alt="picture" />
  {{/if}}
  <span class="arrived-time">{{arrivedTime}}</span>
</div>`
