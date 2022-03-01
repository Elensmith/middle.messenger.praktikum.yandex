import * as Handlebars from 'handlebars'
import signinTemplate from './signup.tmpl'

const template = Handlebars.compile(signinTemplate)

function renderSignup(e: HTMLElement, router: (a: string) => void) {
  e.innerHTML = template({})

  const signinBtn: HTMLElement | null = document.getElementById('signinBtn')
  if (signinBtn !== null) {
    signinBtn.addEventListener('click', () => {
      router('signin')
    })
  }

  const signupBtn: HTMLElement | null = document.getElementById('signupBtn')
  if (signupBtn !== null) {
    signupBtn.addEventListener('click', () => {
      router('chats')
    })
  }
}
export default renderSignup
