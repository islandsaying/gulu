<template>
    <div class="toast-wrapper" :class="toastClasses">
      <div class="toast" ref="toast">
        <div class="message">
          <slot v-if="!enableHtml"></slot>
          <div v-else v-html="$slots.default[0]"></div>
        </div>
        <span class="line" ref="line"></span>
        <span class="close" v-if="closeButton" @click="onClickClose">
          {{closeButton.text}}
        </span>
      </div>
    </div>
</template>
<script>
// import { relative } from 'path';
  //构造组件的选项
export default {
    name: 'GuluToast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 10,
        validator (value) {
          return value === false || typeof value === 'number'
        }
      },
      closeButton:{
        type: Object, //对象的值只能用函数return,这是组件的复用性问题
        default(){
          return {
          text: '关闭',
          callback: undefined,
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    }, 
    // created(){
    //   console.log(this.closeButton)
    // },测试debug用的
    computed: {
      toastClasses () {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    mounted(){
      this.updateStyles()
      this.execAutoClose()
    },
    methods:{
      updateStyles(){
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      close(){
        this.$el.remove() //元素移除
        this.$emit('close')
        this.$destroy() //组件自毁
      },
      onClickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback() //this === toast 实例
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @font-size: 14px;
  @toast-min-height: 40px;
  @toast-bg: rgba(0, 0, 0, 0.75);
  @toast-duration: .45s;
  .toast-wrapper{
    position: absolute; left: 50%;
    transform: translateX(-50%);
    &.position-top {
      z-index: 99;
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: fade-down @toast-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: fade-up @toast-duration;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  .toast {
    animation: fade-in @toast-duration;
    min-height: @toast-min-height; font-size: @font-size;
    display: flex; align-items:center;justify-content: center; background: @toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5); padding: 0 16px; color:white;
    line-height: 1.8;
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
  }
  @keyframes fade-up {
    0%{opacity: 0; transform: translateY(100%)}
    100%{opacity: 1;transform: translateY(0)}
  }
  @keyframes fade-down {
    0%{opacity: 0; transform: translateY(-100%)}
    100%{opacity: 1;transform: translateY(0)}
  }
  @keyframes fade-in {
    0%{opacity: 0; }
    100%{opacity: 1;}
  }
</style>

