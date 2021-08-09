import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]: ', error),
    complete: () => console.info('[complete]'),
}

const intervalo$ = new Observable<number>( subs => {

    const intervalId = setInterval(() => {
        subs.next(Math.random())
    }, 1000)

    return () => {
        clearInterval(intervalId);
        console.log('Interval destruído');
        }
    }
)

/**
 * 1. Casteo múltiple
 * 2. También es un observer
 * 3. Se puede manejar el next, error y complete
 */

const subject$ = new Subject<number>();
const intervaloSubs = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(res => console.log('subs1: ', res));
// const subs2 = intervalo$.subscribe(res => console.log('subs2: ', res));

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(1);
    subject$.complete();
    intervaloSubs.unsubscribe();
}, 3500);