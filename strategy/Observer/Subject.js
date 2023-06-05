"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSubject = void 0;
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.state = -1;
        this.observers = [];
    }
    ConcreteSubject.prototype.subscribe = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            console.log('Observer has already been attached');
        }
        console.log("Attached an Observer");
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log("Subject : Non-exixtent observer");
        }
        this.observers.splice(observerIndex, 1);
    };
    ConcreteSubject.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteSubject.prototype.doSomeBusinessLogic = function () {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("My state has changed to", this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
exports.ConcreteSubject = ConcreteSubject;
