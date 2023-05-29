export interface loginFormData {
  username: string
  password: string
}
// interface loginDataType {
//   token: string
// }
export interface responseData {
  message: string
  code: number
  ok: boolean
}

export interface loginResponseData extends responseData {
  // username: string
  data: string
}

// 用户信息类型
export interface checkUserType {
  avatar?: string
  buttons?: string[]
  name?: string
  roles?: string[]
  routes?: string[]
}

export interface userInfoReponseData extends responseData {
  data: checkUserType
}
export interface menuChildItemType {
  toCode: string
  code: string
  name: string
}
export interface menuChildType {
  buttons: menuChildItemType[]
  code: string
  name: string
}
export interface menuItemType {
  children: menuChildType[]
  code: string
  name: string
}
export interface menuType {
  menuList?: menuItemType[]
  permissionList?: string[]
}
export interface getMenuReponseData extends responseData {
  data: menuType
}
