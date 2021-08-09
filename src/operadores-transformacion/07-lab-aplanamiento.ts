import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators";

const peticionHttpLogin = (userPass) => 
ajax.post('https://reqres.in/api/login?delay=1', userPass)
.pipe(
    pluck('response', 'token'),
    catchError((error) => {
        // console.log(error);
        return of('');
    })
)


// create form, input email, input password, button submit
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const buttonSubmit = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.required = true;
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.required = true;
inputPassword.value = 'cityslicka';

buttonSubmit.type = 'submit';
buttonSubmit.innerText = 'Login';

// insert form, input email, input password, button submit to body
form.appendChild(inputEmail);
form.appendChild(inputPassword);
form.appendChild(buttonSubmit);
document.body.appendChild(form);

const submitForm$ = fromEvent<Event>(form, 'submit')
.pipe(
    tap((event) => event.preventDefault()),
    map((event) => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    exhaustMap((userPass) => peticionHttpLogin(userPass) )
);


submitForm$.subscribe(console.log )