
# comandos de instalacion
npm init -y 
npm install webpack webpack-cli --save-dev 

# install firebase
npm install firebase@9.21.0 --save; 

# webpack.config.js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};

# Ejecucion de fichero con Webpack
npx webpack --config webpack.config.js