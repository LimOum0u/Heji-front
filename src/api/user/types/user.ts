export interface UserInfoResponseData {
  avatar: string;
  delFlag: string;
  password: string;
  remark: string;
  status: string;
  userId: number;
  username: string;
}

export interface User {
  avatar?: string;
  delFlag?: string;
  email?: string;
  password?: string;
  phonenumber?: string;
  role?: Role[];
  sex?: string;
  status?: string;
  userId?: number;
  username?: string;
  userType?: string;
}

export interface Role {
  roleCode: string;
  roleId: number;
  roleName: string;
}
// 登录
export interface LoginRequestData {
  /** admin 或 editor */
  username: string
  /** 密码 */
  password: string
}

export type LoginResponseData = {
  permissions: null;
  token: string;
  userInfo: UserInfoResponseData;
}
