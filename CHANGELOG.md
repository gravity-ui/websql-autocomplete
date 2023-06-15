# Changelog

## [1.6.1](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.6.0...v1.6.1) (2023-06-15)


### Bug Fixes

* fix column suggestions for delete statement ([#27](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/27)) ([7d5c916](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/7d5c91674554f98b5e05e0f50becd1c80abaed01))

## [1.6.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.5.0...v1.6.0) (2023-06-07)


### Features

* add newline just for the release ([#25](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/25)) ([cc95a05](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/cc95a056c5077d1ede897a8d071b958103d216cf))

## [1.5.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.4.0...v1.5.0) (2023-06-06)


### Features

* add delete statement suggestions ([34f22e0](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/34f22e06f3db322418c6f706eec5d79a13b4b018)), ([d4ba052](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/d4ba052db182bf1719c3d288de7cf1fcaca80e16))

## [1.4.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.3.0...v1.4.0) (2023-06-06)


### Features

* add alias for table interface ([12920a3](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/12920a37e79d0a2021e90d22780bddc2ee83e3f9))

## [1.3.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.2.0...v1.3.0) (2023-06-06)


### Features

* expand ParseResult interface ([7235b0d](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/7235b0dce5d27a2385c1253f07fce2fd2ae56922))

## [1.2.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.1.1...v1.2.0) (2023-06-05)


### Features

* support 'DELETE FROM mytable' for genericAutocompleteParser (65e0c06)

## [1.1.1](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.1.0...v1.1.1) (2023-06-01)


### Bug Fixes

* ts-ignore genericAutocompleteParser import ([8590b60](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/8590b607eefe647af1da9f99c86679cd524a8924))

## [1.1.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.0.0...v1.1.0) (2023-06-01)


### Features

* bump version ([d0c0038](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/d0c00380d6c54da1793e8a09715a7790601ff968))

## 1.0.0 (2023-06-01)


### Features

* add cursorSymbol to src/parsing/index.ts ([d66d357](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/d66d357b9807183cc1163e833902ff7ab76c217e))
* make debug parameter for parseGenericSql optional ([631811b](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/631811b3da59a66706bc8711a3ddbbb5a2871cf6))


### Bug Fixes

* fix genericAutocompleteParser.test.ts tests ([0f8b51c](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/0f8b51c09b0efe2d4807e1118c949f03647dfa10))
* fix src/parsing/test/testing.ts type error ([240b6c4](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/240b6c4c7ae168035059d57c55e8e4e4a60641a8))
* move parsers/test/testings.js to parsers/test/testing.ts ([a803a58](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/a803a58b3c092ef34a871e19de8e86cfb408bdb4))
* remove aceRegex, parserFileRegex from babel, move root directories to src ([4cde182](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/4cde18276202eaae83d558d11cee9a0c7cf0c79f))
* remove unnecessary files from babel.config.js, move it to babel.config.json, remove some deps ([291bd96](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/291bd96abcff781c4011f50508db6802afdb28ab))
* update NOTICE.txt ([1735cd1](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/1735cd1d4518e94a29bde12207a40b804bd64f5f))
