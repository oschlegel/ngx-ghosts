#!/bin/bash

VERSIONTYPE=$1

if [ "$VERSIONTYPE" == "" ]; then
    echo "Parameter missing!"
    exit 1
fi

cd projects/ngx-ghosts
npm version $VERSIONTYPE

cd ../..
npm run ngx-ghosts:build

cd dist/ngx-ghosts
npm publish
