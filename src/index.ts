import Button from './components/button/index'
import Input from './components/input/index'
import Chat from './components/chat/index'
import ChatMessage from './components/chat-message'
import ErrorPage from './pages/error/index'
import ChatPage from './pages/chats'
import SignupPage from './pages/auth/signup'
import SettingsPage from './pages/settings'
import SigninPage from './pages/auth/signin'
import registerComponent from './utils/mainDOM/registerComponent'
import router from './utils/router/Router'
import authController from './controllers/AuthController'

document.addEventListener('DOMContentLoaded', async () => {
  registerComponent(Button, 'Button')
  registerComponent(Input, 'Input')
  registerComponent(Chat, 'Chat')
  registerComponent(ChatMessage, 'ChatMessage')

  try {
    await authController.getUserInfo()
  } catch (e) {
    router.go('/signin')
  }

  router
    .use('/messenger', ChatPage)
    .use('/signin', SigninPage)
    .use('/signup', SignupPage)
    .use('/errorPage', ErrorPage)
    .use('/settings', SettingsPage)
    .start()
})
