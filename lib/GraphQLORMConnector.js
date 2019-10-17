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
import { camelize, singularize } from 'inflection';
import { set } from 'lodash';
var GraphQLORMConnector = /** @class */ (function (_super) {
    __extends(GraphQLORMConnector, _super);
    function GraphQLORMConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraphQLORMConnector.prototype.inputTypeName = function (request) {
        return "" + singularize(camelize(request.name, false)) + camelize(request.operation) + "Input";
    };
    GraphQLORMConnector.prototype.transformFilterObject = function (request) {
        var filter = {};
        for (var _i = 0, _a = Object.keys(request.filters); _i < _a.length; _i++) {
            var filterName = _a[_i];
            for (var _b = 0, _c = Object.keys(request.filters[filterName]); _b < _c.length; _b++) {
                var key = _c[_b];
                set(filter, key, request.filters[filterName][key]);
            }
        }
        return filter;
    };
    GraphQLORMConnector.prototype.sortFormatName = function (sort) {
        var obj = {};
        var order = sort.order === SortInfoOrder.ascend ? 'ASC' : 'DESC';
        set(obj, sort.columnKey, order);
        return obj;
    };
    return GraphQLORMConnector;
}(GraphQLConnector));
export { GraphQLORMConnector };
//# sourceMappingURL=GraphQLORMConnector.js.map