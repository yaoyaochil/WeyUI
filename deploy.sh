# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist || exit

git init
git add -A

# 询问用户填写 commit message
read -p "请输入 commit 内容: " commitMessage

# 执行 git commit 命令，并使用用户输入的 commit message
git commit -m "$commitMessage"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/yaoyaochil/WeyUI.git page