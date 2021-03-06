import { Loading } from 'element-ui'

const loadingOptions = {
  // HTMLElement | string
  target: document.body,
  // string 遮罩背景色
  background: '#000',
  fullscreen: true,
  text: '显示在加载图标下方的加载文案',
  spinner: '自定义加载图标类名',
  customClass: 'Loading 的自定义类名',
}
const loadingInstance = Loading.service(loadingOptions)

this.$nextTick(() => {
  // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close()
})
