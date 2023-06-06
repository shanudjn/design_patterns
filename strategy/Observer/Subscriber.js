"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberB = exports.SubscriberA = void 0;
var SubscriberA = /** @class */ (function () {
    function SubscriberA() {
    }
    SubscriberA.prototype.update = function (notification) {
        console.log("SubscriberA : Sending subscriber the following message->", notification);
    };
    return SubscriberA;
}());
exports.SubscriberA = SubscriberA;
var SubscriberB = /** @class */ (function () {
    function SubscriberB() {
    }
    SubscriberB.prototype.update = function (notification) {
        console.log("SubscriberB : Sending subscriber the following message", notification);
    };
    return SubscriberB;
}());
exports.SubscriberB = SubscriberB;
