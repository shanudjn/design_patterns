"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = require("./Subscriber");
var Notification_1 = require("./Notification");
//
// const subject =  new ConcreteSubject();
// const observer1 = new ConcreteObserverA();
// subject.subscribe(observer1);
//
// const observer2 = new ConcreteObserverB();
// subject.subscribe(observer2);
//
// subject.doSomeBusinessLogic();
// subject.doSomeBusinessLogic();
//
// subject.unsubscribe(observer2);
//
// subject.doSomeBusinessLogic();
var notification = new Notification_1.NotificationConcrete();
var subscriberA = new Subscriber_1.SubscriberA();
var subscriberB = new Subscriber_1.SubscriberB();
notification.subscribe(subscriberA);
notification.subscribe(subscriberB);
notification.setNewNotification("Merry Christmas!!");
