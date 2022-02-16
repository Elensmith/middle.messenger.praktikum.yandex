import Handlebars from 'handlebars'
import signinTemplate from './signup.tmpl'

const template = Handlebars.compile(signinTemplate)

function renderSignup(e, push) {
  e.innerHTML = template()

  const signinBtn = document.getElementById('signinBtn')
  signinBtn.addEventListener('click', () => {
    push('signin')
  })
  const signupBtn = document.getElementById('signupBtn')
  signupBtn.addEventListener('click', () => {
    push('chats')
  })
}
export default renderSignup
