#!/bin/bash
set -e

VERSIONTYPE=$1

if [ "$VERSIONTYPE" == "" ]; then
    echo "Parameter missing!"
    exit 1
fi

npm i

(cd libs/ngx-ghosts; npm version $VERSIONTYPE)

npx ng run ngx-ghosts:build:production
npx scss-bundle -c libs/ngx-ghosts/scss-bundle.config.json

(cd dist/libs/ngx-ghosts; npm publish)
