# bootstrap

> [菜鸟教程](https://www.runoob.com/bootstrap/bootstrap-tutorial.html)

## 概念

- 背景：
  - 利用bootstrap加快开发响应式网站的速度
- 技术：
  - 前端框架，无需自己编码

## 组件使用

- 先引用jq,再引入bootstrap.min.js

## 栅格系统

### 概念

- bootstrap 自定义的一套用于快速构建响应式布局的一系列规则。bootstrap预定义很多跟布局相关的class,可以用来快速搭建响应式布局

### 原理

- bootstrap利用行和列来对内容进行布局
- 根据屏幕宽度不同，自动将一行分成12列并被内容消化。不同宽度的屏幕下，每一列的宽度都不一样，以此来达到响应式布局的效果

### 使用步骤

- 给装内容的最大盒子设置 `.container` 或 `.container-fluid` ,bootstrap会将设置该class的盒子的宽度划分为12列
- 将`.row`盒子作为 `.container`容器的直接子元素
- 内容盒子作为`.row`的直接子元素
- 设备范围（参考菜鸟教程）

### 总结

- 栅格系统的响应式原理是
  - 当设备宽度 处于不同范围下，指定每个`内容盒子`所占的列数，以此来实现响应式
- bootstrap会把class为`.container`或`container-fluid`的盒子宽度作为一行的宽度，并分为12列
- 盒子的html嵌套关系：`.container` > `.row` > `内容盒子`

## 插件

- 轮播图
- 模态框