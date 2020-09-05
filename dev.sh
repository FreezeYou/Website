#!/bin/sh

cd $(cd `dirname $0`; pwd)
./importTranslation.py
npx vuepress dev docs
