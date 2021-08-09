import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement("button");

boton.innerHTML = "Detener Timer";

document.body.appendChild(boton);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent(boton, "click");
const clickBtn$ = fromEvent(boton, "click").pipe(
    tap(() => console.log("tap antes del skip")),
    skip(1),
    tap(() => console.log("tap después del skip")),
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('complete'),
});