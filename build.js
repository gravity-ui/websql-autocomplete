import {build} from 'esbuild';

build({
    entryPoints: ['src/index.ts'],
    external: ['antlr4ng', 'antlr4-c3'],
    bundle: true,
    minify: true,
    format: 'esm',
    outfile: 'dist/index.js',
    tsconfig: './tsconfig.build.json',
});
