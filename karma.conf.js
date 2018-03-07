const webpackConfig = require('./webpack.config.js');
const path = require('path');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
    },
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      {pattern: 'core/*.js', watched:true, served:false, included:false, nocache:false},
      {pattern: 'tests/*.js',watched:true,served:true,included:true}
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
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    }
  });
};
