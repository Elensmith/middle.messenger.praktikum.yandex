import ChatPage from './chats'
import { withStore } from '../../utils/store/withStore'

const withChats = withStore((state) => ({ proprrr: state.chats }))

export default withChats(ChatPage)
