<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "GuluSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>

<style lang="less" scoped>
.layout {
  height: 80vh;
  display: flex;
  flex-grow: 1;
  color: white;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
