"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationConcrete = void 0;
var NotificationConcrete = /** @class */ (function () {
    function NotificationConcrete() {
        this.message = "";
        this.subscribers = [];
    }
    NotificationConcrete.prototype.subscribe = function (subscriber) {
        var isExist = this.subscribers.includes(subscriber);
        if (isExist) {
            console.log("Already subscribed");
        }
        this.subscribers.push(subscriber);
        console.log('Subscribed to the channel');
    };
    NotificationConcrete.prototype.unsubscribe = function (subscriber) {
        var subscriberIndex = this.subscribers.indexOf(subscriber);
        if (subscriberIndex === -1) {
            console.log("Subscriber never subscribed");
        }
        this.subscribers.splice(subscriberIndex, 0);
    };
    NotificationConcrete.prototype.notify = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this.message);
        }
    };
    NotificationConcrete.prototype.setNewNotification = function (message) {
        this.message = message;
        this.notify();
    };
    return NotificationConcrete;
}());
exports.NotificationConcrete = NotificationConcrete;
