import { DataSourceRequest, GraphQLConnector, SortInfo } from 'webpanel-data';
import { SortInfoValue } from 'webpanel-data/lib/connectors/graphql/GraphQLQuery';
export declare class GraphQLORMConnector extends GraphQLConnector {
    inputTypeName(request: DataSourceRequest): string;
    sortFormatName(sort: SortInfo): SortInfoValue;
}
