[
  {
    "namePrefix": "should not report errors on short delete statement",
    "beforeCursor": "EXPLAIN SELECT * FROM test_table; ",
    "afterCursor": "",
    "noErrors": true,
    "containsKeywords": [
      "SELECT"
    ],
    "expectedResult": {
      "lowerCase": false
    }
  },
  {
    "namePrefix": "should suggest EXPLAIN",
    "beforeCursor": "",
    "afterCursor": "",
    "noErrors": true,
    "containsKeywords": [
      "EXPLAIN"
    ],
    "expectedResult": {
      "lowerCase": false
    }
  },
  {
    "namePrefix": "should suggest SELECT",
    "beforeCursor": "EXPLAIN ",
    "afterCursor": "",
    "noErrors": true,
    "containsKeywords": [
      "SELECT"
    ],
    "expectedResult": {
      "lowerCase": false
    }
  },
  {
    "namePrefix": "shouldn't suggest explain",
    "beforeCursor": "EXPLAIN ",
    "afterCursor": "",
    "noErrors": true,
    "containsKeywords": [
      "EXPLAIN"
    ],
    "expectedResult": {
      "lowerCase": false
    }
  },
  {
    "namePrefix": "should report error",
    "beforeCursor": "EXPLAIN EXPLAIN ",
    "afterCursor": "",
    "expectedResult": {
      "lowerCase": false
    }
  },
]
