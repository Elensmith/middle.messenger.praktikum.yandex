import ChatHeader from './chat-header'
import { withStore } from '../../utils/store/withStore'

const withUser = withStore((state) => ({ props: state.currentChat }))

export default withUser(ChatHeader)
