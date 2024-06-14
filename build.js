import {build} from 'esbuild';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
    const databases = ['clickhouse', 'mysql', 'postgresql', 'yql'];

    for (const database of databases) {
        await build({
            entryPoints: [`src/autocomplete/databases/${database}/index.ts`],
            external: ['antlr4ng', 'antlr4-c3'],
            bundle: true,
            minify: true,
            keepNames: true,
            format: 'esm',
            outfile: `dist/databases/${database}/index.js`,
            tsconfig: './tsconfig.build.json',
        });
    }
})();
