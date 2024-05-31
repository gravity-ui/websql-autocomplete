import {YqlAutocompleteResult} from '../../autocomplete-types';

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
    | 'suggestTableSettings'
>;

export interface InternalSuggestions
    extends YqlAutocompleteResultPartial,
        Partial<Record<EntitySuggestion, boolean>> {
    shouldSuggestTableIndexes?: boolean;
    shouldSuggestColumns?: boolean;
    shouldSuggestColumnAliases?: boolean;
}
