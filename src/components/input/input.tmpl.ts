import './input.scss'

export default `<div class="input">
  <label class="label">{{labelText}}</label>
  {{#if readonly}}
  <input class={{classInput}} name={{inputName}} type={{typeName}} value={{valueData}} autocomplete="on" readonly>
  {{else}}
  <input class={{classInput}} name={{inputName}} type={{typeName}} autocomplete="on" >
  {{/if}}
  <span class="error">{{error}}</span>
</div>`
