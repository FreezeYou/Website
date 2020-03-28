#!/bin/sh

cd $(cd `dirname $0`; pwd)
npx vuepress dev docs
