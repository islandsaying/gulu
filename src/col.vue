<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div class="col-slot"><slot></slot></div>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
export default {
  name: "GuluCol",
  props: {
    span:{
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad:{type:[Object],validator,},
    narrowPc:{type:[Object],validator,},
    pc:{type:[Object],validator,},
    widePc:{type:[Object],validator,},    
  },
  data() {
    return {
      gutter: 0, //这个gutter只能接受赋值过来,不推荐props
    }
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this
      return [
        span && `col-${span}`, 
        offset && `offset-${offset}`,
        ipad && `col-ipad-${ipad.span}`,
        narrowPc && `col-narrow-pc-${narrowPc.span}`,
        pc && `col-pc-${pc.span}`,
        widePc && `col-wide-pc-${widePc.span}`,
        ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter /2 + 'px',
        paddingRight: this.gutter /2 + 'px',
      }
    }
  }
}
</script>
<style scoped lang="less">
.col-slot {
  border: 1px solid whitesmoke;
  height: 100%;
  background: grey;
}
.col {
  height: 100px;
  
  //phone
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

  @media (min-width: 577px) {
    //ipad
    .generate-columns(24);
    .generate-columns(@n, @i: 1) when (@i =< @n) {
      &.col-ipad-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-columns(@n, (@i + 1));
    }
    .generate-column(24);
    .generate-column(@n, @i: 1) when (@i =< @n) {
      &.offset-ipad-@{i} {
        margin-left: (@i * 100% / @n);
      }
      .generate-column(@n, (@i + 1));
    }
  }
  @media (min-width: 769px) {
    //narrow-pc
    .generate-columns(24);
    .generate-columns(@n, @i: 1) when (@i =< @n) {
      &.col-narrow-pc-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-columns(@n, (@i + 1));
    }
    .generate-column(24);
    .generate-column(@n, @i: 1) when (@i =< @n) {
      &.offset-narrow-pc-@{i} {
        margin-left: (@i * 100% / @n);
      }
      .generate-column(@n, (@i + 1));
    }
  }
  @media (min-width: 993px) {
    //pc
    .generate-columns(24);
    .generate-columns(@n, @i: 1) when (@i =< @n) {
      &.col-pc-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-columns(@n, (@i + 1));
    }
    .generate-column(24);
    .generate-column(@n, @i: 1) when (@i =< @n) {
      &.offset-pc-@{i} {
        margin-left: (@i * 100% / @n);
      }
      .generate-column(@n, (@i + 1));
    }
  }
  @media (min-width: 1201px) {
    //wide-pc
    .generate-columns(24);
    .generate-columns(@n, @i: 1) when (@i =< @n) {
      &.col-wide-pc-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-columns(@n, (@i + 1));
    }
    .generate-column(24);
    .generate-column(@n, @i: 1) when (@i =< @n) {
      &.offset-wide-pc-@{i} {
        margin-left: (@i * 100% / @n);
      }
      .generate-column(@n, (@i + 1));
    }
  }
}
</style> 
