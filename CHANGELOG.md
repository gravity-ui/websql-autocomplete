# Changelog

## [1.21.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.20.0...v1.21.0) (2023-08-11)


### Features

* Support `CREATE TABLE` with `ENGINE` syntax for ClickHouse ([#78](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/78)) ([759b642](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/759b642daaed763a11c59c8c22994247574f6555))

## [1.20.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.19.0...v1.20.0) (2023-08-10)


### Features

* Support non-ordered `LIMIT` and `OFFSET` ([#76](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/76)) ([049a46e](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/049a46e54501df54857b53b31123801dc9fa2ff1))

## [1.19.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.18.0...v1.19.0) (2023-08-09)


### Features

* Support `OFFSET` for `PostgreSQL` ([#71](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/71)) ([7834158](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/78341587e1a4b42d007b2b04b893722550fbaf76))

## [1.18.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.17.0...v1.18.0) (2023-08-08)


### Features

* Separate PostgreSQL parser ([#69](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/69)) ([a005dce](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/a005dcebab879c50c5ff7cc2f56f8d3edd2fe63d))

## [1.17.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.16.0...v1.17.0) (2023-08-07)


### Features

* handle UPDATE errors with SET ([#65](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/65)) ([ceb0dff](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/ceb0dffcbcb439c680457efacfc5f74563a55b1e))

## [1.16.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.15.0...v1.16.0) (2023-08-07)


### Features

* Handle errors for `INSERT` template ([#62](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/62)) ([c6af390](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/c6af390f45878afaf577eb65b98d841b1f00286b))

## [1.15.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.14.0...v1.15.0) (2023-07-26)


### Features

* Column suggestions for `INSERT` query ([#60](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/60)) ([fd02a6b](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/fd02a6b421cea3b315958d8abd043e8e095bd2a7))

## [1.14.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.13.0...v1.14.0) (2023-07-24)


### Features

* Support column names syntax for `INSERT` query ([#58](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/58)) ([d95843a](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/d95843a23189031450792552f5cbb001434954db))

## [1.13.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.12.0...v1.13.0) (2023-07-14)


### Features

* move npm ci installation for generator to a script ([#54](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/54)) ([dadded4](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/dadded40e5695953c59fe0cc829e2fac3a7099b5))
* remove postinstall script, update readme.md ([#53](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/53)) ([2ac6e20](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/2ac6e20f066ba72d023aff7d4288bc6d1dbeb59c))
* restore postinstall script, make it execute only when we're not installed as dependency ([#56](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/56)) ([16a7efb](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/16a7efbf886bbd6fc28a14c991a872ca622f8c0a))

## [1.12.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.11.0...v1.12.0) (2023-07-14)


### Features

* remove debug field from Parser.parseSql ([#51](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/51)) ([304cc96](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/304cc96ed052652b7f939b31d6cac86d517cba7a))

## [1.11.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.10.0...v1.11.0) (2023-07-11)


### Features

* specify locations in ParseResult ([#48](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/48)) ([bf348b8](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/bf348b8efb1d7b2a5c44787299aaf57ae916e7ad))

## [1.10.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.9.0...v1.10.0) (2023-07-10)


### Features

* expand suggestTables interface ([#45](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/45)) ([e312358](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/e312358d031de933a89c202d917c582fc63124a5))

## [1.9.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.8.0...v1.9.0) (2023-07-07)


### Features

* add and integrate suggestSnippet method ([#43](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/43)) ([f1eb102](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/f1eb102fa17ee14500cf946b6895b63abef5b603))

## [1.8.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.7.0...v1.8.0) (2023-06-23)


### Features

* support explain statement ([#30](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/30)) ([27aef7c](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/27aef7c00d5a3fb247d9ddb55819607881ba8c30))

## [1.7.0](https://github.com/gravity-ui/sql-autocomplete-parsers/compare/v1.6.1...v1.7.0) (2023-06-21)


### Features

* specify type for ParseResult.suggestAggregateFunctions ([#33](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/33)) ([b9e9dbd](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/b9e9dbdce90582e46093d3e31b30beb55a1ca31b))
* specify type for suggestColumnAliases ([#36](https://github.com/gravity-ui/sql-autocomplete-parsers/issues/36)) ([d18fcd3](https://github.com/gravity-ui/sql-autocomplete-parsers/commit/d18fcd3bcd595bd18a09001ec0117c125a8ef0e5))

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
