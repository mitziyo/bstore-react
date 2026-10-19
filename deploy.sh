#!/bin/bash

# PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm i yarn -g
yarn global add serve
yarn
yarn run build
pm2 delete BSTORE-REACT 2>/dev/null
pm2 start "$(yarn global dir)/node_modules/serve/build/main.js" --name BSTORE-REACT -- -s dist -l 5055

