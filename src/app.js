import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-footer',Footer)
Vue.component('g-content',Content)
Vue.component('g-toast',Toast)
Vue.use(plugin)


import createElement from 'vue'

const h = createElement

new Vue({
  el: "#app",
  data: {

    message: 'hi',
  },
  created(){
    this.$toast('文字',{
      position: 'middle',
      enableHtml: false,
      closeButton: {
        text: '已充值',
        callback (){
          console.log('他说已经充值智商了')
        }
      },
      autoClose: false,
      autoCloseDelay: 3
    })
  },
  methods:{
    showToast(){

    }
  }
  //以下为测试暂用
  // created(){
  //   setTimeout(()=>{
  //     let event = new Event('change');
  //     let inputElement = this.$el.querySelector('input')
  //     inputElement.dispatchEvent(event)
  //     console.log('hi')
  //   },3000)
  // },
})

