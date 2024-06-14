import {build} from 'esbuild';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
    const baseConfig = {
        external: ['antlr4ng', 'antlr4-c3'],
        bundle: true,
        minify: true,
        format: 'esm',
        tsconfig: './tsconfig.build.json',
    };

    await build({
        ...baseConfig,
        entryPoints: [`src/autocomplete/index.ts`],
        outfile: `dist/index.js`,
    });

    const databases = ['clickhouse', 'mysql', 'postgresql', 'yql'];

    for (const database of databases) {
        await build({
            ...baseConfig,
            entryPoints: [`src/autocomplete/databases/${database}/index.ts`],
            outfile: `dist/databases/${database}/index.js`,
        });
    }
})();
