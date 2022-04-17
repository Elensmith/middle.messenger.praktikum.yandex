import Block from '../../utils/mainDOM/Block'
import tmpl from './chat-message.tmpl'
import store from '../../utils/store/Store'

interface ChatMessageProps {
  messageContent: string
  arrivedTime: string
  image: string
  className?: string
  userId?: number
  // events?: {
  //   click?: () => void
  // }
  onClick?: () => void
}
export default class ChatMessage extends Block {
  constructor({ ...props }: ChatMessageProps) {
    if (props !== undefined) {
      const currUser = store.getState().currentUser.id
      props.className =
        props.userId === currUser ? 'chat-message_right' : 'chat-message'
      const date = new Date(props.arrivedTime)
      props.arrivedTime = `${date.getHours()}: ${date.getMinutes()}`
    }
    super(props)
  }

  render(): string {
    return tmpl
  }
}
