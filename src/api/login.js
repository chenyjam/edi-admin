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
    url: '/sys/vs/public/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/sys/users/getLoginUser',
    method: 'get'
  })
}

export function registerVisitor() {
  return request({
    url: '/sys/registerVisitor',
    method: 'get'
  })
}

