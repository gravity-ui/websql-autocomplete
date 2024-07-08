import {build} from 'esbuild';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
    const databases = ['clickhouse', 'mysql', 'postgresql', 'yql'];

    for (const database of databases) {
        await build({
            external: ['antlr4ng', 'antlr4-c3'],
            bundle: true,
            minify: true,
            keepNames: true,
            format: 'esm',
            tsconfig: './tsconfig.build.json',
            entryPoints: [`src/autocomplete/databases/${database}/index.ts`],
            outfile: `dist/databases/${database}/index.js`,
        });
    }
})();
