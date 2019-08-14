<template>
    <div>
        <g-layout>
            <g-header></g-header>
            <g-content></g-content>
            <g-footer></g-footer>
        </g-layout>
        <br />
        <g-layout>
            <g-sider></g-sider>
            <g-layout>
                <g-header></g-header>
                <g-content></g-content>
                <g-footer></g-footer>
            </g-layout>
        </g-layout>
    </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Sider from "../../../src/sider";
import Footer from "../../../src/footer";
export default {
    name: "",
    components: {
        "g-layout": Layout,
        "g-header": Header,
        "g-content": Content,
        "g-sider": Sider,
        "g-footer": Footer
    }
};
</script>

<style lang='less' scoped>
</style>