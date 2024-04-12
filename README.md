pnpm install -D husky @commitlint/config-conventional @commitlint/cli

npx husky-init
添加 pnpm lint

echo "npx --no-install commitlint --edit "$1"" > .husky/commit-msg
