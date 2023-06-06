import {Notification} from "./Notification";

export interface Subscriber{
    update(notification:string) : void;
}

export class SubscriberA implements Subscriber{
    public update(notification:string) {
            console.log("SubscriberA : Sending subscriber the following message->" , notification)
    }
}

export class SubscriberB implements Subscriber{
    public update(notification : string) {
        console.log("SubscriberB : Sending subscriber the following message->", notification)
    }
}