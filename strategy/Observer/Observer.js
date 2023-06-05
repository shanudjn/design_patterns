"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverB = exports.ConcreteObserverA = void 0;
var Subject_1 = require("./Subject");
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        if (subject instanceof Subject_1.ConcreteSubject && subject.state < 3) {
            console.log("ConcreteObserverA reacted to this event");
        }
    };
    return ConcreteObserverA;
}());
exports.ConcreteObserverA = ConcreteObserverA;
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (subject) {
        if (subject instanceof Subject_1.ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    };
    return ConcreteObserverB;
}());
exports.ConcreteObserverB = ConcreteObserverB;
