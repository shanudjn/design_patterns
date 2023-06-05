"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.doSomeBusinessLogic = function () {
        console.log("Performing some business logic using ".concat(this.strategy.name, ",here"));
        var result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    };
    return Context;
}());
exports.default = Context;
