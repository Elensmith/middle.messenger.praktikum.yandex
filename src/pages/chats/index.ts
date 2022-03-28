import ChatPage from './chats'
import { withStore } from '../../utils/store/withStore'

const withChats = withStore((state) => ({ ...state.currentChat }))

export default withChats(ChatPage)
