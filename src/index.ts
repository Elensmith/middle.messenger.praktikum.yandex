import Button from './components/button/confirmButton/index'
import Input from './components/input/index'
import Chat from './components/chat/index'
import ChatMessage from './components/chat-message'
import ErrorPage from './pages/error/index'
import ChatPage from './pages/chats/chats'
import SignupPage from './pages/auth/signup'
import SettingsPage from './pages/settings/index'
import SigninPage from './pages/auth/signin'
import registerComponent from './utils/mainDOM/registerComponent'
import router from './utils/router/Router'
import authController from './controllers/AuthController'
import ModalWithInput from './components/modalWindow/modalWithInput/index'
import chatController from './controllers/ChatController'
import ButtonWithIcon from './components/button/buttonWithIcon/index'
import ChatHeader from './components/chat-header/index'
import ChatList from './components/chat-list/index'
import ChatMessagesComponent from './components/chat-messages-component/index'
import ErrorMessage from './components/form-error-message/index'

document.addEventListener('DOMContentLoaded', async () => {
  registerComponent(Button, 'Button')
  registerComponent(ModalWithInput, 'ModalWithInput')
  registerComponent(Input, 'Input')
  registerComponent(Chat, 'Chat')
  registerComponent(ChatMessage, 'ChatMessage')
  registerComponent(ButtonWithIcon, 'ButtonWithIcon')
  registerComponent(ChatHeader, 'ChatHeader')
  registerComponent(ChatList, 'ChatList')
  registerComponent(ChatMessagesComponent, 'ChatMessagesComponent')
  registerComponent(ErrorMessage, 'ErrorMessage')

  try {
    await authController.getUserInfo()
  } catch (e) {
    router.go('/signin')
  }
  try {
    await chatController.getChats()
  } catch (e) {
    // router.go('/messenger')
  }
  router
    .use('/', ChatPage)
    .use('/settings', SettingsPage)
    .use('/messenger', ChatPage)
    .use('/signin', SigninPage)
    .use('/signup', SignupPage)
    .use('/errorPage', ErrorPage)
    .start()
})
