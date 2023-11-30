// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

import {TYPE_CONVERSION as GENERIC_TYPE_CONVERSION} from './generic/type-conversion';

export interface UdfArgument {
  type: string;
  multiple?: boolean;
  keywords?: string[];
  optional?: boolean;
}

export interface UdfDetails {
  returnTypes: string[];
  name: string;
  arguments: UdfArgument[][];
  altArguments?: UdfArgument[][];
  signature: string;
  draggable: string;
  description?: string;
  described?: boolean;
}

export interface UdfCategoryFunctions {
  [attr: string]: UdfDetails;
}

export interface UdfCategory {
  name: string;
  functions: UdfCategoryFunctions;
  isAnalytic?: boolean;
  isAggregate?: boolean;
}

export interface SetOptions {
  [attr: string]: SetDetails;
}

export interface SetDetails {
  default: string;
  type: string;
  description: string;
}

export interface TypeConversion {
  [attr: string]: { [attr: string]: boolean };
}

export interface SqlReferenceProvider {
  getReservedKeywords(dialect: string): Promise<Set<string>>;
  getSetOptions(dialect: string): Promise<SetOptions>;
  getUdfCategories(dialect: string): Promise<UdfCategory[]>;
  hasUdfCategories(dialect: string): boolean;
}

function stripPrecision(types: string[]): string[] {
  const result: string[] = [];

  types.forEach(type => {
    if (type.indexOf('(') > -1) {
      result.push(type.substring(0, type.indexOf('(')));
    } else {
      result.push(type);
    }
  });

  return result;
}

/**
 * Matches types based on implicit conversion i.e. if you expect a BIGINT then INT is ok but not BOOLEAN etc.
 */
export function matchesType(
    _dialect: string,
    expectedTypes: string[],
    actualRawTypes: string[]
): boolean {
  if (expectedTypes.length === 1 && expectedTypes[0] === 'T') {
    return true;
  }

  const actualTypes = stripPrecision(actualRawTypes);
  if (
      actualTypes.indexOf('ARRAY') !== -1 ||
      actualTypes.indexOf('MAP') !== -1 ||
      actualTypes.indexOf('STRUCT') !== -1
  ) {
    return true;
  }

  const conversionTable = GENERIC_TYPE_CONVERSION;
  for (let i = 0; i < expectedTypes.length; i++) {
    for (let j = 0; j < actualTypes.length; j++) {
      const expectedType = expectedTypes[i];
      const actualType = actualTypes[j];
      const convertedType = expectedType && conversionTable[expectedType];

      // To support future unknown types
      if (!convertedType || !actualType || typeof convertedType === 'undefined' || typeof convertedType[actualType] == 'undefined') {
        return true;
      }

      if (convertedType && convertedType[actualType]) {
        return true;
      }
    }
  }

  return false;
}