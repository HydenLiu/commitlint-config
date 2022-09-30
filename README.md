# 👷 git commit lint
 
## use
### commit lint
* init
```bash
pnpm add @commitlint/cli @commitlint/config-conventional --save-dev

echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```
* test
```bash
echo "add commit lint" | npx commitlint  # found 2 problems, 0 warnings

echo "feat: add commit lint" | npx commitlint # success
```

### husky
* init
```bash
pnpm add husky --save-dev
npx husky install 
npx husky add .husky/commit-msg
```
```bash
# .husky/commit-msg

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx eslint src/**
npx --no-install commitlint --edit $1
```
* test
```bash
git commit -m "test" # error, You can skip the check with `-no-verify`
```

### commitizen
* init
```bash
pnpm add commitizen commitlint-config-cz conventional-changelog conventional-changelog-cli cz-customizable --save-dev
npx commitizen init cz-conventional-changelog --yarn --dev --exact
```
* test
```bash
git cz # use commitizen
```

## Usage
* `pnpm run commit` Submit the code and write Message
* `pnpm run version` Generating version logs
