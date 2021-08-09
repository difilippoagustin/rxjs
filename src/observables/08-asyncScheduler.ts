import { asyncScheduler } from "rxjs";



// setTimeout(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludarConParametros = ({nombre, apellido}) => console.log('Hola', nombre,apellido);

// asyncScheduler.schedule(saludar, 3000);
// asyncScheduler.schedule(saludarConParametros, 3000, {nombre: 'Juan', apellido: 'Perez'});


// setInterval(() => {}, 3000);

const subs = asyncScheduler.schedule( function(state){

    console.log('state', state)

    this.schedule(state + 1, 1000);

}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );