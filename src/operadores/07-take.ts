import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap(x => console.log(`tap ${x}`)),
    take(3)
)
.subscribe({
    next: (n) => console.log('next',n),
    complete: () => console.log('complete'),
})