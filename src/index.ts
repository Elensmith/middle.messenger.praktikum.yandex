import Button from './components/button/button'
import ErrorPage from './pages/error/index'
import renderDOM from './components/utils/renderDOM'
import registerComponent from './components/utils/registerComponent'
registerComponent(Button)
document.addEventListener('DOMContentLoaded', () => {
  // registerComponent(ErrorPage)
  const errorPage = new ErrorPage({
    errorCode: 404,
    errorText: 'Ошибочка вышла',
  })
  // registerComponent(Button)
  // const errorPage = new Button({
  //   title: 'ddddddd',
  //   events: {
  //     click: () => console.log('eeeeee'),
  //   },
  // })

  renderDOM('#root', errorPage)
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
