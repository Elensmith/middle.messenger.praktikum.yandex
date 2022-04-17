import Block from '../../utils/mainDOM/Block'
import tmpl from './chat-messages-component.tmpl'

interface ChatMessagesProps {
  chatMessages?: Record<string, unknown>
}
export default class ChatMessagesComponent extends Block {
  constructor(props: ChatMessagesProps) {
    super({ ...props })
  }

  render(): string {
    return tmpl
  }
}
