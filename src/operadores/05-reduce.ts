import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

// el acumulador se emite cuando el observable se completa


const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('total array',total);

interval(1000).pipe(
    take(5),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: (valor) => console.log('next:',valor),
    complete: () => console.log('complete')
});
