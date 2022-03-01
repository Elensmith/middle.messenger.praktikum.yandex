import * as Handlebars from 'handlebars'
import tmpl from './chats.tmpl'

const template = Handlebars.compile(tmpl)
function renderChats(e: HTMLElement, router: (a: string) => void) {
  e.innerHTML = template({})

  const settingsBtn: HTMLElement | null = document.getElementById('settingsBtn')
  if (settingsBtn !== null) {
    settingsBtn.addEventListener('click', () => {
      router('settings')
    })
  }
}

export default renderChats
