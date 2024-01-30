import {build} from 'esbuild';

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    format: 'esm',
    outfile: 'dist/index.js',
    tsconfig: './tsconfig.build.json',
});
