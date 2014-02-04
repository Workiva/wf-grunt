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
// Options
// https://github.com/palantir/tslint

'use strict';

module.exports = function(settings) {

    return {
        tslint: {
            options: {
                configuration: {
                    "rules": {
                        "class-name": true,
                        "curly": true,
                        "eofline": true,
                        "forin": true,
                        "indent": [true, 4],
                        "interface-name": true,
                        "label-position": true,
                        "label-undefined": true,
                        "max-line-length": [true, 140],
                        "no-arg": true,
                        "no-bitwise": false,
                        "no-consecutive-blank-lines": true,
                        "no-construct": true,
                        "no-debugger": true,
                        "no-duplicate-key": true,
                        "no-duplicate-variable": true,
                        "no-empty": true,
                        "no-eval": true,
                        "no-string-literal": true,
                        "no-trailing-whitespace": true,
                        "no-unreachable": true,
                        "one-line": [true,
                            "check-open-brace",
                            //"check-catch",
                            //"check-else",
                            "check-whitespace"
                        ],
                        "quotemark": [true, "single"],
                        "radix": true,
                        "semicolon": true,
                        "triple-equals": [true, "allow-null-check"],
                        "variable-name": false,
                        "whitespace": [true,
                            "check-branch",
                            "check-decl",
                            "check-operator",
                            "check-separator",
                            "check-type"
                        ]
                    }
                }
            },
            src: {
                src: settings.globs.ts
            }
        }
    };
};
