import Context from "./Strategy/Context";
import { StrategyA, StrategyB } from "./Strategy/Strategy";

const context = new Context(new StrategyA());
context.doSomeBusinessLogic();

console.log("********");

context.setStrategy(new StrategyB());
context.doSomeBusinessLogic();
