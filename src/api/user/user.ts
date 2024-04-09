
import { useGet, usePost } from 'src/utils/request'
import { LoginRequestData, LoginResponseData, UserInfoResponseData } from 'src/api/user/types/user'

export function getUserInfoApi() {
  return useGet<UserInfoResponseData>('/user/info')
}

export function loginApi(params: LoginRequestData) {
  return usePost<LoginResponseData>('/user/login', params)
}

export function getUserListApi(params: { username: string }) {
  return useGet('/user', params)
}
