/*
 * Copyright 2014 WebFilings, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// https://github.com/karma-runner/grunt-karma
// http://karma-runner.github.io/0.10/index.html
// https://github.com/karma-runner/karma-browserstack-launcher
//
// Available Browsers/Devices on BrowserStack:
// -------------------------------------------
//
// To find out what's available:
// curl -u "username:accessKey" http://api.browserstack.com/3/browsers | python -mjson.tool
//
// Once you find something you want to include,
// add a launcher to the hash returned by getBrowserStackLaunchers
// and then add the browser to the browsers config option.

'use strict';

var _ = require('lodash');
var grunt = require('grunt');

function getBrowserStackLaunchers() {
    /* jshint camelcase: false */
    return {
        ios_5_1_iPad_3: {
            base: 'BrowserStack',
            os: 'ios',
            os_version: '5.1',
            device: 'iPad 3rd'
        },
        ios_6_iPad_3: {
            base: 'BrowserStack',
            os: 'ios',
            os_version: '6.0',
            device: 'iPad 3rd (6.0)'
        },
        osx_chrome_27: {
            base: 'BrowserStack',
            os: 'OS X',
            os_version: 'Lion',
            browser: 'chrome',
            browser_version: '27.0'
        },
        osx_safari_6: {
            base: 'BrowserStack',
            os: 'OS X',
            os_version: 'Lion',
            browser: 'safari',
            browser_version: '6.0'
        },
        osx_firefox_21: {
            base: 'BrowserStack',
            os: 'OS X',
            os_version: 'Lion',
            browser: 'firefox',
            browser_version: '21.0'
        },
        win_7_chrome_27: {
            base: 'BrowserStack',
            os: 'Windows',
            os_version: '7',
            browser: 'chrome',
            browser_version: '27.0'
        },
        win_7_firefox_21: {
            base: 'BrowserStack',
            os: 'Windows',
            os_version: '7',
            browser: 'firefox',
            browser_version: '21.0'
        },
        win_7_ie_9: {
            base: 'BrowserStack',
            os: 'Windows',
            os_version: '7',
            browser: 'ie',
            browser_version: '9.0'
        },
        win_8_ie_10: {
            base: 'BrowserStack',
            os: 'Windows',
            os_version: '8',
            browser: 'ie',
            browser_version: '10.0'
        }
    };
}

module.exports = function(settings) {
    var files = settings.files;
    var globs = settings.globs;

    var config = {
        options: {
            port: 9876,
            captureTimeout: 5000,
            reportSlowerThan: 500,
            colors: true,
            reporters: ['dots'],
            logLevel: 'INFO',
            frameworks: [
                'jasmine',
                'requirejs'
            ],
            files: [
                { pattern: globs.src, included: false },
                { pattern: globs.test, included: false },
                files.requireConfigKarma
            ],
            proxies: settings.proxies,
            preprocessors: {}
        },
        dev: {
            autoWatch: true,
            browsers: ['PhantomJS'],
            reporters: ['progress']
        }
    };

    // Add additional files as needed.
    [globs.bower, globs.src.replace(/\.js$/, '.html')].forEach(function(pattern) {
        if (grunt.file.expand(pattern).length) {
            config.options.files.push({ pattern: pattern, included: false });
        }
    });

    // If given BrowserStack credentials, add browserstack tasks.
    if (settings.browserStackCredentials) {
        _.merge(config, {
            options: {
                browserStack: settings.browserStackCredentials,
                customLaunchers: getBrowserStackLaunchers()
            },
            ios: {
                singleRun: true,
                browsers: [
                    'ios_5_1_iPad_3',
                    'ios_6_iPad_3'
                ]
            },
            osx: {
                singleRun: true,
                browsers: [
                    'osx_chrome_27',
                    'osx_safari_6',
                    'osx_firefox_21'
                ]
            },
            win: {
                singleRun: true,
                browsers: [
                    'win_7_chrome_27',
                    'win_7_firefox_21',
                    // TODO: not working; socket.io cannot create connection for some reason.
                    // 'win_7_ie_9',
                    'win_8_ie_10'
                ]
            }
        });
    }

    return {
        karma: config
    };
};