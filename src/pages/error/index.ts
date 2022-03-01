/* eslint-disable import/extensions */
import Block from '../../components/utils/Block'
import tmpl from './error.tmpl'
// import Button from '../../components/button/button'

interface ErrorProps {
  errorCode: number
  errorText: string
}
export default class ErrorPage extends Block {
  constructor(props: ErrorProps) {
    super({ ...props, onClick: () => console.log('ddddd') })
  }

  render() {
    return tmpl
  }
}
// const template = Handlebars.compile(tmpl)
// const errorCode = 404
// const errorText = 'Ошибочка вышла'
// function renderError(e: HTMLElement, router: (a: string) => void) {
//   e.innerHTML = template({ errorCode, errorText })

//   const goToChatBtn: HTMLElement | null = document.getElementById('goToChatBtn')
//   if (goToChatBtn !== null) {
//     goToChatBtn.addEventListener('click', () => {
//       router('chats')
//     })
//   }
// }

// export default renderError
