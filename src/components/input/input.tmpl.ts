import './input.scss'

export default `<div class="input">
  <label class="label">{{labelText}}</label>
  <input class={{classInput}} name={{inputName}} type={{typeName}} autocomplete="on" value={{valueData}} />
  <span class="error">{{error}}</span>
</div>`
