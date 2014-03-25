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
    var directories = settings.directories;

    return {
        clean: {
            complexity: directories.complexityOutput,
            coverage: directories.coverageOutput,
            test: directories.testOutput,
            integration: directories.integrationOutput,
            docs: directories.apiOutput
        }
    };
};
