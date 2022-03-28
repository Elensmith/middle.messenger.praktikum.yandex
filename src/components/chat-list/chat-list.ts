import Block from '../../utils/mainDOM/Block'
import tmpl from './chat-list.tmpl'

interface ChatListProps {
  chats?: Record<string, unknown>
}
export default class ChatList extends Block {
  constructor(props: ChatListProps) {
    console.log(props, 'props')
    super({ ...props })
  }

  render(): string {
    return tmpl
  }
}
