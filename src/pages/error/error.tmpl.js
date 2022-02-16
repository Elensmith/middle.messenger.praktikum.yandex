import './error.scss'
import Button from '../../components/button/index'

export default `
<div class="error-page">
<h1 class="code">{{errorCode}}</h1>
<span class="text">{{errorText}}</span>
${Button({
  title: 'Назад к чатам',
  className: 'button_small',
  id: 'goToChatBtn',
})}
</div>
`
