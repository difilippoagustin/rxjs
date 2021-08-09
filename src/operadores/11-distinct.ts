import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<number | string>(1,'1',1,3,3,2,2,4,4,5,3,1, '1');

numeros$.pipe(
    distinct()
)
.subscribe(console.log);


interface Personaje{
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Spiderman' },
    { nombre: 'Superman' },
    { nombre: 'Batman' },
    { nombre: 'Spiderman' },
    { nombre: 'Superman' },
];

from(personajes).pipe(
    distinct( personaje => personaje.nombre )
)
.subscribe(console.log)