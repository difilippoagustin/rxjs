import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje{
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Spiderman' },
    { nombre: 'Superman' },
    { nombre: 'Batman' },
    { nombre: 'Spiderman' },
    { nombre: 'Superman' },
    { nombre: 'Superman' },
];

from(personajes).pipe(
    distinctUntilKeyChanged( 'nombre' )
)
.subscribe(console.log)