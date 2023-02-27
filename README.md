## 技术结构

- Vite4
- Vue3
- TypeScript
- Vue Router
- Pinia
- axios

## 项目搭建日志

1. 配置代码校验
   - 安装依赖
     - eslint
     - eslint-plugin-vue
     - @typescript-eslint/parser
     - @typescript-eslint/eslint-plugin
     - prettier
     - eslint-config-prettier
     - eslint-plugin-prettier
     - eslint-config-airbnb-base
     - eslint-plugin-import
   - 添加eslint配置文件.eslintrc.cjs
   - 添加编译器配置文件.editorconfig
   - 添加代码格式配置文件.prettierrc
2. 配置husky + lint-staged + commitlint
   - 全局安装eslint yarn i -g eslint
   - 控制台执行 npx husky-init && yarn
   - 安装lint-staged yarn add lint-staged -D
   - package.json中添加lint-staged配置选项
   - 修改.husky/pre-commit文件中的npm run test 为 yarn lint-staged
   - 安装commitlint yarn add @commitlint/cli @commitlint/config-conventional -D
   - 配置命令yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'，此时.husky文件夹下会多出一个commit-msg文件
   - 修改文件最后一行为yarn commitlint --edit $1
   - 添加commitlint.config.js配置文件
3. 配置路由
   - yarn add vue-router@4
   - 配置路由文件 src/router/index.ts
   - 注册到vue实例 main.ts use(router)
   - 安装setup命名增加插件yarn add vite-plugin-vue-setup-extend -D



# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
