import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at felis egestas, dictum ex eget, mollis nibh. Etiam dolor nisl, ultricies porttitor maximus ut, fringilla nec sem. Phasellus nec finibus purus, vel congue tellus. Proin ultricies dignissim sollicitudin. Vivamus ultricies quam nisl. Maecenas porttitor mattis neque sodales ultricies. Quisque leo arcu, lacinia pretium consequat ornare, aliquet vitae ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas euismod arcu et ex venenatis congue. Vestibulum id neque rutrum, facilisis lorem vitae, consectetur augue. Praesent a leo vel ante accumsan luctus. Donec arcu dui, ornare sed erat porta, fringilla gravida ex. Nunc laoreet in ligula ac pretium. Nunc ante nibh, consectetur suscipit neque sed, malesuada elementum erat. Nullam aliquet tincidunt purus sit amet tempor.
<br/><br/>
Mauris pellentesque risus non lacus dictum sollicitudin. Nullam mauris sapien, congue et rutrum vitae, fringilla vel ante. Phasellus diam est, porta in odio ut, vehicula tempus velit. Sed volutpat nunc a diam euismod, sed consectetur dui pharetra. Quisque molestie, diam non hendrerit gravida, libero urna facilisis quam, ut pellentesque arcu enim non orci. Fusce a nisi nisl. Vivamus imperdiet urna a ante imperdiet consectetur. Nullam porta at dui vitae tempus. Sed interdum sem risus, quis sagittis metus tempus nec. Ut luctus erat non lacus hendrerit congue. In hac habitasse platea dictumst. Etiam congue varius tellus, vel tincidunt elit accumsan non. Praesent rhoncus sed ante non ultrices. Suspendisse potenti. Suspendisse quis semper eros.
<br/><br/>
Donec varius dictum felis eu dictum. Mauris sapien lectus, posuere in condimentum ac, sagittis sed diam. Donec sit amet tellus sodales, sodales mauris at, molestie purus. Curabitur a euismod ex. Donec bibendum commodo imperdiet. Pellentesque gravida ultrices augue, placerat aliquam mi ultrices in. Aliquam nec metus neque. Vivamus sapien nisi, vulputate a laoreet nec, venenatis sit amet quam. Curabitur condimentum tellus a nisi commodo, ullamcorper faucibus sem scelerisque.
<br/><br/>
Donec mattis turpis eu lorem interdum, non condimentum orci dapibus. Sed non accumsan lacus. Fusce convallis ultricies elit a tempor. Aliquam erat volutpat. Fusce placerat felis sed libero sodales, non maximus tellus ultricies. Donec hendrerit nec justo eget aliquet. Donec imperdiet nibh ac suscipit tincidunt. Vestibulum non quam efficitur, euismod magna at, finibus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Nulla in elit felis. Aliquam tortor quam, semper quis vestibulum consectetur, varius et elit. Sed tempus sem neque, posuere commodo ligula pulvinar ac. Pellentesque pellentesque tincidunt neque id pretium. Vivamus a velit ut nisi molestie efficitur. Duis augue neque, mattis quis libero at, hendrerit tempus ligula. Nulla euismod pellentesque mollis.`;

const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';

body.append(progressBar);

// function to calculate porcentage of scroll
const calculateScrollPercentage = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// streams
const scroll$ = fromEvent(window, 'scroll');

const progress$ = scroll$.pipe(
    map(calculateScrollPercentage),
    tap(console.log)
);

progress$.subscribe( porcentaje =>{
    progressBar.style.width = `${porcentaje}%`
})    
