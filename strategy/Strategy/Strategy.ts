export interface IStrategy{
    name:string;
    doAlgorithm(data:string[]) : string[];
}

export class StrategyA implements IStrategy {
    name = 'Strategy A';
    public doAlgorithm(data: string[]): string[] {
        console.log("Sorting")
        return data.sort();
    }

}

export class  StrategyB implements IStrategy{
    name = "Strategy B";
    public doAlgorithm(data: string[]): string[] {
        console.log("Reversing")

        return data.reverse();
    }
}
