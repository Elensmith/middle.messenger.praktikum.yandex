import ChatList from './chat-list'
import { withStore } from '../../utils/store/withStore'

const withUser = withStore((state) => ({ chats: state.chats }))

export default withUser(ChatList)
