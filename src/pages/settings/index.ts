import * as Handlebars from 'handlebars'
import tmpl from './settings.tmpl'
import user from './userData'

const template = Handlebars.compile(tmpl)
const userName = 'Иван'
const isNotEditable = true
function renderSettings(e: HTMLElement, router: (a: string) => void) {
  e.innerHTML = template({ user, userName, isNotEditable })

  const backToChatBtn: HTMLElement | null =
    document.getElementById('backToChatBtn')
  if (backToChatBtn !== null) {
    backToChatBtn.addEventListener('click', () => {
      router('chats')
    })
  }

  const logOutBtn: HTMLElement | null = document.getElementById('logOutBtn')
  if (logOutBtn !== null) {
    logOutBtn.addEventListener('click', () => {
      router('signup')
    })
  }
  // const editUserPassword = document.getElementById('editUserPassword')
  // editUserPassword.addEventListener('click', () => {
  //   router('')
  // })
  const editUserInfo: HTMLElement | null =
    document.getElementById('editUserInfo')
  if (editUserInfo !== null) {
    editUserInfo.addEventListener('click', () => {
      // e.innerHTML = template({ user, userName })
    })
  }
  // const saveEditedInfo = document.getElementById('saveEditedInfo')
  // saveEditedInfo.addEventListener('click', () => {
  //   e.innerHTML = template({ user, userName, isNotEditable })
  // })
}

export default renderSettings
