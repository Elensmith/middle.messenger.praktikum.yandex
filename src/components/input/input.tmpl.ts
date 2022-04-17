import './input.scss'

export default `<div class="input">
  <label class="input__label">{{labelText}}</label>
  {{#if valueData}}
    <input class={{classInput}} name={{inputName}} type={{typeName}} value={{valueData}} />
  {{else}}
    <input class={{classInput}} name={{inputName}} type={{typeName}} />
  {{/if}}
  <span class="input__error">{{error}}</span>
</div>`
