<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    }
  }
};
</script>
<style scoped lang="less">
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;

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
