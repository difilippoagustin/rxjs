import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado [obs]'),
}

const obs$ = new Observable<string>( subs => {
    subs.next( "Hola" );
    subs.next( "Mundo" );
    // Forzar un error
    const a = undefined;
    a.nombre = "Juan";

    subs.complete();
} );

obs$.subscribe( observer );