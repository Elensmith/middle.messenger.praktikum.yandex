import renderSignup from './pages/auth/signup/index'
import renderChats from './pages/chat/index'
import renderSignin from './pages/auth/signin/index'
import renderSettings from './pages/settings/index'
import renderError from './pages/error/index'

const rootEl = document.getElementById('root')

const dict = {
  signup: renderSignup,
  signin: renderSignin,
  chats: renderChats,
  settings: renderSettings,
  500: renderError,
  404: renderError,
}
function router(path) {
  dict[path](rootEl, router)
}
router('404')
