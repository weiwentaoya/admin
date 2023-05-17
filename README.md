# Vue 3 + TypeScript + Vite

### 2.2 项目配置

#### 一、eslint 配置

**eslint 中文官网:http://eslint.cn/**
配置文件: `.eslint.cjs`
忽略文件: `.eslintignore`

#### 二、配置 prettier

规则: `.prettierrc.json `
忽略文件: `.prettierignore `
**通过 pnpm run lint 去检测语法，如果出现不规范格式,通过 pnpm run fix 修改**

#### 三、配置 stylelint

[stylelint](https://stylelint.io/)为 css 的 lint 工具。
配置文件: `.stylelintrc.cjs`
忽略文件: `.stylelintignore `
**官网:https://stylelint.bootcss.com/**

**运行`pnpm run format`的时候，会把代码 格式化**

#### 四、配置 husky
