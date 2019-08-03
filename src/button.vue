<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <!-- slot 本身不能加class -->
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props:['icon','iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    // if (value !== 'left' && value !== 'right') {
                    //     return false
                    // }else {
                    //     return true
                    // }
                    // 简化后: return value !== 'left' && value !== 'right' ? false : true;
                    // 再次简化后: return !(value !== 'left' && value !== 'right')  
                    return value === 'left' || value === 'right'  // 终极版本
            }
        }
}
</script>

<style lang="less">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;  // 解决inline引起的上下不对齐

    &:hover { border-color: var(--border-color-hover); }
    &:active { background-color:  var(--button-active-bg); }
    &:focus { outline: none; }

    > .icon { order: 1; margin-right: .1em;}
    > .content { order : 2; }
    
    &.icon-right{
    > .content { order : 1; }
    > .icon { order: 2; margin-right: 0; margin-left: .1em;} 
        }
    }
</style>
