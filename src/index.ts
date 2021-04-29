import {createPerson, createPersonArrow, createPersonArrowDecorator, createPersonVar} from "./arrow-functions";
import {asynchronousOperation} from "./asynchronous-functions";
import {acceptCallback, callback1, callback2} from "./callbacks";

// způsoby zapsání funkce
const jane = createPerson("Jane", 27);
const bob = createPersonVar("Bob", 34);
const joe = createPersonArrow("Joe", 29);
const olderJoe = createPersonArrowDecorator("Joe", 29);
console.log(jane);
console.log(bob);
console.log(joe);
console.log(olderJoe);

// callbacks
acceptCallback(callback1);
acceptCallback(callback2);

// async/await
// await na top level úrovni může být jen v omezených případech, takže je tu klasická "obsluha" Promise pomocí metody then
asynchronousOperation(1).then(r => console.log(r));
asynchronousOperation(2).then(r => console.log(r));
asynchronousOperation(3).then(r => console.log(r));
asynchronousOperation(4).then(r => console.log(r));

