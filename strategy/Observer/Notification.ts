import {Subscriber} from "./Subscriber";
export interface Notification {
    subscribe(subscriber:Subscriber):void;
    unsubscribe(subscriber:Subscriber):void;
    notify() : void;
}

export class NotificationConcrete implements Notification{
    message = "";

    subscribers: Subscriber[] =[];
    subscribe(subscriber: Subscriber) {
        const isExist = this.subscribers.includes(subscriber);
        if(isExist){
            console.log("Already subscribed");
        }
        this.subscribers.push(subscriber)
        console.log('Subscribed to the channel')
    }
    unsubscribe(subscriber: Subscriber) {
        let subscriberIndex = this.subscribers.indexOf(subscriber);
        if(subscriberIndex === -1){
            console.log("Subscriber never subscribed");
        }
        this.subscribers.splice(subscriberIndex,0);
    }
    notify() {
        for(let subscriber of this.subscribers){
            subscriber.update(this.message);
        }
    }

    setNewNotification(message:string) : void{
        this.message = message
        this.notify();
    }
}