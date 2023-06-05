import {ConcreteSubject, Subject} from "./Subject";

export interface Observer{
    update(subject : Subject) : void
}

export class ConcreteObserverA implements Observer{
    public update(subject: Subject) {
        if(subject instanceof ConcreteSubject && subject.state < 3){
            console.log("ConcreteObserverA reacted to this event")
        }
    }
}

export class ConcreteObserverB implements Observer{
    public update(subject: Subject) {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}