import {ConcreteSubject} from "./Subject";
import {ConcreteObserverA, ConcreteObserverB} from "./Observer";

import {Subscriber,SubscriberA, SubscriberB} from "./Subscriber";
import {Notification, NotificationConcrete} from "./Notification";
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

const notification = new NotificationConcrete()

const subscriberA = new SubscriberA();
const subscriberB = new SubscriberB();

notification.subscribe(subscriberA);
notification.subscribe(subscriberB);

notification.setNewNotification("Merry Christmas!!")