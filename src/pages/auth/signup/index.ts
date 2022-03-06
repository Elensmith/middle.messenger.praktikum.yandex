import Block from '../../../components/utils/Block'
import tmpl from './signup.tmpl'

interface ChatProps {
  submitBtn: () => void
  authBtn: () => void
}
export default class SignupPage extends Block {
  constructor({ ...props }: ChatProps) {
    super(props)
    // this.loadPage()
  }

  render() {
    return tmpl
  }

  // loadPage() {
  //   const timer = setInterval(() => {
  //     if (document.querySelector('form') !== null) {
  //       this.submitFunc()
  //       clearInterval(timer)
  //     }
  //   }, 10)
  // }

  // submitFunc() {
  //   console.log('submitFunc')
  //   const form = document.querySelector('form')
  //   const formSubmit = document.querySelectorAll('button.button_large')
  //   formSubmit[0].disabled = true
  //   formSubmit[0].className = 'button button_larg button_disabled'
  // }
}
