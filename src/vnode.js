const h = this.$createElement
const vnode = h('p', null, [
  h('span', null, '内容可以是 '),
  h(
    'i',
    {
      style: 'color: teal',
    },
    'VNode',
  ),
])
