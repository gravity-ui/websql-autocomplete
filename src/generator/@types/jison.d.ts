declare module 'jison/lib/cli.js' {
    export interface JisonOptions {
        file: string;
        lexfile?: string;
        json?: boolean;
        outfile?: string;
        moduleName?: string;
        debug?: boolean;
        'parser-type'?: string;
        'module-type'?: string;
    }

    interface JisonCli {
        main(options: JisonOptions): void;
    }

    const jisonCli: JisonCli;

    export default jisonCli;
}
