#!/bin/sh

# abort on errors
set -e

# build
cd $(cd `dirname $0`; pwd)
npx vuepress build docs

# navigate into the build output directory
cd docs/.vuepress/dist

git add -A
git commit -m 'Deploy'

git push git@github.com:FreezeYou/Website.git master:gh-pages

