import {build} from 'esbuild';

const databases = ['clickhouse', 'mysql', 'postgresql', 'yql', 'redis', 'trino'];

const sharedOptions = {
    external: ['antlr4ng', 'antlr4-c3'],
    bundle: true,
    minify: true,
    keepNames: true,
    tsconfig: './tsconfig.build.json',
    entryPoints: [
        ...databases.map((database) => `src/autocomplete/databases/${database}/index.ts`),
        'src/autocomplete/shared/autocomplete-types.ts',
    ],
    outbase: 'src/autocomplete',
    outdir: 'dist',
};

build({
    ...sharedOptions,
    format: 'esm',
    splitting: true,
});

build({
    ...sharedOptions,
    format: 'cjs',
    outExtension: {'.js': '.cjs'},
    platform: 'node',
});
