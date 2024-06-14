import {build} from 'esbuild';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
    await build({
        entryPoints: ['src/autocomplete/databases/clickhouse/index.ts'],
        external: ['antlr4ng', 'antlr4-c3'],
        bundle: true,
        minify: true,
        keepNames: true,format: 'esm',
        outfile: 'dist/clickhouse/index.js',
        tsconfig: './tsconfig.build.json',
    });
})();
