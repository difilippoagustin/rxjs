import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap(letra => interval(1000).pipe(
        map((val, i) => `${letra}${i}`),
        take(3),
    ))
)
// .subscribe({
//     next: (value) => {
//         console.log('next:',value);
//     },
//     error: (error: Error) => {
//         console.warn('error:',error);
//     },
//     complete: () => {
//         console.log('done');
//     }
// })

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval(); 

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$),
    )),
)
.subscribe(console.log);