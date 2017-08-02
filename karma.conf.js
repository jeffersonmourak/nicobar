const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: 'core/',
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'coverage'],
    },
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
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
