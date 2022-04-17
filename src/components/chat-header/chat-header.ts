import Block from '../../utils/mainDOM/Block'
import tmpl from './chat-header.tmpl'

interface ChatHeaderProps {
  selectedUserAvatar?: string
  selectedUserName?: string
}
export default class ChatHeader extends Block {
  constructor(props: ChatHeaderProps) {
    console.log(props, 'props')
    super({ ...props })
  }

  render(): string {
    return tmpl
  }
}
