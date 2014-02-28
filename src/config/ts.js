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

// https://github.com/basarat/grunt-ts

'use strict';

module.exports = function(settings) {
    var distDir = settings.directories.dist;
    var srcDir = settings.directories.src;

    return {
        ts: {
            options: {
                target: 'es5',
                module: 'amd',
                sourceMap: true,
                declaration: false,
                removeComments: true
            },
            compile: {
                src: settings.globs.ts
            }
        }
    };
};