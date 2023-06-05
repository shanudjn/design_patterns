import {ConcreteSubject} from "./Subject";
import {ConcreteObserverA, ConcreteObserverB} from "./Observer";

const subject =  new ConcreteSubject();
const observer1 = new ConcreteObserverA();
subject.subscribe(observer1);

const observer2 = new ConcreteObserverB();
subject.subscribe(observer2);

subject.doSomeBusinessLogic();
subject.doSomeBusinessLogic();

subject.unsubscribe(observer2);

subject.doSomeBusinessLogic();