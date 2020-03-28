#!/bin/sh

cd $(cd `dirname $0`; pwd)
git status
git add .
git commit -m Update
git push
