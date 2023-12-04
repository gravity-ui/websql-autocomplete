// Please note that the code below is the modified code distributed on the terms, mentioned below.
// The copyright for the changes belongs to YANDEX LLC.
//
// Copyright 2023 YANDEX LLC
//
// Licensed under the Apache License, Version 2.0 (the "License")
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under
// the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific language governing permissions
// and limitations under the License.

// This override allows to avoid error `module not found`, because `node` context provides `module` variable
/* eslint-env node */
module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    transform: {
        '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^\\./src/autocomplete/(.*)$': 'src/parsing/$1',
    },
    moduleDirectories: ['node_modules', 'src/autocomplete'],
    testMatch: ['<rootDir>/src/autocomplete/**/*.test.(js|jsx|ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/src/autocomplete/test/jest.init.ts'],
    collectCoverageFrom: ['<rootDir>/src/autocomplete/**/*.{js,jsx}'],
};
