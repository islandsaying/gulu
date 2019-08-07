# 轱辘 - 一个vue UI组件

[![Build Status](https://travis-ci.org/islandsaying/gulu.svg?branch=master)](https://travis-ci.org/islandsaying/gulu)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架, 希望对你有用.

## 开始使用

1. 添加 CSS 样式

使用本框架前,请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

2. 安装 gulu
```
npm i --save gulu / yarn add gulu-islandsaying
```

3. 引入 gulu
```
import {Button, ButtonGroup, Icon} from 'gulu-islandsaying'
import 'gulu-islandsaying/dist/index.css'

export default {
name: 'app',
components: {
    HelloWorld,
    'g-button': Button,
    'g-icon': Icon
    }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码