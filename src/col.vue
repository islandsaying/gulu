<template>
  <div
    class="col"
    :class="[`span && col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}"
  >
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
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
  }
};
</script>
<style scoped lang="less">
.col {
  width: 50%;

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
