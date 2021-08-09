import { ajax } from "rxjs/ajax";

const url = `https://httpbin.org/delay/1`;

// ajax.put(url,{
//     id: 1,
//     nombre: 'Agustín'
// },{
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

ajax({
    url: url,
    method: 'DELETE',
    body: {
        id: 1,
        nombre: 'Agustín'
    },
    headers: {
        'mi-token': 'ABC123'
    }
}).subscribe(console.log);