import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, pluck } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(
    throttleTime(3000)
)
// .subscribe(console.log);



// create an input element and attach to the DOM
const input = document.createElement("input");
document.body.appendChild(input);

const input$ = fromEvent(input, "keyup");

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck("target", "value"),
    distinctUntilChanged()
)
.subscribe(console.log);

