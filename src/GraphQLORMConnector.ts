import {
  DataSourceRequest,
  GraphQLConnector,
  SortInfo,
  SortInfoOrder
} from 'webpanel-data';
import { camelize, singularize, underscore } from 'inflection';

export class GraphQLORMConnector extends GraphQLConnector {
  public inputTypeName(request: DataSourceRequest): string {
    return `${singularize(camelize(request.name, false))}${camelize(
      request.operation
    )}Input`;
  }

  public sortFormatName(sort: SortInfo): string {
    return underscore(sort.columnKey, true) + sort.order == SortInfoOrder.ascend
      ? '_ASC'
      : '_DESC';
  }
}
