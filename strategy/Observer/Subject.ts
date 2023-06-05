import {Observer} from "./Observer";

export interface Subject {
    subscribe(observer:Observer):void;
    unsubscribe(observer:Observer) : void;
    notify() : void;
}

export class ConcreteSubject implements Subject{
    public state:number = -1;
    private observers:Observer[] = [];
    subscribe(observer: Observer) {
        const isExist = this.observers.includes(observer);
        if(isExist){
            console.log('Observer has already been attached')
        }
        console.log("Attached an Observer");
        this.observers.push(observer)
    }
    unsubscribe(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);
        if(observerIndex === -1){
            console.log("Subject : Non-exixtent observer");
        }
        this.observers.splice(observerIndex,1);
    }
    notify() {
        for(const observer of this.observers){
            observer.update(this);
        }
    }
    doSomeBusinessLogic(){
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log("My state has changed to" , this.state);
        this.notify();
    }
}