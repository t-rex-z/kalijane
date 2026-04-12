const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  console.log(JSON.stringify(env));
  return {
    mode: 'development',
    entry: './src/index.js',
    
    devServer: {
      historyApiFallback: {
        "index": "/index.html"
      },
      hot: true,
      static: {
				directory : "./public"
			},
      port: 3004,
      proxy: [
				{
				context : ['/**'],
          target: '/index.html',  //default target
          secure: false,
          bypass: function(req, res, opt){
            //your custom code to check for any exceptions
            //console.log('bypass check', {req: req, res:res, opt: opt});
            console.log("PATH IS", req.path);
            if(req.path.indexOf('/images/') !== -1 || req.path.indexOf('/public/') !== -1 ||req.path.indexOf('.ico') !== -1){
              return req.path;
                //return '/'
            }

            if (req.path.endsWith(".js")) {
              return `/${req.path.split("/").slice(-1)[0]}`;
            }
    
            if (req.headers.accept.indexOf('html') !== -1) {
              return '/index.html';
            }

            //return req.path;
          }
        }
      ]
  },
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public'),
      publicPath: env.PUBLIC_PATH
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles/'),
        assets: path.resolve(__dirname, 'public/assets/')
      },
      modules: [
          path.resolve('./src'),
          path.resolve('./node_modules'),
      ]
    },
    optimization : {
      minimize : false,
      concatenateModules : true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              presets: ['@babel/env', '@babel/react'],
              plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            type: "asset/resource",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  indentWidth: 4,
                  includePaths: ['src/'],
                },
              },
            }
          ]
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              'file-loader'
            ],
            
        }
      ]
    },
    plugins :[
        new Dotenv({
          path: './.env.' + (env.development ? "development" : "production"),
          safe: false
      }),
      new HtmlWebpackPlugin({
        title: 'Custom template',
        // Load a custom template (lodash by default)
        template: './public/index.ejs',
        base : env.PUBLIC_PATH ?? '/'
      })
      ]
  }
};