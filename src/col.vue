<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0   //这个gutter只能接受赋值过来,不推荐props
    };
  },
  computed: {
    colClass () {
      let {span, offset} = this
      return [span && `col-${span}`,offset && `offset-${offset}`]
    },
    colStyle () {
      return {
        //gutter会变化,所以不能放在静态data里面,要放入计算属性
        paddingLeft: this.gutter/2+'px', 
        paddingRight: this.gutter/2+'px'
      }
    }
  }
};
</script>
<style scoped lang="less">
.col {


  .generate-columns(24);
  .generate-columns(@n, @i: 1) when (@i =< @n) {
    &.col-@{i} {
      width: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i + 1));
  }
  .generate-column(24);
  .generate-column(@n, @i: 1) when (@i =< @n) {
    &.offset-@{i} {
      margin-left: (@i * 100% / @n);
    }
    .generate-column(@n, (@i + 1));
  }
}
</style> 
