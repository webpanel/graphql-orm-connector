import { DataSourceRequest, GraphQLConnector, SortInfo } from 'webpanel-data';
import { SortInfoValue } from 'webpanel-data/lib/connectors/graphql/GraphQLQuery';
export declare class GraphQLORMConnector extends GraphQLConnector {
    inputTypeName(request: DataSourceRequest): string;
    transformFilterObject(request: DataSourceRequest): {
        [key: string]: any;
    };
    sortFormatName(sort: SortInfo): SortInfoValue;
}
