#!/usr/bin/env bash
set -e
export PATH="/Users/austin/.nvm/versions/node/v24.14.0/bin:$PATH"
cd /Users/austin/Code/the-rumble
exec node node_modules/next/dist/bin/next dev ${PORT:+-p $PORT}
