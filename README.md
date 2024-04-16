## 项目规范

pnpm install -D husky @commitlint/config-conventional @commitlint/cli lint-staged cz-git czg

npx husky-init
添加 pnpm lint

echo "npx --no-install commitlint --edit "$1"" > .husky/commit-msg

pnpm install -D sass stylelint stylelint-config-standard-scss stylelint-config-recess-order stylelint-config-html stylelint-config-recommended-vue

## 项目插件

pnpm install -D @unocss/vite @unocss/preset-uno @unocss/reset @unocss/transformer-directives vite-plugin-progress vite-plugin-compression vite-plugin-mock@2.9.8 unplugin-vue-components unplugin-auto-import vite-plugin-svg-icons vite-plugin-style-import consola rollup-plugin-visualizer @types/mockjs @types/nprogress

pnpm install @element-plus/icons-vue element-plus @vueuse/core axios dayjs echarts mockjs nprogress vue-i18n pinia-plugin-persistedstate
