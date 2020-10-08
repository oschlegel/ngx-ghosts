#!/bin/bash
set -e

VERSIONTYPE=$1

if [ "$VERSIONTYPE" == "" ]; then
    echo "Parameter missing!"
    exit 1
fi

cd libs/ngx-ghosts
npm version $VERSIONTYPE

cd ../..
npx ng run ngx-ghosts:build
npx scss-bundle -c libs/ngx-ghosts/scss-bundle.config.json

cd dist/libs/ngx-ghosts
npm publish
