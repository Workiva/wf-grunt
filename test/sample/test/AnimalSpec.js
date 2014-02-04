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

define(function(require) {
    'use strict';

    var Animals = require('../dist/Animals');

    describe('Constructing', function() {
        it('should be create new animals', function() {
            var animal = new Animals.Animal('Sloth');
            var bird = new Animals.Bird('Parrot');
            var eagle = new Animals.Eagle();
            var turkey = new Animals.Turkey();
            expect(animal.name).toBe('Sloth');
            expect(bird.name).toBe('Parrot');
            expect(eagle.name).toBe('Eagle!');
            expect(turkey.name).toBe('Turkey');
        });
    });
});