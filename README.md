IOS下 package.json

"start": "NODE_ENV=dev webpack-dev-server --progress --colors",
  "mock": "node ./mock/server.js",
  "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
},

## windows下 scripts

"scripts": {
  "start": "set NODE_ENV=dev && webpack-dev-server --progress --colors --port 8080",
  "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors",
  "mock": "node ./mock/server.js"
},