let buttons = document.querySelectorAll('.beat');
let audio = undefined;
const index = 1;
for (const button of buttons) {
    button.addEventListener('touch', function () {
        let buttonClassName = button.classList.value.split(' ')[index];
        playAudio(buttonClassName);
        console.log(buttonClassName);
    });
}


function playAudio(buttonClassName) {
    switch (buttonClassName) {
        case 'beat1':
            audio = new Audio('./beats/beat1.mp3');
            audio.play();
            break;

        case 'beat2':
            audio = new Audio('./beats/beat2.wav');
            audio.play();
            break;

        case 'beat3':
            audio = new Audio('./beats/beat3.wav');
            audio.play();
            break;

        case 'beat4':
            audio = new Audio('./beats/beat4.wav');
            audio.play();
            break;

        case 'beat5':
            audio = new Audio('./beats/beat5.wav');
            audio.play();
            break;

        case 'beat6':
            audio = new Audio('./beats/beat6.wav');
            audio.play();
            break;

        case 'beat7':
            audio = new Audio('./beats/beat7.mp3');
            audio.play();
            break;

        case 'beat8':
            audio = new Audio('./beats/beat8.mp3');
            audio.play();
            break;

        case 'beat9':
            audio = new Audio('./beats/beat1.mp3');
            audio.play();
            break;

        case 'beat10':
            audio = new Audio('./beats/beat2.wav');
            audio.play();
            break;

        case 'beat11':
            audio = new Audio('./beats/beat3.wav');
            audio.play();
            break;

        case 'beat12':
            audio = new Audio('./beats/beat4.wav');
            audio.play();
            break;

        case 'beat13':
            audio = new Audio('./beats/beat5.wav');
            audio.play();
            break;

        case 'beat14':
            audio = new Audio('./beats/beat6.wav');
            audio.play();
            break;

        case 'beat15':
            audio = new Audio('./beats/beat7.mp3');
            audio.play();
            break;

        case 'beat16':
            audio = new Audio('./beats/beat8.mp3');
            audio.play();
            break;
        
        default:
            alert('Something went wrong...');
            break;
    }
}