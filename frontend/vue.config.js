const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devServer: {
    host: "0.0.0.0",
    allowedHosts: 'all',
    watchFiles: ['src/**/*.vue', 'src/**/*.ts'],
    proxy: process.env.SAGE_LOCAL_DEV === 'true' ? {
       // This proxies all asset requests to latest from master from github so we don't have to clone all of them locally
       "^/eq-asset-preview-master/*": {
        changeOrigin: true,
        target:
          "https://raw.githubusercontent.com/Akkadius/eq-asset-preview/master",
        pathRewrite: (path) => path.replace(/^\/eq-asset-preview-master/, ""),
      },
      // Local development for EQ sage -- https://gitlab.com/knervous/eq-sage
      "^/eqsage": {
        changeOrigin: true,
        logLevel: 'debug',
        target: "http://127.0.0.1:4100",
        pathRewrite: (path) => path.replace(/^\/eqsage/, ""),
      },
      "^/static": {
        changeOrigin: true,
        logLevel: 'debug',
        target: "http://127.0.0.1:4100",
      },
      "^/main\.": {
        changeOrigin: true,
        logLevel: 'debug',
        target: "http://127.0.0.1:4100",
      },

    } : null,
  },
  // pluginOptions: {
  //   webpackBundleAnalyzer: {
  //     openAnalyzer: false
  //   }
  // },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(40000000).maxAssetSize(40000000);

    // ignore asset preview during development to keep build times down
    // if (process.env.NODE_ENV !== "production") {
    //   config.plugin("copy").tap(([options]) => {
    //     options[0].ignore.push("eq-asset-preview-master/**/*");

    //     return [options];
    //   });
    // }
    //
    config.resolve.fallbacks = {
      util: require.resolve('util/'),
      querystring: require.resolve('querystring/'),
      path  : require.resolve('path-browserify'),
      buffer: require.resolve('buffer/'),
      fs    : false,
      tls   : false,
      net   : false,
      zlib  : false,
      http  : false,
      https : false,
      stream: false,
      crypto: false,
    };

    config.output
      .filename("[name].[hash].js")
      .path(path.resolve(__dirname, "dist"))
      .clean(true);

    // config.optimization.moduleIds    = 'deterministic'
    // config.optimization.runtimeChunk = 'single'
    config.optimization.splitChunks = {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    };
    config.module.rule('js').use('babel-loader').loader('swc-loader');
    // Use swc for our ts loader
    config.module.rules.delete('ts').delete('tsx');

    // Add swc-loader for TypeScript
    config.module
      .rule('typescript')
      .test(/\.tsx?$/)
      .use('swc-loader')
      .loader('swc-loader')
      .options({
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true, // Enable if using TSX
            decorators: true,
            dynamicImport: true,
          },
          target: 'es2015',
        },
        module: {
          type: 'es6',
        },
      });


      // Clear existing minimizer setup
      config.optimization.minimizers.delete('terser');

      // Add TerserPlugin
      config.optimization.minimizer('terser').use(TerserPlugin, [{
        terserOptions: {
          compress: {
            // Terser compress options
          },
          mangle: {
            // Terser mangle options
          },
          // Include any additional terser options here
        },
      }]);

  
    // console.log(config)
  },
  runtimeCompiler: true,
  productionSourceMap: false,
};
