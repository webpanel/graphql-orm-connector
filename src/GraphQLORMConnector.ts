import { DataSourceRequest, GraphQLConnector } from 'webpanel-data';
import { camelize, singularize } from 'inflection';

export class GraphQLORMConnector extends GraphQLConnector {
  public inputTypeName(request: DataSourceRequest): string {
    return `${singularize(camelize(request.name, false))}${camelize(
      request.operation
    )}Input`;
  }
}
