## 东家组件介绍

`src` 下每一个目录是一个业务组件，例如
- `demo1`： one example

## 如何开发
假若你期望写一个 `demo1` 的组件该怎么做？

1. 在 `src` 里建立一个 `demo1` 的目录。
此目录可能包含这三个文件：`index.js`, `app.vue`, `README.md`。

2. cooding.

3. 你的组件完成后，在 `example` 文件夹里为你的组件写下一个例子，具体做法可看当前的实现。

4. `entry.js` 里添加一对值。其中 `key` 是你的组件目录名称，`value` 是你想要在 `build` 时这个组件打包出来的 `library` 名字。

5. `npm run dev` 会取 `entry.js` 里的所有的 `key` 作为每一个 `entry`。然后会根据 `entry.template.html` 为每一个 `entry` 生成一个相对应的 `html`。

## 依赖
 - Vue 2.x

## Develop

默认提供了 watching 和 hot reload

```shell
$ npm run dev
```
