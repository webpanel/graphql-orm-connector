import {
  DataSourceRequest,
  GraphQLConnector,
  SortInfo,
  SortInfoOrder
} from 'webpanel-data';
import { camelize, singularize, underscore } from 'inflection';

const commonInitialisms: { [key: string]: string } = {
  ACL: 'Acl',
  API: 'Api',
  ASCII: 'Ascii',
  CPU: 'Cou',
  CSS: 'Css',
  DNS: 'Dns',
  EOF: 'Eof',
  GUID: 'Guid',
  HTML: 'Html',
  HTTP: 'Http',
  HTTPS: 'Https',
  ID: 'Id',
  IP: 'Ip',
  JSON: 'Json',
  LHS: 'Lhs',
  QPS: 'Qps',
  RAM: 'Ram',
  RHS: 'Rhs',
  RPC: 'Rpc',
  SLA: 'Sla',
  SMTP: 'Smtp',
  SQL: 'Sql',
  SSH: 'Ssh',
  TCP: 'Tcp',
  TLS: 'Tls',
  TTL: 'Ttl',
  UDP: 'Udp',
  UI: 'Ui',
  UID: 'Uid',
  UUID: 'Uuid',
  URI: 'Uri',
  URL: 'Url',
  UTF8: 'Utf8',
  VM: 'Vm',
  XML: 'Xml',
  XMPP: 'Xmpp',
  XSRF: 'Xsrf',
  XSS: 'Xss'
};

export class GraphQLORMConnector extends GraphQLConnector {
  public inputTypeName(request: DataSourceRequest): string {
    return `${singularize(camelize(request.name, false))}${camelize(
      request.operation
    )}Input`;
  }

  public sortFormatName(sort: SortInfo): string {
    let column = sort.columnKey;

    for (let key in commonInitialisms) {
      column = column.replace(key, commonInitialisms[key]);
    }

    return (
      underscore(column).toUpperCase() +
      (sort.order == SortInfoOrder.ascend ? '_ASC' : '_DESC')
    );
  }
}
