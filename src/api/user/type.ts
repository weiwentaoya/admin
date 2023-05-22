export interface loginFormData {
  username: string
  password: string
}
// interface loginDataType {
//   token: string
// }
export interface loginResponseData {
  // username: string
  data: string
  message: string
  code: number
  ok: boolean
}

// 用户信息类型
interface checkUserType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: checkUserType
}

export interface userInfoReponseData {
  code: number
  data: user
}
