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

export interface CommonParser {
  identifyPartials(
    beforeCursor: string,
    afterCursor: string
  ): { backtickAfter: boolean; backtickBefore: boolean; left: number; right: number };
}

export function assertPartials(parser: CommonParser): void {
  const limitChars = [
    ' ',
    '\n',
    '\t',
    '&',
    '~',
    '%',
    '!',
    '.',
    ',',
    '+',
    '-',
    '*',
    '/',
    '=',
    '<',
    '>',
    ')',
    '[',
    ']',
    ';'
  ];

  expect(parser.identifyPartials('', '')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 0,
    right: 0
  });
  expect(parser.identifyPartials('foo', '')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 3,
    right: 0
  });
  expect(parser.identifyPartials(' foo', '')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 3,
    right: 0
  });
  expect(parser.identifyPartials('asdf 1234', '')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 4,
    right: 0
  });
  expect(parser.identifyPartials('foo', 'bar')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 3,
    right: 3
  });
  expect(parser.identifyPartials('fo', 'o()')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 2,
    right: 3
  });
  expect(parser.identifyPartials('fo', 'o(')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 2,
    right: 2
  });
  expect(parser.identifyPartials('fo', 'o(bla bla)')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 2,
    right: 10
  });
  expect(parser.identifyPartials('foo ', '')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 0,
    right: 0
  });
  expect(parser.identifyPartials("foo '", "'")).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 0,
    right: 0
  });
  expect(parser.identifyPartials('foo "', '"')).toEqual({
    backtickAfter: false,
    backtickBefore: false,
    left: 0,
    right: 0
  });

  limitChars.forEach(char => {
    expect(parser.identifyPartials('bar foo' + char, '')).toEqual({
      backtickAfter: false,
      backtickBefore: false,
      left: 0,
      right: 0
    });
    expect(parser.identifyPartials('bar foo' + char + 'foofoo', '')).toEqual({
      backtickAfter: false,
      backtickBefore: false,
      left: 6,
      right: 0
    });
    expect(parser.identifyPartials('bar foo' + char + 'foofoo ', '')).toEqual({
      backtickAfter: false,
      backtickBefore: false,
      left: 0,
      right: 0
    });
    expect(parser.identifyPartials('', char + 'foo bar')).toEqual({
      backtickAfter: false,
      backtickBefore: false,
      left: 0,
      right: 0
    });
    expect(parser.identifyPartials('', 'foofoo' + char)).toEqual({
      backtickAfter: false,
      backtickBefore: false,
      left: 0,
      right: 6
    });
    expect(parser.identifyPartials('', ' foofoo' + char)).toEqual({
      backtickAfter: false,
      backtickBefore: false,
      left: 0,
      right: 0
    });
  });
}
