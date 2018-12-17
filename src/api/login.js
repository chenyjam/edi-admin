import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/vs/public/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function registerVisitor() {
  return request({
    url: '/sys/registerVisitor',
    method: 'get'
  })
}

