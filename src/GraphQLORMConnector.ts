import {
  DataSourceRequest,
  GraphQLConnector,
  SortInfo,
  SortInfoOrder
} from 'webpanel-data';
import { camelize, singularize } from 'inflection';

import { SortInfoValue } from 'webpanel-data/lib/connectors/graphql/GraphQLQuery';
import { set } from 'lodash';

export class GraphQLORMConnector extends GraphQLConnector {
  public inputTypeName(request: DataSourceRequest): string {
    return `${singularize(camelize(request.name, false))}${camelize(
      request.operation
    )}Input`;
  }

  public transformFilterObject(
    request: DataSourceRequest
  ): { [key: string]: any } {
    const filter: { [key: string]: any } = {};
    for (const filterName of Object.keys(request.filters)) {
      for (const key of Object.keys(request.filters[filterName])) {
        set(filter, key, request.filters[filterName][key]);
      }
    }
    return filter;
  }

  public sortFormatName(sort: SortInfo): SortInfoValue {
    const obj: { [key: string]: string } = {};
    const order = sort.order === SortInfoOrder.ascend ? 'ASC' : 'DESC';

    set(obj, sort.columnKey, order);

    return obj;
  }
}
