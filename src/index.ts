import Button from './components/button/index'
import Input from './components/input/index'
import Chat from './components/chat/index'
import ChatMessage from './components/chat-message'
import ErrorPage from './pages/error/index'
import ChatPage from './pages/chats'
import SignupPage from './pages/auth/signup'
import SettingsPage from './pages/settings'
import SigninPage from './pages/auth/signin'
import registerComponent from './utils/registerComponent'
// import user from './pages/settings/userData'
import Validation from './utils/Validation'
import Router from './utils/Router'
import AuthController from './controllers/AuthController'

// function addMessage() {
//   const isValid = validate.submit()
//   if (isValid) {
//     const message = 'wedewdew'
//     const newMessage = `{{{ChatMessage className="chat-message_right" arrivedTime="10:45" messageContent="${message}"}}}`
//     document.querySelector('.messages').appendChild(newMessage)
//   }
// }

// const dictPages: any = {
//   chatPage: {
//     type: ChatPage,
//     props: {
//       // avatar: 'string',
//       // userName: 'string',
//       // userAuthor: 'string',
//       // message: 'string',
//       // messageArrivalTime: 'string',
//       // newMessages: 11,
//       // selectedUserName: 'Ira',
//       // selectedUserAvatar:
//       //   'https://kulturakumertau.ru/wp-content/uploads/3/f/4/3f47f7753e4c02145f5b3c66983ee127.jpeg',
//       onClick: () => {
//         router('settingsPage')
//       },
//       // sendMessage: () => {
//       //   addMessage()
//       // },
//     },
//   },
//   signupPage: {
//     type: SignupPage,
//     props: {
//       submitBtn: submitFunc,
//       authBtn: () => {
//         router('signinPage')
//       },
//     },
//   },
//   signinPage: {
//     type: SigninPage,
//     props: {
//       login: () => {
//         router('signupPage')
//       },
//       onClick: submitFunc,
//     },
//   },
//   settingsPage: {
//     type: SettingsPage,
//     props: {
//       // user,
//       userName: 'Иван',
//       isNotEditable: true,
//       logout: () => {
//         router('signupPage')
//       },
//       backToChat: () => {
//         router('chatPage')
//       },
//     },
//   },
// }
// function submitFunc(event: PointerEvent) {
//   event.preventDefault()
//   const isValid = validate.submit()
//   if (isValid) {
//     router('chatPage')
//   }
// }
document.addEventListener('DOMContentLoaded', async () => {
  registerComponent(Button, 'Button')
  registerComponent(Input, 'Input')
  registerComponent(Chat, 'Chat')
  registerComponent(ChatMessage, 'ChatMessage')

  try {
    await AuthController.getUserInfo()
    // Router.go('/messenger')
  } catch (e) {
    console.log(e, 'error getUserInfo')
    Router.go('/signin')
  }

  Router.use('/messenger', ChatPage)
    .use('/signin', SigninPage)
    .use('/signup', SignupPage)
    .use('/errorPage', ErrorPage)
    .use('/settings', SettingsPage)
    .start()
  // Router.go('/settings')
  Validation.activate()
})
