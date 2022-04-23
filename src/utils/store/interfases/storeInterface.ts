export interface User {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

interface UserInChat {
  first_name: string
  second_name: string
  avatar: string
  email: string
  login: string
  phone: string
}

export interface Chats {
  id: number
  title: string
  avatar: string | null
  unread_count: number
  last_message: {
    user: UserInChat
    time: string
    content: string
  } | null
}

export interface ChatToken {
  token: string
}

export interface ChatMessage {
  content: string
  type: string
  time: string
  user_id: number
  id: number
}

export interface ErrorMessage {
  reason: string
}
