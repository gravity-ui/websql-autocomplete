# Changelog

## [11.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v10.0.0...v11.0.0) (2024-07-09)


### ⚠ BREAKING CHANGES

* Support YQ dialect ([#173](https://github.com/gravity-ui/websql-autocomplete/issues/173))
* Add YQL language autocomplete ([#170](https://github.com/gravity-ui/websql-autocomplete/issues/170))
* add table context to constraint suggestions ([#159](https://github.com/gravity-ui/websql-autocomplete/issues/159))
* separate AutocompleteParseResult for different databases ([#148](https://github.com/gravity-ui/websql-autocomplete/issues/148))
* remove activeDialect unused variable, move type-conversion ([#118](https://github.com/gravity-ui/websql-autocomplete/issues/118))
* rename sql-autocomplete-parsers to websql-autocomplete ([#88](https://github.com/gravity-ui/websql-autocomplete/issues/88))

### Features

* actualise clickhouse data types ([#82](https://github.com/gravity-ui/websql-autocomplete/issues/82)) ([e16505a](https://github.com/gravity-ui/websql-autocomplete/commit/e16505aef7bfdcc5d1cdf5d99c18ea24f1a74c22))
* add alias for table interface ([12920a3](https://github.com/gravity-ui/websql-autocomplete/commit/12920a37e79d0a2021e90d22780bddc2ee83e3f9))
* add and integrate suggestSnippet method ([#43](https://github.com/gravity-ui/websql-autocomplete/issues/43)) ([f1eb102](https://github.com/gravity-ui/websql-autocomplete/commit/f1eb102fa17ee14500cf946b6895b63abef5b603))
* add CI ([114426f](https://github.com/gravity-ui/websql-autocomplete/commit/114426ff2cebd57161d6692e48ce9812effe77db))
* add CommonSuggestion and JoinsSuggestion types, migrate postgresql tests to typescript ([#105](https://github.com/gravity-ui/websql-autocomplete/issues/105)) ([36b291c](https://github.com/gravity-ui/websql-autocomplete/commit/36b291c28bc0dfd69e46feac07da6812a85831e4))
* add cursorSymbol to src/parsing/index.ts ([d66d357](https://github.com/gravity-ui/websql-autocomplete/commit/d66d357b9807183cc1163e833902ff7ab76c217e))
* Add database suggestions ([#161](https://github.com/gravity-ui/websql-autocomplete/issues/161)) ([eaba501](https://github.com/gravity-ui/websql-autocomplete/commit/eaba50135b74492759e977070a5b8f2cbfec0e50))
* add delete statement suggestions ([34f22e0](https://github.com/gravity-ui/websql-autocomplete/commit/34f22e06f3db322418c6f706eec5d79a13b4b018))
* add delete statement suggestions ([d4ba052](https://github.com/gravity-ui/websql-autocomplete/commit/d4ba052db182bf1719c3d288de7cf1fcaca80e16))
* add eslint ci, fix eslint errors ([#97](https://github.com/gravity-ui/websql-autocomplete/issues/97)) ([2c66e7a](https://github.com/gravity-ui/websql-autocomplete/commit/2c66e7a46b5e790557efe2b53ae4a207e7b1b4d1))
* add generate_and_test script to package.json ([eb3e082](https://github.com/gravity-ui/websql-autocomplete/commit/eb3e08292e7deef62255b084de31bfea3cc9047a))
* add newline just for the release ([#25](https://github.com/gravity-ui/websql-autocomplete/issues/25)) ([cc95a05](https://github.com/gravity-ui/websql-autocomplete/commit/cc95a056c5077d1ede897a8d071b958103d216cf))
* Add role suggestions for MySql ([#165](https://github.com/gravity-ui/websql-autocomplete/issues/165)) ([eba7ac3](https://github.com/gravity-ui/websql-autocomplete/commit/eba7ac370f77f4bf39a102f449134fb0c164a162))
* add schema suggestions for postgresql ([#157](https://github.com/gravity-ui/websql-autocomplete/issues/157)) ([ceb9580](https://github.com/gravity-ui/websql-autocomplete/commit/ceb95805f3de0e2a1d4ce884ac47eac792a19bca))
* add table context to constraint suggestions ([#159](https://github.com/gravity-ui/websql-autocomplete/issues/159)) ([23ee8dd](https://github.com/gravity-ui/websql-autocomplete/commit/23ee8dd9b68e9763783bca97d5ae3431ffd1c4f1))
* add trigger suggestions to mysql, postgresql ([#139](https://github.com/gravity-ui/websql-autocomplete/issues/139)) ([f09f472](https://github.com/gravity-ui/websql-autocomplete/commit/f09f4725b8330d946f1c829eb4163822a69242d5))
* Add user suggestions for MySql, role suggestions for PostgreSql ([#168](https://github.com/gravity-ui/websql-autocomplete/issues/168)) ([f329f54](https://github.com/gravity-ui/websql-autocomplete/commit/f329f54dc062a35a061e9b1de483b9d499b03b2a))
* Add YQL language autocomplete ([#170](https://github.com/gravity-ui/websql-autocomplete/issues/170)) ([7f07f3e](https://github.com/gravity-ui/websql-autocomplete/commit/7f07f3ef48b6ce6dcf00522d328732066aebadd4))
* bump version ([d0c0038](https://github.com/gravity-ui/websql-autocomplete/commit/d0c00380d6c54da1793e8a09715a7790601ff968))
* Column suggestions for `INSERT` query ([#60](https://github.com/gravity-ui/websql-autocomplete/issues/60)) ([fd02a6b](https://github.com/gravity-ui/websql-autocomplete/commit/fd02a6b421cea3b315958d8abd043e8e095bd2a7))
* define database StatementPart, add identifierChain to TablesSuggestion, remove useless totos, migrate drop tests to typescript ([#96](https://github.com/gravity-ui/websql-autocomplete/issues/96)) ([47a18c2](https://github.com/gravity-ui/websql-autocomplete/commit/47a18c272db9f00dad2a0823eb2c5bf000151866))
* define FiltersSuggestion, FunctionsSuggestion, ValuesSuggestion, Colref, migrate update table tests to typescript ([#99](https://github.com/gravity-ui/websql-autocomplete/issues/99)) ([4b99563](https://github.com/gravity-ui/websql-autocomplete/commit/4b995634e1a82664f7eae1df91b48763c5a26eb9))
* define suggestColRefKeywords, suggestEngines, add typechecking ci ([#95](https://github.com/gravity-ui/websql-autocomplete/issues/95)) ([f09f370](https://github.com/gravity-ui/websql-autocomplete/commit/f09f370319d0b8b13cffa6d0bd6d8c0269008b95))
* define useDatabase, add prependQuestionMark and prependFrom to DatabasesSuggestion, migrate use and set tests to typescript ([#101](https://github.com/gravity-ui/websql-autocomplete/issues/101)) ([7ec60ae](https://github.com/gravity-ui/websql-autocomplete/commit/7ec60ae846df2253a5696e9acbe0dc341cc605e2))
* enrich README.md ([38962ed](https://github.com/gravity-ui/websql-autocomplete/commit/38962edaaae6274a7bad8af4ee78c87602ea7e47))
* expand ParseResult interface ([7235b0d](https://github.com/gravity-ui/websql-autocomplete/commit/7235b0dce5d27a2385c1253f07fce2fd2ae56922))
* expand suggestTables interface ([#45](https://github.com/gravity-ui/websql-autocomplete/issues/45)) ([e312358](https://github.com/gravity-ui/websql-autocomplete/commit/e312358d031de933a89c202d917c582fc63124a5))
* extend StatementPart, make TestCase fields optional, migrate location tests to typescript and move files to select folder ([#107](https://github.com/gravity-ui/websql-autocomplete/issues/107)) ([8b6b2c4](https://github.com/gravity-ui/websql-autocomplete/commit/8b6b2c43bc17b71ff83b5fcedc045dc68b9014d6))
* fix alter suggestions; fix table and column suggestions with multiple statements; add alter, drop tests; separate newline tests; add commit and ci checks ([#14](https://github.com/gravity-ui/websql-autocomplete/issues/14)) ([fcbe16a](https://github.com/gravity-ui/websql-autocomplete/commit/fcbe16acda6bf98f2f33905d32f1bd373af22ae5))
* fix columns being suggested in LIMIT, OFFSET clause; fix insert grammar and table handling in psql; fix grammar for select statements; psql tests for empty-query, select, delete, insert, update ([#20](https://github.com/gravity-ui/websql-autocomplete/issues/20)) ([1b2b84e](https://github.com/gravity-ui/websql-autocomplete/commit/1b2b84e33398a763b3958e4c4c35121232993e68))
* fix psql suggesting tables after table name; insert and update tests; findCursorTokenIndex tests ([#16](https://github.com/gravity-ui/websql-autocomplete/issues/16)) ([41022e3](https://github.com/gravity-ui/websql-autocomplete/commit/41022e389e46c5b926e30d113c5bb2d74059aaa6))
* Handle errors for `INSERT` template ([#62](https://github.com/gravity-ui/websql-autocomplete/issues/62)) ([c6af390](https://github.com/gravity-ui/websql-autocomplete/commit/c6af390f45878afaf577eb65b98d841b1f00286b))
* handle UPDATE errors with SET ([#65](https://github.com/gravity-ui/websql-autocomplete/issues/65)) ([ceb0dff](https://github.com/gravity-ui/websql-autocomplete/commit/ceb0dffcbcb439c680457efacfc5f74563a55b1e))
* make debug parameter for parseGenericSql optional ([631811b](https://github.com/gravity-ui/websql-autocomplete/commit/631811b3da59a66706bc8711a3ddbbb5a2871cf6))
* migrate truncate table tests to typescript ([#102](https://github.com/gravity-ui/websql-autocomplete/issues/102)) ([7d7d38b](https://github.com/gravity-ui/websql-autocomplete/commit/7d7d38be65adec188d1f51c7679700779b3833c7))
* move AggregateFunctionsSuggestion to a separate interface, refactor general parser create tests ([#92](https://github.com/gravity-ui/websql-autocomplete/issues/92)) ([08e8c26](https://github.com/gravity-ui/websql-autocomplete/commit/08e8c26982ec2e62a3951234f0db014329070741))
* move npm ci installation for generator to a script ([#54](https://github.com/gravity-ui/websql-autocomplete/issues/54)) ([dadded4](https://github.com/gravity-ui/websql-autocomplete/commit/dadded40e5695953c59fe0cc829e2fac3a7099b5))
* refactor test case message construction ([#39](https://github.com/gravity-ui/websql-autocomplete/issues/39)) ([e512860](https://github.com/gravity-ui/websql-autocomplete/commit/e5128609a8d54f28f0f547e7ff772e6b1f66a421))
* remove activeDialect unused variable, move type-conversion ([#118](https://github.com/gravity-ui/websql-autocomplete/issues/118)) ([d43ebe9](https://github.com/gravity-ui/websql-autocomplete/commit/d43ebe99128d08f8181808634ec656104267aa4a))
* remove debug field from Parser.parseSql ([#51](https://github.com/gravity-ui/websql-autocomplete/issues/51)) ([304cc96](https://github.com/gravity-ui/websql-autocomplete/commit/304cc96ed052652b7f939b31d6cac86d517cba7a))
* remove postinstall script, update readme.md ([#53](https://github.com/gravity-ui/websql-autocomplete/issues/53)) ([2ac6e20](https://github.com/gravity-ui/websql-autocomplete/commit/2ac6e20f066ba72d023aff7d4288bc6d1dbeb59c))
* rename sql-autocomplete-parsers to websql-autocomplete ([#88](https://github.com/gravity-ui/websql-autocomplete/issues/88)) ([123d585](https://github.com/gravity-ui/websql-autocomplete/commit/123d5852c76c643a67d0cad1768c8b1e4abba188))
* restore postinstall script, make it execute only when we're not installed as dependency ([#56](https://github.com/gravity-ui/websql-autocomplete/issues/56)) ([16a7efb](https://github.com/gravity-ui/websql-autocomplete/commit/16a7efbf886bbd6fc28a14c991a872ca622f8c0a))
* separate AutocompleteParseResult for different databases ([#148](https://github.com/gravity-ui/websql-autocomplete/issues/148)) ([34d5a2b](https://github.com/gravity-ui/websql-autocomplete/commit/34d5a2bdf17ae04267d3d4444753fd13cb57012b))
* Separate PostgreSQL parser ([#69](https://github.com/gravity-ui/websql-autocomplete/issues/69)) ([a005dce](https://github.com/gravity-ui/websql-autocomplete/commit/a005dcebab879c50c5ff7cc2f56f8d3edd2fe63d))
* specify locations in ParseResult ([#48](https://github.com/gravity-ui/websql-autocomplete/issues/48)) ([bf348b8](https://github.com/gravity-ui/websql-autocomplete/commit/bf348b8efb1d7b2a5c44787299aaf57ae916e7ad))
* specify type for ParseResult.suggestAggregateFunctions ([#33](https://github.com/gravity-ui/websql-autocomplete/issues/33)) ([b9e9dbd](https://github.com/gravity-ui/websql-autocomplete/commit/b9e9dbdce90582e46093d3e31b30beb55a1ca31b))
* specify type for suggestColumnAliases ([#36](https://github.com/gravity-ui/websql-autocomplete/issues/36)) ([d18fcd3](https://github.com/gravity-ui/websql-autocomplete/commit/d18fcd3bcd595bd18a09001ec0117c125a8ef0e5))
* suggest column aliases ([#127](https://github.com/gravity-ui/websql-autocomplete/issues/127)) ([2f338ca](https://github.com/gravity-ui/websql-autocomplete/commit/2f338caab338b901c30e23361b9304ed9e65308a))
* suggest multiple tables with same name and different aliases ([#182](https://github.com/gravity-ui/websql-autocomplete/issues/182)) ([1d3fb82](https://github.com/gravity-ui/websql-autocomplete/commit/1d3fb820f647c5ba667ff664bd81667c5a7f705f))
* support 'DELETE FROM mytable' for genericAutocompleteParser ([65e0c06](https://github.com/gravity-ui/websql-autocomplete/commit/65e0c064bd3f05a7d8fad8894befbd58ed4c79bb))
* Support `CREATE TABLE` with `ENGINE` syntax for ClickHouse ([#78](https://github.com/gravity-ui/websql-autocomplete/issues/78)) ([759b642](https://github.com/gravity-ui/websql-autocomplete/commit/759b642daaed763a11c59c8c22994247574f6555))
* Support `OFFSET` for `PostgreSQL` ([#71](https://github.com/gravity-ui/websql-autocomplete/issues/71)) ([7834158](https://github.com/gravity-ui/websql-autocomplete/commit/78341587e1a4b42d007b2b04b893722550fbaf76))
* Support column names syntax for `INSERT` query ([#58](https://github.com/gravity-ui/websql-autocomplete/issues/58)) ([d95843a](https://github.com/gravity-ui/websql-autocomplete/commit/d95843a23189031450792552f5cbb001434954db))
* Support non-ordered `LIMIT` and `OFFSET` ([#76](https://github.com/gravity-ui/websql-autocomplete/issues/76)) ([049a46e](https://github.com/gravity-ui/websql-autocomplete/commit/049a46e54501df54857b53b31123801dc9fa2ff1))
* support suggestIndexes in AutocompleteParseResult ([#138](https://github.com/gravity-ui/websql-autocomplete/issues/138)) ([87fc174](https://github.com/gravity-ui/websql-autocomplete/commit/87fc1744918154760ad798abc3e45644cc114008))
* Support YQ dialect ([#173](https://github.com/gravity-ui/websql-autocomplete/issues/173)) ([24f51be](https://github.com/gravity-ui/websql-autocomplete/commit/24f51bea07d8fe657104ba12ae39cbd433457b3b))
* type generator and move to single package.json ([#93](https://github.com/gravity-ui/websql-autocomplete/issues/93)) ([a5ac8e9](https://github.com/gravity-ui/websql-autocomplete/commit/a5ac8e9f889e9c5b6419a160c4bb4cd97156946d))
* update parse result types, properly type parser-extension ([#103](https://github.com/gravity-ui/websql-autocomplete/issues/103)) ([8dcaf65](https://github.com/gravity-ui/websql-autocomplete/commit/8dcaf652d8fd2ccf89677d09c07bd932a2ce95b4))
* **YQL:** add table settings suggestions ([#190](https://github.com/gravity-ui/websql-autocomplete/issues/190)) ([fb450be](https://github.com/gravity-ui/websql-autocomplete/commit/fb450be94653d11522a8ee50c5efd3c1bd723789))
* **YQL:** improve suggestions calculation ([#184](https://github.com/gravity-ui/websql-autocomplete/issues/184)) ([71e9056](https://github.com/gravity-ui/websql-autocomplete/commit/71e90561ed3deb0d183da772139a4abc64981a67))
* **YQL:** suggest simple types in expressions ([#194](https://github.com/gravity-ui/websql-autocomplete/issues/194)) ([6c81be6](https://github.com/gravity-ui/websql-autocomplete/commit/6c81be6e5ad61dfbd95fe02d56ffd9ce82728f97))
* **YQL:** suggest view and external table in select statements ([#188](https://github.com/gravity-ui/websql-autocomplete/issues/188)) ([416248c](https://github.com/gravity-ui/websql-autocomplete/commit/416248c63826cfe48dc516f5125e177e7d642007))


### Bug Fixes

* add missing copyright ([ba6c8e6](https://github.com/gravity-ui/websql-autocomplete/commit/ba6c8e6b4d5731e925fdcddb76dbde6dd5c0657d))
* add option to esbuild to prevent constructor names being changed, causing conflicts in parsers ([#198](https://github.com/gravity-ui/websql-autocomplete/issues/198)) ([987468a](https://github.com/gravity-ui/websql-autocomplete/commit/987468a67e0923ba4d48af917fb86ebc5e7bf67a))
* broken psql super class throwing errors on function creation ([#136](https://github.com/gravity-ui/websql-autocomplete/issues/136)) ([c86c4a4](https://github.com/gravity-ui/websql-autocomplete/commit/c86c4a4bd25b5adc10abd33149e95819b954858f))
* export specific database autocomplete results, update project structure, make index.ts handle only exporting ([#152](https://github.com/gravity-ui/websql-autocomplete/issues/152)) ([b426a40](https://github.com/gravity-ui/websql-autocomplete/commit/b426a4002a242e324c3c083c4f3b31699f67170b))
* fix 'DROP INDEX test_index |' suggesting even more indexes ([#142](https://github.com/gravity-ui/websql-autocomplete/issues/142)) ([36d92fb](https://github.com/gravity-ui/websql-autocomplete/commit/36d92fbb5930c6dbb68a6eddd42f7f61ba136e4f))
* fix accidentally renamed yy.parser field ([40cd3c6](https://github.com/gravity-ui/websql-autocomplete/commit/40cd3c6e7bd431db65d249aa7aa0daa1bd3ab31c))
* fix ci test script ([a065c27](https://github.com/gravity-ui/websql-autocomplete/commit/a065c27f03478b4a0a61bed17059330bb47ab573))
* fix column suggestions for delete statement ([#27](https://github.com/gravity-ui/websql-autocomplete/issues/27)) ([7d5c916](https://github.com/gravity-ui/websql-autocomplete/commit/7d5c91674554f98b5e05e0f50becd1c80abaed01))
* fix genericAutocompleteParser.test.ts tests ([0f8b51c](https://github.com/gravity-ui/websql-autocomplete/commit/0f8b51c09b0efe2d4807e1118c949f03647dfa10))
* fix src/parsing/test/testing.ts type error ([240b6c4](https://github.com/gravity-ui/websql-autocomplete/commit/240b6c4c7ae168035059d57c55e8e4e4a60641a8))
* fixed antlr4ng version ([#21](https://github.com/gravity-ui/websql-autocomplete/issues/21)) ([69bfc7e](https://github.com/gravity-ui/websql-autocomplete/commit/69bfc7e2abec768d5c5b3e28611bde5b87fe63ae))
* make engine text reliable ([#109](https://github.com/gravity-ui/websql-autocomplete/issues/109)) ([ad88671](https://github.com/gravity-ui/websql-autocomplete/commit/ad88671e3a66c58cb9625427635987be5dac9fe8))
* move parsers/test/testings.js to parsers/test/testing.ts ([a803a58](https://github.com/gravity-ui/websql-autocomplete/commit/a803a58b3c092ef34a871e19de8e86cfb408bdb4))
* move patch-generated.sh to scripts ([#155](https://github.com/gravity-ui/websql-autocomplete/issues/155)) ([2355993](https://github.com/gravity-ui/websql-autocomplete/commit/2355993e735ef12c121bd16760ac0926124cb5a5))
* package name ([#124](https://github.com/gravity-ui/websql-autocomplete/issues/124)) ([a754194](https://github.com/gravity-ui/websql-autocomplete/commit/a754194f668a8e415daf432d5cf3faf21e2333a9))
* postgresql alter view columns suggestions ([#134](https://github.com/gravity-ui/websql-autocomplete/issues/134)) ([ed60a24](https://github.com/gravity-ui/websql-autocomplete/commit/ed60a24e20158ab1baa2bd62ada4551b8e0f88bf))
* remove aceRegex, parserFileRegex from babel, move root directories to src ([4cde182](https://github.com/gravity-ui/websql-autocomplete/commit/4cde18276202eaae83d558d11cee9a0c7cf0c79f))
* remove duplicate `SubQuery` interface ([#113](https://github.com/gravity-ui/websql-autocomplete/issues/113)) ([4510693](https://github.com/gravity-ui/websql-autocomplete/commit/451069325ad04db77dd9cef70c19d508e54a349c))
* remove unnecessary files from babel.config.js, move it to babel.config.json, remove some deps ([291bd96](https://github.com/gravity-ui/websql-autocomplete/commit/291bd96abcff781c4011f50508db6802afdb28ab))
* rename YQ and YQL functions ([#175](https://github.com/gravity-ui/websql-autocomplete/issues/175)) ([2d1feef](https://github.com/gravity-ui/websql-autocomplete/commit/2d1feef47b8ae2a99ed5c51e2d3825fa1ac21d9a))
* should not fail if entity id equals to keyword ([#177](https://github.com/gravity-ui/websql-autocomplete/issues/177)) ([23de65a](https://github.com/gravity-ui/websql-autocomplete/commit/23de65af04372c87cc7201c1ec055258eebf7970))
* skip comments in lexers; write tests for table names with comments; throw errors in certain places ([#27](https://github.com/gravity-ui/websql-autocomplete/issues/27)) ([6dab76f](https://github.com/gravity-ui/websql-autocomplete/commit/6dab76f792e711116833221d03e5c9649c5fc024))
* ts-ignore genericAutocompleteParser import ([8590b60](https://github.com/gravity-ui/websql-autocomplete/commit/8590b607eefe647af1da9f99c86679cd524a8924))
* update NOTICE.txt ([1735cd1](https://github.com/gravity-ui/websql-autocomplete/commit/1735cd1d4518e94a29bde12207a40b804bd64f5f))
* **YQL:** should not suggest columns after FROM keyword ([#179](https://github.com/gravity-ui/websql-autocomplete/issues/179)) ([df467c5](https://github.com/gravity-ui/websql-autocomplete/commit/df467c51eda3e0a13d34266f795ac4213c0d4d3c))
* **YQL:** suggest entity settings as YQLEntity ([#192](https://github.com/gravity-ui/websql-autocomplete/issues/192)) ([fb478ce](https://github.com/gravity-ui/websql-autocomplete/commit/fb478cef1bf639e9e12ae3d4e5e3fa6f67a8fbc1))

## [10.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v9.1.1...v10.0.0) (2024-07-09)


### ⚠ BREAKING CHANGES

* modular assembly ([#196](https://github.com/gravity-ui/websql-autocomplete/pull/196)) ([1e8ff53](https://github.com/gravity-ui/websql-autocomplete/commit/1e8ff53ec4492f76c212f3e993d34db22fe49be7))

## [9.1.1](https://github.com/gravity-ui/websql-autocomplete/compare/v9.1.0...v9.1.1) (2024-06-26)


### Bug Fixes

* add option to esbuild to prevent constructor names being changed, causing conflicts in parsers ([#198](https://github.com/gravity-ui/websql-autocomplete/issues/198)) ([987468a](https://github.com/gravity-ui/websql-autocomplete/commit/987468a67e0923ba4d48af917fb86ebc5e7bf67a))

## [9.1.0](https://github.com/gravity-ui/websql-autocomplete/compare/v9.0.0...v9.1.0) (2024-06-06)


### Features

* **YQL:** suggest simple types in expressions ([#194](https://github.com/gravity-ui/websql-autocomplete/issues/194)) ([6c81be6](https://github.com/gravity-ui/websql-autocomplete/commit/6c81be6e5ad61dfbd95fe02d56ffd9ce82728f97))

## [9.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v8.4.0...v9.0.0) (2024-06-04)


### ⚠ BREAKING CHANGES

* **YQL:** rename suggestTableSettings to suggestEntitySettings with type YQLEntity ([#192](https://github.com/gravity-ui/websql-autocomplete/issues/192)) ([fb478ce](https://github.com/gravity-ui/websql-autocomplete/commit/fb478cef1bf639e9e12ae3d4e5e3fa6f67a8fbc1))

## [8.4.0](https://github.com/gravity-ui/websql-autocomplete/compare/v8.3.0...v8.4.0) (2024-05-31)


### Features

* **YQL:** add table settings suggestions ([#190](https://github.com/gravity-ui/websql-autocomplete/issues/190)) ([fb450be](https://github.com/gravity-ui/websql-autocomplete/commit/fb450be94653d11522a8ee50c5efd3c1bd723789))

## [8.3.0](https://github.com/gravity-ui/websql-autocomplete/compare/v8.2.0...v8.3.0) (2024-05-31)


### Features

* **YQL:** suggest view and external table in select statements ([#188](https://github.com/gravity-ui/websql-autocomplete/issues/188)) ([416248c](https://github.com/gravity-ui/websql-autocomplete/commit/416248c63826cfe48dc516f5125e177e7d642007))

## [8.2.0](https://github.com/gravity-ui/websql-autocomplete/compare/v8.1.0...v8.2.0) (2024-05-30)


### Features

* **YQL:** improve suggestions calculation ([#184](https://github.com/gravity-ui/websql-autocomplete/issues/184)) ([71e9056](https://github.com/gravity-ui/websql-autocomplete/commit/71e90561ed3deb0d183da772139a4abc64981a67))

## [8.1.0](https://github.com/gravity-ui/websql-autocomplete/compare/v8.0.2...v8.1.0) (2024-05-02)


### Features

* suggest multiple tables with same name and different aliases ([#182](https://github.com/gravity-ui/websql-autocomplete/issues/182)) ([1d3fb82](https://github.com/gravity-ui/websql-autocomplete/commit/1d3fb820f647c5ba667ff664bd81667c5a7f705f))

## [8.0.2](https://github.com/gravity-ui/websql-autocomplete/compare/v8.0.1...v8.0.2) (2024-03-13)


### Bug Fixes

* **YQL:** should not suggest columns after FROM keyword ([#179](https://github.com/gravity-ui/websql-autocomplete/issues/179)) ([df467c5](https://github.com/gravity-ui/websql-autocomplete/commit/df467c51eda3e0a13d34266f795ac4213c0d4d3c))

## [8.0.1](https://github.com/gravity-ui/websql-autocomplete/compare/v8.0.0...v8.0.1) (2024-03-11)


### Bug Fixes

* should not suggest excess keywords if entity id equals to keyword in YQL autocomplete ([#177](https://github.com/gravity-ui/websql-autocomplete/issues/177)) ([23de65a](https://github.com/gravity-ui/websql-autocomplete/commit/23de65af04372c87cc7201c1ec055258eebf7970))

## [8.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v7.0.0...v8.0.0) (2024-03-11)


### ⚠ BREAKING CHANGES

* Support YQ dialect ([#173](https://github.com/gravity-ui/websql-autocomplete/issues/173))

### Features

* Support YQ dialect ([#173](https://github.com/gravity-ui/websql-autocomplete/issues/173)) ([24f51be](https://github.com/gravity-ui/websql-autocomplete/commit/24f51bea07d8fe657104ba12ae39cbd433457b3b))


### Bug Fixes

* rename YQ and YQL functions ([#175](https://github.com/gravity-ui/websql-autocomplete/issues/175)) ([2d1feef](https://github.com/gravity-ui/websql-autocomplete/commit/2d1feef47b8ae2a99ed5c51e2d3825fa1ac21d9a))

## [7.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v6.1.0...v7.0.0) (2024-03-06)


### ⚠ BREAKING CHANGES

* Add YQL language autocomplete ([#170](https://github.com/gravity-ui/websql-autocomplete/issues/170))

### Features

* Add YQL language autocomplete ([#170](https://github.com/gravity-ui/websql-autocomplete/issues/170)) ([7f07f3e](https://github.com/gravity-ui/websql-autocomplete/commit/7f07f3ef48b6ce6dcf00522d328732066aebadd4))

## [6.1.0](https://github.com/gravity-ui/websql-autocomplete/compare/v6.0.0...v6.1.0) (2024-03-05)


### Features

* Add role suggestions for MySql ([#165](https://github.com/gravity-ui/websql-autocomplete/issues/165)) ([eba7ac3](https://github.com/gravity-ui/websql-autocomplete/commit/eba7ac370f77f4bf39a102f449134fb0c164a162))
* Add user suggestions for MySql, role suggestions for PostgreSql ([#168](https://github.com/gravity-ui/websql-autocomplete/issues/168)) ([f329f54](https://github.com/gravity-ui/websql-autocomplete/commit/f329f54dc062a35a061e9b1de483b9d499b03b2a))

## [6.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v5.1.0...v6.0.0) (2024-02-28)


### ⚠ BREAKING CHANGES

* add table context to constraint suggestions ([#159](https://github.com/gravity-ui/websql-autocomplete/issues/159))

### Features

* add table context to constraint suggestions ([#159](https://github.com/gravity-ui/websql-autocomplete/issues/159)) ([23ee8dd](https://github.com/gravity-ui/websql-autocomplete/commit/23ee8dd9b68e9763783bca97d5ae3431ffd1c4f1))

## [5.1.0](https://github.com/gravity-ui/websql-autocomplete/compare/v5.0.0...v5.1.0) (2024-02-28)


### Features

* Add database suggestions ([#161](https://github.com/gravity-ui/websql-autocomplete/issues/161)) ([eaba501](https://github.com/gravity-ui/websql-autocomplete/commit/eaba50135b74492759e977070a5b8f2cbfec0e50))
* Add schema suggestions for postgresql ([#157](https://github.com/gravity-ui/websql-autocomplete/issues/157)) ([ceb9580](https://github.com/gravity-ui/websql-autocomplete/commit/ceb95805f3de0e2a1d4ce884ac47eac792a19bca))


### Bug Fixes

* Properly export specific database autocomplete results ([#152](https://github.com/gravity-ui/websql-autocomplete/issues/152)) ([b426a40](https://github.com/gravity-ui/websql-autocomplete/commit/b426a4002a242e324c3c083c4f3b31699f67170b))

## [5.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v4.3.0...v5.0.0) (2024-02-21)


### ⚠ BREAKING CHANGES

* separate AutocompleteParseResult for different databases ([#148](https://github.com/gravity-ui/websql-autocomplete/issues/148))

### Features

* separate AutocompleteParseResult for different databases ([#148](https://github.com/gravity-ui/websql-autocomplete/issues/148)) ([34d5a2b](https://github.com/gravity-ui/websql-autocomplete/commit/34d5a2bdf17ae04267d3d4444753fd13cb57012b))

## [4.3.0](https://github.com/gravity-ui/websql-autocomplete/compare/v4.2.0...v4.3.0) (2024-02-19)


### Features

* add trigger suggestions to mysql, postgresql ([#139](https://github.com/gravity-ui/websql-autocomplete/issues/139)) ([f09f472](https://github.com/gravity-ui/websql-autocomplete/commit/f09f4725b8330d946f1c829eb4163822a69242d5))


### Bug Fixes

* fix 'DROP INDEX test_index |' suggesting even more indexes ([#142](https://github.com/gravity-ui/websql-autocomplete/issues/142)) ([36d92fb](https://github.com/gravity-ui/websql-autocomplete/commit/36d92fbb5930c6dbb68a6eddd42f7f61ba136e4f))

## [4.2.0](https://github.com/gravity-ui/websql-autocomplete/compare/v4.1.0...v4.2.0) (2024-02-16)


### Features

* support suggestIndexes in AutocompleteParseResult ([#138](https://github.com/gravity-ui/websql-autocomplete/issues/138)) ([87fc174](https://github.com/gravity-ui/websql-autocomplete/commit/87fc1744918154760ad798abc3e45644cc114008))


### Bug Fixes

* broken psql super class throwing errors on function creation ([#136](https://github.com/gravity-ui/websql-autocomplete/issues/136)) ([c86c4a4](https://github.com/gravity-ui/websql-autocomplete/commit/c86c4a4bd25b5adc10abd33149e95819b954858f))
* postgresql alter view columns suggestions ([#134](https://github.com/gravity-ui/websql-autocomplete/issues/134)) ([ed60a24](https://github.com/gravity-ui/websql-autocomplete/commit/ed60a24e20158ab1baa2bd62ada4551b8e0f88bf))

## [4.1.0](https://github.com/gravity-ui/websql-autocomplete/compare/v4.0.1...v4.1.0) (2024-02-15)


### Features

* suggest column aliases ([#127](https://github.com/gravity-ui/websql-autocomplete/issues/127)) ([2f338ca](https://github.com/gravity-ui/websql-autocomplete/commit/2f338caab338b901c30e23361b9304ed9e65308a))

## [4.0.1](https://github.com/gravity-ui/websql-autocomplete/compare/v4.0.0...v4.0.1) (2024-02-13)


### Bug Fixes

* package name ([#124](https://github.com/gravity-ui/websql-autocomplete/issues/124)) ([a754194](https://github.com/gravity-ui/websql-autocomplete/commit/a754194f668a8e415daf432d5cf3faf21e2333a9))

## [4.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v3.0.0...v4.0.0) (2024-02-13)


### ⚠ BREAKING CHANGES

* New version of autocomplete based on code completion on ANTLR4 grammars

## [3.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v2.1.0...v3.0.0) (2023-12-07)


### ⚠ BREAKING CHANGES

* Update interfaces, rename generic sql parser to mysql ([#118](https://github.com/gravity-ui/websql-autocomplete/issues/118))

### Bug Fixes

* make engine text reliable ([#109](https://github.com/gravity-ui/websql-autocomplete/issues/109)) ([ad88671](https://github.com/gravity-ui/websql-autocomplete/commit/ad88671e3a66c58cb9625427635987be5dac9fe8))
* remove duplicate `SubQuery` interface ([#113](https://github.com/gravity-ui/websql-autocomplete/issues/113)) ([4510693](https://github.com/gravity-ui/websql-autocomplete/commit/451069325ad04db77dd9cef70c19d508e54a349c))

## [2.1.0](https://github.com/gravity-ui/websql-autocomplete/compare/v2.0.0...v2.1.0) (2023-12-05)


### Features

* add CommonSuggestion and JoinsSuggestion types, migrate postgresql tests to typescript ([#105](https://github.com/gravity-ui/websql-autocomplete/issues/105)) ([36b291c](https://github.com/gravity-ui/websql-autocomplete/commit/36b291c28bc0dfd69e46feac07da6812a85831e4))
* add eslint ci, fix eslint errors ([#97](https://github.com/gravity-ui/websql-autocomplete/issues/97)) ([2c66e7a](https://github.com/gravity-ui/websql-autocomplete/commit/2c66e7a46b5e790557efe2b53ae4a207e7b1b4d1))
* define database StatementPart, add identifierChain to TablesSuggestion, remove useless totos, migrate drop tests to typescript ([#96](https://github.com/gravity-ui/websql-autocomplete/issues/96)) ([47a18c2](https://github.com/gravity-ui/websql-autocomplete/commit/47a18c272db9f00dad2a0823eb2c5bf000151866))
* define FiltersSuggestion, FunctionsSuggestion, ValuesSuggestion, Colref, migrate update table tests to typescript ([#99](https://github.com/gravity-ui/websql-autocomplete/issues/99)) ([4b99563](https://github.com/gravity-ui/websql-autocomplete/commit/4b995634e1a82664f7eae1df91b48763c5a26eb9))
* define suggestColRefKeywords, suggestEngines, add typechecking ci ([#95](https://github.com/gravity-ui/websql-autocomplete/issues/95)) ([f09f370](https://github.com/gravity-ui/websql-autocomplete/commit/f09f370319d0b8b13cffa6d0bd6d8c0269008b95))
* define useDatabase, add prependQuestionMark and prependFrom to DatabasesSuggestion, migrate use and set tests to typescript ([#101](https://github.com/gravity-ui/websql-autocomplete/issues/101)) ([7ec60ae](https://github.com/gravity-ui/websql-autocomplete/commit/7ec60ae846df2253a5696e9acbe0dc341cc605e2))
* extend StatementPart, make TestCase fields optional, migrate location tests to typescript and move files to select folder ([#107](https://github.com/gravity-ui/websql-autocomplete/issues/107)) ([8b6b2c4](https://github.com/gravity-ui/websql-autocomplete/commit/8b6b2c43bc17b71ff83b5fcedc045dc68b9014d6))
* migrate truncate table tests to typescript ([#102](https://github.com/gravity-ui/websql-autocomplete/issues/102)) ([7d7d38b](https://github.com/gravity-ui/websql-autocomplete/commit/7d7d38be65adec188d1f51c7679700779b3833c7))
* move AggregateFunctionsSuggestion to a separate interface, refactor general parser create tests ([#92](https://github.com/gravity-ui/websql-autocomplete/issues/92)) ([08e8c26](https://github.com/gravity-ui/websql-autocomplete/commit/08e8c26982ec2e62a3951234f0db014329070741))
* type generator and move to single package.json ([#93](https://github.com/gravity-ui/websql-autocomplete/issues/93)) ([a5ac8e9](https://github.com/gravity-ui/websql-autocomplete/commit/a5ac8e9f889e9c5b6419a160c4bb4cd97156946d))
* update parse result types, properly type parser-extension ([#103](https://github.com/gravity-ui/websql-autocomplete/issues/103)) ([8dcaf65](https://github.com/gravity-ui/websql-autocomplete/commit/8dcaf652d8fd2ccf89677d09c07bd932a2ce95b4))

## [2.0.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.22.0...v2.0.0) (2023-11-28)


### ⚠ BREAKING CHANGES

* rename sql-autocomplete-parsers to websql-autocomplete ([#88](https://github.com/gravity-ui/websql-autocomplete/issues/88))

### Features

* rename sql-autocomplete-parsers to websql-autocomplete ([#88](https://github.com/gravity-ui/websql-autocomplete/issues/88)) ([123d585](https://github.com/gravity-ui/websql-autocomplete/commit/123d5852c76c643a67d0cad1768c8b1e4abba188))

## [1.22.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.21.0...v1.22.0) (2023-09-05)


### Features

* actualise clickhouse data types ([#82](https://github.com/gravity-ui/websql-autocomplete/issues/82)) ([e16505a](https://github.com/gravity-ui/websql-autocomplete/commit/e16505aef7bfdcc5d1cdf5d99c18ea24f1a74c22))

## [1.21.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.20.0...v1.21.0) (2023-08-11)


### Features

* Support `CREATE TABLE` with `ENGINE` syntax for ClickHouse ([#78](https://github.com/gravity-ui/websql-autocomplete/issues/78)) ([759b642](https://github.com/gravity-ui/websql-autocomplete/commit/759b642daaed763a11c59c8c22994247574f6555))

## [1.20.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.19.0...v1.20.0) (2023-08-10)


### Features

* Support non-ordered `LIMIT` and `OFFSET` ([#76](https://github.com/gravity-ui/websql-autocomplete/issues/76)) ([049a46e](https://github.com/gravity-ui/websql-autocomplete/commit/049a46e54501df54857b53b31123801dc9fa2ff1))

## [1.19.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.18.0...v1.19.0) (2023-08-09)


### Features

* Support `OFFSET` for `PostgreSQL` ([#71](https://github.com/gravity-ui/websql-autocomplete/issues/71)) ([7834158](https://github.com/gravity-ui/websql-autocomplete/commit/78341587e1a4b42d007b2b04b893722550fbaf76))

## [1.18.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.17.0...v1.18.0) (2023-08-08)


### Features

* Separate PostgreSQL parser ([#69](https://github.com/gravity-ui/websql-autocomplete/issues/69)) ([a005dce](https://github.com/gravity-ui/websql-autocomplete/commit/a005dcebab879c50c5ff7cc2f56f8d3edd2fe63d))

## [1.17.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.16.0...v1.17.0) (2023-08-07)


### Features

* handle UPDATE errors with SET ([#65](https://github.com/gravity-ui/websql-autocomplete/issues/65)) ([ceb0dff](https://github.com/gravity-ui/websql-autocomplete/commit/ceb0dffcbcb439c680457efacfc5f74563a55b1e))

## [1.16.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.15.0...v1.16.0) (2023-08-07)


### Features

* Handle errors for `INSERT` template ([#62](https://github.com/gravity-ui/websql-autocomplete/issues/62)) ([c6af390](https://github.com/gravity-ui/websql-autocomplete/commit/c6af390f45878afaf577eb65b98d841b1f00286b))

## [1.15.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.14.0...v1.15.0) (2023-07-26)


### Features

* Column suggestions for `INSERT` query ([#60](https://github.com/gravity-ui/websql-autocomplete/issues/60)) ([fd02a6b](https://github.com/gravity-ui/websql-autocomplete/commit/fd02a6b421cea3b315958d8abd043e8e095bd2a7))

## [1.14.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.13.0...v1.14.0) (2023-07-24)


### Features

* Support column names syntax for `INSERT` query ([#58](https://github.com/gravity-ui/websql-autocomplete/issues/58)) ([d95843a](https://github.com/gravity-ui/websql-autocomplete/commit/d95843a23189031450792552f5cbb001434954db))

## [1.13.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.12.0...v1.13.0) (2023-07-14)


### Features

* move npm ci installation for generator to a script ([#54](https://github.com/gravity-ui/websql-autocomplete/issues/54)) ([dadded4](https://github.com/gravity-ui/websql-autocomplete/commit/dadded40e5695953c59fe0cc829e2fac3a7099b5))
* remove postinstall script, update readme.md ([#53](https://github.com/gravity-ui/websql-autocomplete/issues/53)) ([2ac6e20](https://github.com/gravity-ui/websql-autocomplete/commit/2ac6e20f066ba72d023aff7d4288bc6d1dbeb59c))
* restore postinstall script, make it execute only when we're not installed as dependency ([#56](https://github.com/gravity-ui/websql-autocomplete/issues/56)) ([16a7efb](https://github.com/gravity-ui/websql-autocomplete/commit/16a7efbf886bbd6fc28a14c991a872ca622f8c0a))

## [1.12.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.11.0...v1.12.0) (2023-07-14)


### Features

* remove debug field from Parser.parseSql ([#51](https://github.com/gravity-ui/websql-autocomplete/issues/51)) ([304cc96](https://github.com/gravity-ui/websql-autocomplete/commit/304cc96ed052652b7f939b31d6cac86d517cba7a))

## [1.11.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.10.0...v1.11.0) (2023-07-11)


### Features

* specify locations in ParseResult ([#48](https://github.com/gravity-ui/websql-autocomplete/issues/48)) ([bf348b8](https://github.com/gravity-ui/websql-autocomplete/commit/bf348b8efb1d7b2a5c44787299aaf57ae916e7ad))

## [1.10.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.9.0...v1.10.0) (2023-07-10)


### Features

* expand suggestTables interface ([#45](https://github.com/gravity-ui/websql-autocomplete/issues/45)) ([e312358](https://github.com/gravity-ui/websql-autocomplete/commit/e312358d031de933a89c202d917c582fc63124a5))

## [1.9.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.8.0...v1.9.0) (2023-07-07)


### Features

* add and integrate suggestSnippet method ([#43](https://github.com/gravity-ui/websql-autocomplete/issues/43)) ([f1eb102](https://github.com/gravity-ui/websql-autocomplete/commit/f1eb102fa17ee14500cf946b6895b63abef5b603))

## [1.8.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.7.0...v1.8.0) (2023-06-23)


### Features

* support explain statement ([#30](https://github.com/gravity-ui/websql-autocomplete/issues/30)) ([27aef7c](https://github.com/gravity-ui/websql-autocomplete/commit/27aef7c00d5a3fb247d9ddb55819607881ba8c30))

## [1.7.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.6.1...v1.7.0) (2023-06-21)


### Features

* specify type for ParseResult.suggestAggregateFunctions ([#33](https://github.com/gravity-ui/websql-autocomplete/issues/33)) ([b9e9dbd](https://github.com/gravity-ui/websql-autocomplete/commit/b9e9dbdce90582e46093d3e31b30beb55a1ca31b))
* specify type for suggestColumnAliases ([#36](https://github.com/gravity-ui/websql-autocomplete/issues/36)) ([d18fcd3](https://github.com/gravity-ui/websql-autocomplete/commit/d18fcd3bcd595bd18a09001ec0117c125a8ef0e5))

## [1.6.1](https://github.com/gravity-ui/websql-autocomplete/compare/v1.6.0...v1.6.1) (2023-06-15)


### Bug Fixes

* fix column suggestions for delete statement ([#27](https://github.com/gravity-ui/websql-autocomplete/issues/27)) ([7d5c916](https://github.com/gravity-ui/websql-autocomplete/commit/7d5c91674554f98b5e05e0f50becd1c80abaed01))

## [1.6.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.5.0...v1.6.0) (2023-06-07)


### Features

* add newline just for the release ([#25](https://github.com/gravity-ui/websql-autocomplete/issues/25)) ([cc95a05](https://github.com/gravity-ui/websql-autocomplete/commit/cc95a056c5077d1ede897a8d071b958103d216cf))

## [1.5.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.4.0...v1.5.0) (2023-06-06)


### Features

* add delete statement suggestions ([34f22e0](https://github.com/gravity-ui/websql-autocomplete/commit/34f22e06f3db322418c6f706eec5d79a13b4b018)), ([d4ba052](https://github.com/gravity-ui/websql-autocomplete/commit/d4ba052db182bf1719c3d288de7cf1fcaca80e16))

## [1.4.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.3.0...v1.4.0) (2023-06-06)


### Features

* add alias for table interface ([12920a3](https://github.com/gravity-ui/websql-autocomplete/commit/12920a37e79d0a2021e90d22780bddc2ee83e3f9))

## [1.3.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.2.0...v1.3.0) (2023-06-06)


### Features

* expand ParseResult interface ([7235b0d](https://github.com/gravity-ui/websql-autocomplete/commit/7235b0dce5d27a2385c1253f07fce2fd2ae56922))

## [1.2.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.1.1...v1.2.0) (2023-06-05)


### Features

* support 'DELETE FROM mytable' for genericAutocompleteParser (65e0c06)

## [1.1.1](https://github.com/gravity-ui/websql-autocomplete/compare/v1.1.0...v1.1.1) (2023-06-01)


### Bug Fixes

* ts-ignore genericAutocompleteParser import ([8590b60](https://github.com/gravity-ui/websql-autocomplete/commit/8590b607eefe647af1da9f99c86679cd524a8924))

## [1.1.0](https://github.com/gravity-ui/websql-autocomplete/compare/v1.0.0...v1.1.0) (2023-06-01)


### Features

* bump version ([d0c0038](https://github.com/gravity-ui/websql-autocomplete/commit/d0c00380d6c54da1793e8a09715a7790601ff968))

## 1.0.0 (2023-06-01)


### Features

* add cursorSymbol to src/parsing/index.ts ([d66d357](https://github.com/gravity-ui/websql-autocomplete/commit/d66d357b9807183cc1163e833902ff7ab76c217e))
* make debug parameter for parseGenericSql optional ([631811b](https://github.com/gravity-ui/websql-autocomplete/commit/631811b3da59a66706bc8711a3ddbbb5a2871cf6))


### Bug Fixes

* fix genericAutocompleteParser.test.ts tests ([0f8b51c](https://github.com/gravity-ui/websql-autocomplete/commit/0f8b51c09b0efe2d4807e1118c949f03647dfa10))
* fix src/parsing/test/testing.ts type error ([240b6c4](https://github.com/gravity-ui/websql-autocomplete/commit/240b6c4c7ae168035059d57c55e8e4e4a60641a8))
* move parsers/test/testings.js to parsers/test/testing.ts ([a803a58](https://github.com/gravity-ui/websql-autocomplete/commit/a803a58b3c092ef34a871e19de8e86cfb408bdb4))
* remove aceRegex, parserFileRegex from babel, move root directories to src ([4cde182](https://github.com/gravity-ui/websql-autocomplete/commit/4cde18276202eaae83d558d11cee9a0c7cf0c79f))
* remove unnecessary files from babel.config.js, move it to babel.config.json, remove some deps ([291bd96](https://github.com/gravity-ui/websql-autocomplete/commit/291bd96abcff781c4011f50508db6802afdb28ab))
* update NOTICE.txt ([1735cd1](https://github.com/gravity-ui/websql-autocomplete/commit/1735cd1d4518e94a29bde12207a40b804bd64f5f))
