import Handlebars from 'handlebars'
import tmpl from './settings.tmpl'
import user from './userData'

const template = Handlebars.compile(tmpl)
const userName = 'Иван'
const isNotEditable = true
function renderSettings(e, router) {
  e.innerHTML = template({ user, userName, isNotEditable })

  const backToChatBtn = document.getElementById('backToChatBtn')
  backToChatBtn.addEventListener('click', () => {
    router('chats')
  })
  const logOutBtn = document.getElementById('logOutBtn')
  logOutBtn.addEventListener('click', () => {
    router('signup')
  })
  // const editUserPassword = document.getElementById('editUserPassword')
  // editUserPassword.addEventListener('click', () => {
  //   router('')
  // })
  const editUserInfo = document.getElementById('editUserInfo')
  editUserInfo.addEventListener('click', () => {
    // e.innerHTML = template({ user, userName })
  })
  // const saveEditedInfo = document.getElementById('saveEditedInfo')
  // saveEditedInfo.addEventListener('click', () => {
  //   e.innerHTML = template({ user, userName, isNotEditable })
  // })
}

export default renderSettings
