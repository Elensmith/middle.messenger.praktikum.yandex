import Block from '../../components/utils/Block'
import tmpl from './chats.tmpl'

interface ChatProps {
  onClick?: () => void
  sendMessage?: () => void
}
export default class ChatPage extends Block {
  constructor({ ...props }: ChatProps) {
    super(props)
  }

  render() {
    return tmpl
  }
}
