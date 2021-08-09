import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";


const url = `https://XXXXhttpbin.org/delay/1`;

const manejaError = (resp: AjaxError) => {
    console.warn(resp.message);
    return of({
        ok: false,
        usuarios:[]
    })
};

// const obs$ = ajax.getJSON( url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax( url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON( url);
const obs2$ = ajax( url);

obs$.pipe(
    catchError(manejaError)
)
.subscribe({
    next: (data) => {
        console.log('NEXT:',data);
    },
    error: (err) => {
        console.error('ERROR:',err);
    },
    complete: () => {
        console.log('COMPLETE');
    }
});
// obs2$.subscribe(data => console.log('ajax:',data));
