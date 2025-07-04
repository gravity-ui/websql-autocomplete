import {IStatementsVisitor, StatementPosition} from '../../shared';
import {StatementsContext} from './generated/MySqlParser';
import {MySqlParserVisitor} from './generated/MySqlParserVisitor';

export class MySqlStatementsVisitor
    extends MySqlParserVisitor<unknown>
    implements IStatementsVisitor
{
    statementPositions: StatementPosition[] = [];
    lastTokenIndex = 0;

    visitStatements = (context: StatementsContext): void => {
        if (!context.start || !context.stop) {
            return;
        }

        // eslint-disable-next-line new-cap
        const semi = context.SEMI();

        this.statementPositions.push({
            startIndex: context.start.start,
            endIndex: semi
                ? semi.symbol.start + 1
                : context.stop.start + (context.stop.text?.length ?? 0),
        });

        const otherStatements = context.statements();
        if (otherStatements) {
            this.visitStatements(otherStatements);
        } else {
            this.lastTokenIndex = semi ? semi.symbol.tokenIndex : context.stop.tokenIndex;
        }
    };
}
