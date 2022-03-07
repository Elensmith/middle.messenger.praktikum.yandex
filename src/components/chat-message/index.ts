import Block from '../utils/Block'
import tmpl from './chat-message.tmpl'

interface ChatMessageProps {
  messageContent: string
  arrivedTime: string
  image: string
  className?: string
  // events?: {
  //   click?: () => void
  // }
  onClick?: () => void
}
export default class ChatMessage extends Block {
  constructor({ ...props }: ChatMessageProps) {
    super(props)
  }

  render(): string {
    return tmpl
  }
}
