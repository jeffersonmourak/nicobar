const webpackConfig = require('./webpack.config.js');
const path = require('path');
var APP_DIR = path.resolve(__dirname, 'core/');
module.exports = function(config) {
  config.set({
    basePath: APP_DIR,
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.js': ['webpack'],
      '**/*.spec.js': ['webpack'],
    },
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      '**/*.js',
      '**/*.spec.js',
    ],
    singleRun: true,
    port: 9876,
    colors: true,
    browserDisconnectTimeout: 20000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 150000,
    reportSlowerThan: 500,
    coverageReporter: {
        type: 'html',
        dir: '../coverage/'
    },
    webpack: webpackConfig,
    browsers: ['PhantomJS'],
    logLevel: 'INFO',
    reporters: ['coverage', 'spec'],
    specReporter: {
      suppressSkipped: true
    }
  });
};
