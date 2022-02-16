import Handlebars from 'handlebars'
import tmpl from './signin.tmpl'

const template = Handlebars.compile(tmpl)
function renderSignin(e, router) {
  e.innerHTML = template()

  const signupBtn = document.getElementById('signupBtn')
  signupBtn.addEventListener('click', () => {
    router('signup')
  })
  const signinBtn = document.getElementById('signinBtn')
  signinBtn.addEventListener('click', () => {
    router('chats')
  })
}
export default renderSignin
