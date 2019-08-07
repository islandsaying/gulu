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

//   $class: col-;
//   @for $n from 1 through 24 {
//     &.#{$class}#{$n} {
//       width: ($n / 24) * 100%;
//     }
//   }
//   @class: col-;
//   .col-loop (@i) when (@i > 0){
//       &.{@class}-@{i} {
//           width: (@i / 24) * 100%;
//       }
//       .col-loop(@i - 1);
//   }
// }
// .generate-columns(4);

// .generate-columns(@n, @i: 1) when (@i =< @n) {
//   .column-@{i} {
//     width: (@i * 100% / @n);
//   }
//   .generate-columns(@n, (@i + 1));
// }
</style> 