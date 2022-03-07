import './error.scss'

export default `
<div class="error-page">
  <h1 class="code">{{errorCode}}</h1>
  <span class="text">{{errorText}}</span>
  {{{ Button title="Назад к чатам" className="button_small" onClick=onClick }}}
</div>
`
