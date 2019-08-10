<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
          <slot v-if="!enableHtml"></slot>
          <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
          {{closeButton.text}}
        </span>
    </div>
</template>
<script>
import { relative } from 'path';
  //构造组件的选项
export default {
    name: 'GuluToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      },
      autoCloseDelay:{
        type: Number,
        default: 50
      },
      closeButton:{
        type: Object, //对象的值只能用函数return,这是组件的复用性问题
        default: () => {
          return {
          text: '关闭',callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    // created(){
    //   console.log(this.closeButton)
    // },测试debug用的
    mounted(){
      this.updateStyles()
      this.execAutoClose()
    },
    computed: {
      toastClasses () {
        return {
          [`positing-${this.position}`]: true
        }
      }
    },
    methods:{
      updateStyles(){
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close(){
        this.$el.remove() //元素移除
        this.$destroy() //组件自毁
      },
      log () {
        console.log('测试')
      },
      onClickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback(this) //this === toast 实例
        }
      }
    }
}
</script>
<style scoped lang="less">
  @font-size: 14px;
  @toast-min-height: 40px;
  @toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: @font-size; min-height: @toast-min-height; line-height: 1.8;
    position: fixed; display: flex;
    color: white; align-items: center; background: @toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    left: 50%;
    .message {
    padding: 8px 0;
    }
    .close {
    padding-left: 16px;
    flex-shrink: 0;
    }
    .line{
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
    }
    &.position-top{
      top: 0;
      transform: translateX(-50%);
    }
    &.position-bottom{
      bottom: 0;
      transform: translateX(-50%);
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>

