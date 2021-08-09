import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

// emite constantemente el valor acumulado

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, curr) => acc + curr;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador),
)
.subscribe(console.log)

// scan
from(numeros).pipe(
    scan(totalAcumulador),
)
.subscribe(console.log)

// Redux
interface User{
    id?: number;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: User[] = [
    {
        id: 1,
        autenticado: false,
        token: null,
    },
    {
        id: 1,
        autenticado: true,
        token: '123',
    },
    {
        id: 1,
        autenticado: true,
        token: '123456',
    }
];

const state$ = from(user).pipe(
    scan<User>((acc, curr) => {
        return {...acc, ...curr}},
        {edad: 33}
    )
)

const id$ = state$.pipe(
    map(user => user.id)
);

id$.subscribe(console.log);

























