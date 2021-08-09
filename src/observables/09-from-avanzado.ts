import { from, of } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable, funcion
 */


const observer = {
    next: (x) => console.log('next',x),
    complete: () => console.log('complete'),
}

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for(let x of miIterable) {
//     console.log(x);
// }

from (miIterable).subscribe(observer);


// const src$ = from([1,2,3,4,5]);
// const src$ = of(...[1,2,3,4,5]);

// const src$ = from('Agustin');

const src$ = from( fetch('https://jsonplaceholder.typicode.com/posts') );

// src$.subscribe(async(res) => {

//     console.log(res.url);

//     const dataResp = await res.json();
//     console.log(dataResp);

// })

// src$.subscribe(observer);