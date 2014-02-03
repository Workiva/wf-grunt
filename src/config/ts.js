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

// https://github.com/gruntjs/grunt-contrib-clean

'use strict';

module.exports = function(settings) {
    var buildDir = settings.directories.dist;
    var src = settings.directories.src;

    return {
        ts: {
            options: { // use to override the default options, http://gruntjs.com/configuring-tasks#options
                target: 'es5', // 'es3' (default) | 'es5'
                module: 'amd', // 'amd' (default) | 'commonjs'
                sourceMap: true, // true (default) | false
                declaration: false, // true | false (default)
                removeComments: true // true (default) | false
            },
            build: {
                src: settings.globs.ts, // The source typescript files, http://gruntjs.com/configuring-tasks#files
                //html: ["test/work/**/*.tpl.html"], // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
                //reference: buildDir + "reference.ts", // If specified, generate this file that you can use for your reference management
                //out: 'test/.js',                // If specified, generate an out.js file which is the merged js file
                outDir: buildDir, // If specified, the generate javascript files are placed here. Only works if out is not specified
            },
            watch: {
                src: settings.globs.ts,
                //reference: buildDir + "reference.ts",
                outDir: buildDir,
                watch: src
            },
        }
    };
};