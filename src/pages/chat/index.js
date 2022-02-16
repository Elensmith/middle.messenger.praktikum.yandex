import Handlebars from 'handlebars'
import tmpl from './chats.tmpl'

const template = Handlebars.compile(tmpl)
function renderChats(e, router) {
  e.innerHTML = template()

  const settingsBtn = document.getElementById('settingsBtn')
  settingsBtn.addEventListener('click', () => {
    router('settings')
  })
}

export default renderChats
