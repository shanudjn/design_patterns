import { IStrategy } from "./Strategy";
export default class Context{
    private strategy : IStrategy;
    constructor(strategy:IStrategy){
        this.strategy = strategy
    }

    public setStrategy(strategy : IStrategy){
        this.strategy = strategy;
    }
    public doSomeBusinessLogic() : void{
        console.log(`Performing some business logic using ${this.strategy.name},here`);
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}


