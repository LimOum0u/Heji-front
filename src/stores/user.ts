import { defineStore } from 'pinia'
import { LoginRequestData, UserInfoResponseData } from 'src/api/user/types/user'
import { getUserInfoApi, loginApi } from 'src/api/user/user'

interface userState{
  userInfo: UserInfoResponseData
  token: string,
  selectProjectId: string,
  permits: string[]
}

export const useUserStore = defineStore('userStore', {
  state: (): userState => ({
    userInfo: {
        avatar: '',
        delFlag: '0',
        password: '',
        remark: '',
        status: '',
        userId: 0,
        username: '',
    },

    token: '',
    selectProjectId: '',
    permits: [],
  }),
  getters: {
    getSelectProjectId(): string {
      if (this.selectProjectId === '') {
        this.selectProjectId = window.localStorage.getItem('selectProjectId') || ''
      }
      return this.selectProjectId
    },
    localToken(): string {
      let token = ''
      if (this.token) {
        token = this.token
      } else {
        token = window.localStorage.getItem('token') || ''
        this.token = token
      }
      return token
    },
  },
  actions: {
    setRoles(value: string[]) {
      this.permits = value
    },
    setToken(value: string) {
      this.token = value
      window.localStorage.setItem('token', value)
    },
    async login(data: LoginRequestData) {
      return loginApi(data).then(res => {
        console.log(res)
        this.setToken(res.data.token)
        return res
      })
    },
    setSelectProjectId(value: string) {
      this.selectProjectId = value
      window.localStorage.setItem('selectProjectId', value)
    },
    async getUserInfo() {
      const { data } = await getUserInfoApi()
      this.userInfo = data
    },
  },
  // /** 获取用户详情 */
  // const getInfo = async() => {
  //     const { data } = await getUserInfoApi()
  //     username.value = data.data.username
  //     // 验证返回的 roles 是否为一个非空数组，否则塞入一个没有任何作用的默认角色，防止路由守卫逻辑进入无限循环
  //     // roles.value = data.roles?.length > 0 ? data.roles : routeSettings.defaultRoles
  // }
  // /** 切换角色 */
  // const changeRoles = async(role: string) => {
  //     const newToken = 'token-' + role
  //     token.value = newToken
  //     setToken(newToken)
  //     await getInfo()
  // }
  // /** 登出 */
  // const logout = () => {
  //     removeToken()
  //     token.value = ''
  //     roles.value = []
  //
  // }
  // /** 重置 Token */
  // const resetToken = () => {
  //     removeToken()
  //     token.value = ''
  //     roles.value = []
  // }
  // const setProject = (projectId: string) => {
  //     selectProjectId.value = projectId
  // }
})

/** 在 setup 外使用 */
// export function useUserStoreHook() {
//   return useUserStore(store)
// }
