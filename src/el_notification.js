const notificationOptions = {
  title: '标题',
  message: '内容 string | vnode',
  // success | warning | info | error
  // type: '',
  // 显示时间, 毫秒。设为 0 则不会自动关闭
  // duration: 4500,
  // top-right | top-left | bottom-right | bottom-left
  // position: 'top-right',
  // showClose: true,
}

this.$notify(notificationOptions)

import { Notification } from 'element-ui'

const notificationOptions = {
  title: '标题',
  message: '内容 string | vnode',
  // success | warning | info | error
  // type: '',
  // 显示时间, 毫秒。设为 0 则不会自动关闭
  // duration: 4500,
  // top-right | top-left | bottom-right | bottom-left
  // position: 'top-right',
  // showClose: true,
}

const notification = Notification(options)
// notification.close()
