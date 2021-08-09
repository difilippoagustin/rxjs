import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";



const githubAPI = 'https://api.github.com/users';
const githubUser = 'difilippoagustin';

forkJoin({
    usuario: ajax.getJSON(githubAPI + '/' + githubUser),
    repos: ajax.getJSON(githubAPI + '/' + githubUser + '/repos')
    .pipe(
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(githubAPI + '/' + githubUser + '/gists')
}).pipe(
    catchError(error => {
        return of(error);
    }
)
)
.subscribe( console.log );


















