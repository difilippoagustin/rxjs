import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    map( ({x, y}) => ({x, y}) ),
    takeWhile(  ({y}) => y < 50, true )
)
.subscribe({
    next: (value) => console.log('next:',value),
    complete: () => console.log('complete'),
})