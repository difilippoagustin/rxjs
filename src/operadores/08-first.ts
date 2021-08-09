import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    tap(console.log),
    // map( event => ({
    //     x: event.clientX,
    //     y: event.clientY
    // }) )

    map( ({clientX, clientY}) => ({clientX,clientY})),

    first(event => event.clientY >= 150)

)
.subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
})