# Readme

- 一个简单的模拟请假界面的 web 程序，用来锻炼 CSS 技能以及学习 Angular 开发。
- 使用了部分 PWA 的功能。

## 截图

![示例图片](./example.png)

## 项目构建

需要 node ~~以及 go ~~环境。

1. 把项目克隆下来。
2. 执行 `npm i`。
3. 执行 `npm run build`，构建的静态资源会出现在 _docs_ 目录中。
4. 部署到服务器或者 github-pages，使用 pwa 需要 https。

## 配置

1. 个人信息配置在 `src\assets\users.json` 中，修改后需要重新部署，或者直接修改静态资源文件，但下次构建时会被覆盖。
2. 部署在子目录下需要修改 _angular.json_ 中的：
    1. "baseHref": "subdir"
    2. "deployUrl": "subdir"
