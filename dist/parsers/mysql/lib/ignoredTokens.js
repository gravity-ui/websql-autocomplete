import { MySqlParser } from '../generated/MySqlParser.js';
// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens() {
    const tokens = [];
    const firstOperatorIndex = MySqlParser.VAR_ASSIGN;
    const lastOperatorIndex = MySqlParser.GLOBAL_ID;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        // We actually want Star to appear in autocomplete
        if (i !== MySqlParser.STAR) {
            tokens.push(i);
        }
    }
    const firstCharsetIndex = MySqlParser.ARMSCII8;
    const lastCharsetIndex = MySqlParser.UTF8MB4;
    for (let i = firstCharsetIndex; i <= lastCharsetIndex; i++) {
        tokens.push(i);
    }
    return tokens;
}
export const ignoredTokens = new Set(getIgnoredTokens());
