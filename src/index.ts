import Button from './components/button/index'
import Input from './components/input/index'
import ErrorPage from './pages/error/index'
import ChatPage from './pages/chat'
import SignupPage from './pages/auth/signup'
import SettingsPage from './pages/settings'
import SigninPage from './pages/auth/signin'
import renderDOM from './components/utils/renderDOM'
import dictPattern from './components/utils/validationDict'
import registerComponent from './components/utils/registerComponent'
import user from './pages/settings/userData'

registerComponent(Button)
registerComponent(Input)

document.addEventListener('DOMContentLoaded', () => {
  // const errorPage = new ErrorPage({
  //   errorCode: 404,
  //   errorText: 'Ошибочка вышла',
  // })
  // renderDOM('#root', errorPage)
  // const chatPage = new ChatPage()
  // renderDOM('#root', chatPage)

  function submitFunc(event) {
    event.preventDefault()

    const objectData = {}

    const form = document.querySelector('form')
    const inputBlock = form!.querySelectorAll('.input')

    inputBlock.forEach((i) => {
      const input = i.querySelector('input')

      i.querySelector('.error').textContent = ''
      const currInput = dictPattern[input.name]
      const testInput = currInput.regexp.test(input!.value)

      if (!testInput) {
        i.querySelector('.error').textContent = currInput.errorText
      } else {
        objectData[input.name] = input.value
      }

      console.log(objectData, 'objectData')
    })
  }
  function authBtnFunc() {
    console.log('authBtn')
  }
  const signupPage = new SignupPage({
    submitBtn: submitFunc,
    authBtn: authBtnFunc,
  })
  renderDOM('#root', signupPage)

  // const settingsPage = new SettingsPage({
  //   user,
  //   userName: 'Иван',
  //   isNotEditable: true,
  // })
  // renderDOM('#root', settingsPage)

  //  const errorPage = new ErrorPage({
  //     errorCode: 404,
  //     errorText: 'Ошибочка вышла',
  //   })
  //   renderDOM('#root', errorPage)
  // setTimeout(() => {
  //   errorPage.setProps({
  //     errorCode: 500,
  //   })
  // }, 3000)
})

// const rootEl = document.getElementById('root')

// const dict = {
//   signup: renderSignup,
//   signin: renderSignin,
//   chats: renderChats,
//   settings: renderSettings,
//   500: renderError,
//   404: renderError,
// }
// function router(path: string | number) {
//   dict[path](rootEl, router)
// }
// router('404')
