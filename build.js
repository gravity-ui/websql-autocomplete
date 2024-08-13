import {build} from 'esbuild';

const databases = ['clickhouse', 'mysql', 'postgresql', 'yql', 'redis'];

build({
    external: ['antlr4ng', 'antlr4-c3'],
    bundle: true,
    minify: true,
    keepNames: true,
    format: 'esm',
    tsconfig: './tsconfig.build.json',
    entryPoints: [
        ...databases.map((database) => `src/autocomplete/databases/${database}/index.ts`),
        'src/autocomplete/shared/autocomplete-types.ts',
    ],
    outbase: 'src/autocomplete',
    outdir: 'dist',
    splitting: true,
});
