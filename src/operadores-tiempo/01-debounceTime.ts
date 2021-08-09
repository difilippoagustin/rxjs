import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(
    debounceTime(3000)
)
// .subscribe(console.log);



// create an input element and attach to the DOM
const input = document.createElement("input");
document.body.appendChild(input);

const input$ = fromEvent(input, "keyup");

input$.pipe(
    debounceTime(1000),
    pluck("target", "value"),
    distinctUntilChanged()
)
.subscribe(console.log);

