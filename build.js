/* eslint-disable */
import {build} from 'esbuild';
import npmDts from 'npm-dts';

new npmDts.Generator({
    entry: 'src/index.ts',
    output: 'dist/index.d.ts',
}).generate();

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    outfile: 'dist/index.js',
    tsconfig: './tsconfig.build.json',
});
