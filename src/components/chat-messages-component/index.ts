import ChatMessagesComponent from './chat-messages-component'
import { withStore } from '../../utils/store/withStore'

const withChatMessages = withStore((state) => ({
  chatMessages: state.messages,
}))

export default withChatMessages(ChatMessagesComponent)
