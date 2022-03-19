import Block from '../../utils/Block'
import tmpl from './chat.tmpl'

interface ChatProps {
  avatar: string
  userName: string
  userAuthor: string
  message: string
  messageArrivalTime: string
  newMessages: number
  selectedUserName: string
  selectedUserAvatar: string
}
export default class Chat extends Block {
  constructor({ ...props }: ChatProps) {
    super(props)
  }

  render(): string {
    return tmpl
  }
}
