import {
    ColumnSuggestion,
    SqlAutocompleteResult,
    TableIndexSuggestion,
    VariableSuggestion,
} from '../../shared/autocomplete-types';
import {TokenizeResult} from '../../shared/tokenize';

export type EntitySuggestion =
    | 'suggestObject'
    | 'suggestTableStore'
    | 'suggestReplication'
    | 'suggestExternalTable'
    | 'suggestTopic'
    | 'suggestUser'
    | 'suggestGroup'
    | 'suggestView'
    | 'suggestExternalDatasource'
    | 'suggestStreamingQuery'
    | 'suggestTable';

type YqlAutocompleteResultPartial = Pick<
    YqlAutocompleteResult,
    | 'suggestAggregateFunctions'
    | 'suggestFunctions'
    | 'suggestSimpleTypes'
    | 'suggestUdfs'
    | 'suggestWindowFunctions'
    | 'suggestTableFunctions'
    | 'suggestPragmas'
    | 'suggestTableHints'
    | 'suggestEntitySettings'
>;

export interface InternalSuggestions
    extends YqlAutocompleteResultPartial,
        Partial<Record<EntitySuggestion, boolean>> {
    shouldSuggestTableIndexes?: boolean;
    shouldSuggestColumns?: boolean;
    shouldSuggestAllColumns?: boolean;
    shouldSuggestColumnAliases?: boolean;
    shouldSuggestVariables?: boolean;
}

export type YQLEntity =
    | 'externalDataSource'
    | 'externalTable'
    | 'view'
    | 'object'
    | 'tableStore'
    | 'table'
    | 'replication'
    | 'topic'
    | 'group'
    | 'user'
    | 'streamingQuery'
    | 'tableIndex'
    | 'topicConsumer';

export type YQLColumnsSuggestion = ColumnSuggestion & {all?: boolean};

export interface YqlAutocompleteResult extends Omit<SqlAutocompleteResult, 'suggestColumns'> {
    suggestTableIndexes?: TableIndexSuggestion;
    suggestEntity?: YQLEntity[];
    suggestSimpleTypes?: boolean;
    suggestUdfs?: boolean;
    suggestWindowFunctions?: boolean;
    suggestTableFunctions?: boolean;
    suggestPragmas?: boolean;
    suggestTableHints?: string;
    suggestEntitySettings?: YQLEntity;
    suggestColumns?: YQLColumnsSuggestion;
    suggestVariables?: VariableSuggestion[];
}

export interface YqlTokenizeResult extends TokenizeResult {}
