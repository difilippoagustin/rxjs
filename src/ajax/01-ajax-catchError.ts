import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejarErrores = (response: Response) => {
    if (!response.ok){
        throw new Error(response.statusText);
    }
    return response;
};

const atrapaError = (err: AjaxError) => {
    console.warn('error en: ', err.message);
    return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
// .then(response => response.json())
// .then(data => console.log('data',data))
// .catch(error => console.warn('error:',error));

// fetchPromesa
// .then(manejarErrores)
// .then(response => response.json())
// .then(data => console.log('data',data))
// .catch(error => console.warn('error:',error));

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
)
.subscribe( users => console.log(users))

