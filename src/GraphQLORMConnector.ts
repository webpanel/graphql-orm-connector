import { GraphQLConnector } from 'webpanel-data';
import { camelize } from 'inflection';

export class GraphQLORMConnector extends GraphQLConnector {
  public inputTypeName(operation: string): string {
    return `inflection.singularize(
      inflection.camelize(request.name, false)
    )}${camelize(operation)}Input`;
  }
}
