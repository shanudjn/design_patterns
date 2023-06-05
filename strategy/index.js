"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Strategy/Context");
var Strategy_1 = require("./Strategy/Strategy");
var context = new Context_1.default(new Strategy_1.StrategyA());
context.doSomeBusinessLogic();
console.log("********1");
context.setStrategy(new Strategy_1.StrategyB());
context.doSomeBusinessLogic();
