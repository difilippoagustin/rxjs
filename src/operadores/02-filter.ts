import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1,10).pipe(
//     filter(x => x % 2 === 0)
// ).subscribe(console.log);

range(20,30).pipe(
    filter((value, index) => {
        console.log('index',index)
        return value % 2 === 0
    })
)
// .subscribe(console.log);

interface Personaje{
    nombre: string;
    edad: number;
}

const personajes: Personaje[] = [
    {nombre: 'Pepe', edad: 13},
    {nombre: 'Pepa', edad: 20},
    {nombre: 'Pepo', edad: 40},
];

from(personajes).pipe(
    filter(personaje => personaje.edad >= 20)
).subscribe(personaje => console.log(personaje));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    map(e => e.code),
    filter(code => code === 'Enter')
)

keyup$.subscribe(event => {
    console.log(event);
});