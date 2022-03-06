import Button from './components/button/index'
import Input from './components/input/index'
import Chat from './components/chat/index'
import ChatMessage from './components/chat-message'
import ErrorPage from './pages/error/index'
import ChatPage from './pages/chats'
import SignupPage from './pages/auth/signup'
import SettingsPage from './pages/settings'
import SigninPage from './pages/auth/signin'
import renderDOM from './components/utils/renderDOM'
import registerComponent from './components/utils/registerComponent'
// import user from './pages/settings/userData'
import Validation from './components/utils/Validation'

registerComponent(Button, 'Button')
registerComponent(Input, 'Input')
registerComponent(Chat, 'Chat')
registerComponent(ChatMessage, 'ChatMessage')

const validate = new Validation()

function router(page: string) {
  // eslint-disable-next-line no-use-before-define
  const PageInDict = dictPages[page].type
  // eslint-disable-next-line no-use-before-define
  const readyPage = new PageInDict({ ...dictPages[page].props })
  renderDOM('#root', readyPage)
  validate.activate()
}

// function addMessage() {
//   const isValid = validate.submit()
//   if (isValid) {
//     const message = 'wedewdew'
//     const newMessage = `{{{ChatMessage className="chat-message_right" arrivedTime="10:45" messageContent="${message}"}}}`
//     document.querySelector('.messages').appendChild(newMessage)
//   }
// }

const dictPages: any = {
  chatPage: {
    type: ChatPage,
    props: {
      avatar: 'string',
      userName: 'string',
      userAuthor: 'string',
      message: 'string',
      messageArrivalTime: 'string',
      newMessages: 11,
      selectedUserName: 'Ira',
      selectedUserAvatar:
        'https://kulturakumertau.ru/wp-content/uploads/3/f/4/3f47f7753e4c02145f5b3c66983ee127.jpeg',
      onClick: () => {
        router('settingsPage')
      },
      // sendMessage: () => {
      //   addMessage()
      // },
    },
  },
  errorPage: {
    type: ErrorPage,
    props: {
      errorCode: 404,
      errorText: 'Ошибочка вышла',
      onClick: () => {
        router('chatPage')
      },
    },
  },
  signupPage: {
    type: SignupPage,
    props: {
      submitBtn: submitFunc,
      authBtn: () => {
        router('signinPage')
      },
    },
  },
  signinPage: {
    type: SigninPage,
    props: {
      login: () => {
        router('signupPage')
      },
      onClick: submitFunc,
    },
  },
  settingsPage: {
    type: SettingsPage,
    props: {
      // user,
      userName: 'Иван',
      isNotEditable: true,
      logout: () => {
        router('signupPage')
      },
      backToChat: () => {
        router('chatPage')
      },
    },
  },
}
function submitFunc(event: PointerEvent) {
  event.preventDefault()
  const isValid = validate.submit()
  if (isValid) {
    router('chatPage')
  }
}
document.addEventListener('DOMContentLoaded', () => {
  router('signinPage')
})
