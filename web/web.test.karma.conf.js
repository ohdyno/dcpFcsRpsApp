const webpackConfig = require('./webpack.conf');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['spec/**/*Spec.js'],
        exclude: ['node_modules'],
        preprocessors: {
            'spec/**/*Spec.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        reporters: ['spec'],
        specReporter: {
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: true,
            suppressSkipped: false,
            showSpecTiming: false,
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        concurrency: Infinity
    })
};
