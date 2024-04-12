## 项目规范

pnpm install -D husky @commitlint/config-conventional @commitlint/cli

npx husky-init
添加 pnpm lint

echo "npx --no-install commitlint --edit "$1"" > .husky/commit-msg

## 项目插件

pnpm install -D @unocss/vite @unocss/preset-uno @unocss/transformer-directives sass vite-plugin-progress vite-plugin-compression vite-plugin-mock@2.9.8 unplugin-vue-components unplugin-auto-import vite-plugin-svg-icons vite-plugin-style-import consola rollup-plugin-visualizer @types/mockjs @types/nprogress

pnpm install @element-plus/icons-vue element-plus @vueuse/core axios dayjs echarts mockjs nprogress vue-i18n
