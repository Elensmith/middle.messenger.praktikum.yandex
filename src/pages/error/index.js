import Handlebars from 'handlebars'
import tmpl from './error.tmpl'

const template = Handlebars.compile(tmpl)
const errorCode = 404
const errorText = 'Ошибочка вышла'
function renderError(e, router) {
  e.innerHTML = template({ errorCode, errorText })

  const goToChatBtn = document.getElementById('goToChatBtn')
  goToChatBtn.addEventListener('click', () => {
    router('chats')
  })
}

export default renderError
