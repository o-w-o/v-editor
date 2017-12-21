# VS Cdoe for VueJS developer

## 插件和配置

- __Vue Development Extension Pack__

  This pack has (包含以下插件)

  - Vetur
  - vscode-icons - for Vue icon
  - Git Lens
  - Git Blame
  - Git History
  - Git Project Manager
  - Sublime Text Keymap
  - Auto Close Tag
  - Bookmarks
  - CodeMetrics
  - Debugger for Chrome
  - EditorConfig
  - JavaScript Snippet Pack
  - npm
  - npm Intellisense
  - npm Path Intellisense
  - Quokka
  - Rest Client
  - Todo Highlight
  - Bracket Pair Colorizer

- __ESLint__

  [Github Organization](https://github.com/eslint)

  [Officials Website](https://eslint.org/)

- __Prettier__

  [Github Organization](https://github.com/prettier)

  [Officials Website](https://prettier.io/)

  配置文件：`.prettierrc`

  ```JSON
  {
    "printWidth": 81,
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "none"
  }
  ```

- __ESLint && Pretter__

- __Git Commit__

- __Yarn__

  使用 Yarn 包管理工具

- Stylus Css 预处理器 支持

  - __language-stylus__
  - __stylus-supremacy__





## 用户设置配置

```JSON

{
  "editor.fontLigatures": true,
  "editor.fontFamily":
    "Fira Code, Monofur, Monaco, 黑体, 文泉驿微米黑",
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressUpdateNotice": false,
    "suppressWelcomeNotice": true
  },
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "workbench.panel.location": "bottom",
  "eslint.validate": ["javascript", "html", "vue"],
  "eslint.autoFixOnSave": true,
  "editor.fontSize": 15
}

```

## 字体

Font ：[__Fira Code__](https://github.com/tonsky/FiraCode)

相关配置

```JSON

"editor.fontLigatures": true,
"editor.fontFamily": "Fira Code, ...",

```
