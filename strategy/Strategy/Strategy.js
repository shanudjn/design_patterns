"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyB = exports.StrategyA = void 0;
var StrategyA = /** @class */ (function () {
    function StrategyA() {
        this.name = 'Strategy A';
    }
    StrategyA.prototype.doAlgorithm = function (data) {
        console.log("Sorting");
        return data.sort();
    };
    return StrategyA;
}());
exports.StrategyA = StrategyA;
var StrategyB = /** @class */ (function () {
    function StrategyB() {
        this.name = "Strategy B";
    }
    StrategyB.prototype.doAlgorithm = function (data) {
        console.log("Reversing");
        return data.reverse();
    };
    return StrategyB;
}());
exports.StrategyB = StrategyB;
