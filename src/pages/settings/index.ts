import tmpl from './settings.tmpl'
import Block from '../../components/utils/Block'

interface SettingsProps {
  user: any
  userName: string
  isNotEditable: boolean
}
export default class SettingsPage extends Block {
  constructor(props: SettingsProps) {
    super({ ...props, onClick: () => console.log('ddddd') })
  }

  render() {
    return tmpl
  }
}
// const template = Handlebars.compile(tmpl)
// const userName = 'Иван'
// const isNotEditable = true
// function renderSettings(e: HTMLElement, router: (a: string) => void) {
//   e.innerHTML = template({ user, userName, isNotEditable })

//   const backToChatBtn: HTMLElement | null =
//     document.getElementById('backToChatBtn')
//   if (backToChatBtn !== null) {
//     backToChatBtn.addEventListener('click', () => {
//       router('chats')
//     })
//   }

//   const logOutBtn: HTMLElement | null = document.getElementById('logOutBtn')
//   if (logOutBtn !== null) {
//     logOutBtn.addEventListener('click', () => {
//       router('signup')
//     })
//   }
//   const editUserInfo: HTMLElement | null =
//     document.getElementById('editUserInfo')
//   if (editUserInfo !== null) {
//     editUserInfo.addEventListener('click', () => {
//       // e.innerHTML = template({ user, userName })
//     })
//   }
// }

// export default renderSettings
