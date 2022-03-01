import * as Handlebars from 'handlebars'
import tmpl from './signin.tmpl'

const template = Handlebars.compile(tmpl)
function renderSignin(e: HTMLElement, router: (a: string) => void) {
  e.innerHTML = template({})

  const signupBtn: HTMLElement | null = document.getElementById('signupBtn')
  if (signupBtn !== null) {
    signupBtn.addEventListener('click', () => {
      router('signup')
    })
  }

  const signinBtn: HTMLElement | null = document.getElementById('signinBtn')
  if (signinBtn !== null) {
    signinBtn.addEventListener('click', () => {
      router('chats')
    })
  }
}
export default renderSignin
