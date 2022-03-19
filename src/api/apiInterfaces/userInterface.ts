export interface UserEditProfile {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
}

export interface UserEditPassword {
  oldPassword: string
  newPassword: string
}
