var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GraphQLConnector, SortInfoOrder } from 'webpanel-data';
import { camelize, singularize, underscore } from 'inflection';
var commonInitialisms = {
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
var GraphQLORMConnector = /** @class */ (function (_super) {
    __extends(GraphQLORMConnector, _super);
    function GraphQLORMConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraphQLORMConnector.prototype.inputTypeName = function (request) {
        return "" + singularize(camelize(request.name, false)) + camelize(request.operation) + "Input";
    };
    GraphQLORMConnector.prototype.sortFormatName = function (sort) {
        var column = sort.columnKey;
        for (var key in commonInitialisms) {
            column = column.replace(key, commonInitialisms[key]);
        }
        return (underscore(column).toUpperCase() +
            (sort.order == SortInfoOrder.ascend ? '_ASC' : '_DESC'));
    };
    return GraphQLORMConnector;
}(GraphQLConnector));
export { GraphQLORMConnector };
//# sourceMappingURL=GraphQLORMConnector.js.map