import Block from '../../utils/mainDOM/Block'
import tmpl from './chat.tmpl'
import store from '../../utils/store/Store'
import chatController from '../../controllers/ChatController'

function clickOnChatHandler(event: PointerEvent) {
  const parent = event.target.closest('.chat')
  const noSelectBlock = document.getElementById('messageNoSelect')
  const allChats = document.querySelectorAll('.chat')
  const selected = document.getElementById('chatInfo')

  Array.from(allChats).forEach((chat) => {
    chat.removeAttribute('style')
  })

  const currentChat = store
    .getState()
    .chats.find((chat) => chat.id === Number(parent.id))
  store.set('currentChat', currentChat)
  if (noSelectBlock !== null && selected !== null) {
    if (parent.hasAttribute('style')) {
      noSelectBlock.setAttribute('style', 'display: block')
      selected.setAttribute('style', 'display: none')
      parent.removeAttribute('style')
    } else {
      store.set('messages', [])
      chatController.getChatToken()
      noSelectBlock.setAttribute('style', 'display: none')
      selected.setAttribute('style', 'display: flex')
      parent.setAttribute('style', 'background-color: #d2eef3')
    }
  }
}
interface ChatProps {
  avatar: string
  userName: string
  userAuthor: string
  message: string
  messageArrivalTime: string
  newMessages: number
  selectedUserName: string
  id: number
  selectedUserAvatar: string
  clickOnChat?: () => void
}
export default class Chat extends Block {
  constructor(props: ChatProps) {
    super({
      ...props,
      events: {
        click: (event: PointerEvent) => {
          clickOnChatHandler(event)
        },
      },
    })
  }

  render(): string {
    return tmpl
  }
}
