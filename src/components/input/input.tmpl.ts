import './input.scss'

export default `<div class="input">
  <label class="label">{{labelText}}</label>
  {{#if readonly}}
  <input class={{classInput}} name={{inputName}} type={{type}}  value={{valueData}} readonly >
  {{else}}
  <input class={{classInput}} name={{inputName}} type={{type}} pattern={{pattern}} value={{valueData}} placeholder={{placeholder}}>
  {{/if}}
  <span class="error">{{error}}</span>
</div>`
