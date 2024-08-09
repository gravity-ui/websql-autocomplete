import {SqlAutocompleteResult, TableIndexSuggestion} from '../../shared/autocomplete-types';
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
    shouldSuggestColumnAliases?: boolean;
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
    | 'tableIndex'
    | 'topicConsumer';

export interface YqlAutocompleteResult extends SqlAutocompleteResult {
    suggestTableIndexes?: TableIndexSuggestion;
    suggestEntity?: YQLEntity[];
    suggestSimpleTypes?: boolean;
    suggestUdfs?: boolean;
    suggestWindowFunctions?: boolean;
    suggestTableFunctions?: boolean;
    suggestPragmas?: boolean;
    suggestTableHints?: string;
    suggestEntitySettings?: YQLEntity;
}

export interface YqlTokenizeResult extends TokenizeResult {}
