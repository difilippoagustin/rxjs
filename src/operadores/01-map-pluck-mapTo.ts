import { fromEvent, range } from "rxjs";

import { map, mapTo, pluck } from "rxjs/operators";


// range(1,5)
// .pipe(map<number, number>(x => x * 10))
// .subscribe( x => console.log(x));

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$
.pipe(
    map(e => e.key),
);

const keyupPluck$ = keyup$.pipe(
    pluck("target", "baseURI"),
);

const keyupMapTo$ = keyup$.pipe(
    mapTo("Tecla presionada"),
);

keyup$.pipe()
.subscribe(x => console.log(x));

keyupCode$.subscribe(value => console.log('map', value));
keyupPluck$.subscribe(value => console.log('pluck', value));
keyupMapTo$.subscribe(value => console.log('mapTo', value));
