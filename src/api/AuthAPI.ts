import BaseAPI from './BaseAPI'
import { SignupData, SigninData } from './apiInterfaces/authInterface'

class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth')
  }

  signUp(data: SignupData): Promise<unknown> {
    console.log(data, 'data')
    return this.http.post('/signup', data)
  }

  signIn(data: SigninData): Promise<unknown> {
    return this.http.post('/signin', data)
  }

  getUserInfo(): Promise<unknown> {
    return this.http.get('/user')
  }

  logout(): Promise<unknown> {
    return this.http.post('/logout')
  }
}

export default new AuthAPI()
