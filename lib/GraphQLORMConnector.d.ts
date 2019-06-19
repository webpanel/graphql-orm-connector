import { DataSourceRequest, GraphQLConnector, SortInfo } from 'webpanel-data';
export declare class GraphQLORMConnector extends GraphQLConnector {
    inputTypeName(request: DataSourceRequest): string;
    sortFormatName(sort: SortInfo): string;
}
