React Redux 打造的web app~ 其中商品模块的一个分支

npm install 

npm run mock   启动mock server 拿到相关数据 / 具体可看mock/server.js文件

npm start 后浏览器会自动打开（请在手机或浏览器手机模式下浏览）
localhost:8080/

npm run build 打包（windows需先建立一个build的空文件夹）

**注意：** 

IOS Windows下有差异，该配置是在win10下跑的，

若在IOS环境，请修改 package.json

"start": "NODE_ENV=dev webpack-dev-server --progress --colors",
  "mock": "node ./mock/server.js",
  "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
},

## windows下 scripts （作个备份）

"scripts": {
  "start": "set NODE_ENV=dev && webpack-dev-server --progress --colors --port 8080",
  "build": "rm -rf ./build && set NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors",
  "mock": "node ./mock/server.js"
},