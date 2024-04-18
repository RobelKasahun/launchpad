let buttons = document.querySelectorAll('.beat');
let audio = undefined;
const index = 1;
for (const button of buttons) {
    button.addEventListener('click', function () {
        // get the classes from each button
        // split them into array of classes
        // for instance ['col' 'beat1' 'beat']
        let buttonClassName = button.classList.value.split(' ')[index];
        playAudio(buttonClassName);
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
            audio.loop = true;
            break;

        case 'beat3':
            audio = new Audio('./beats/beat3.wav');
            audio.play();
            audio.loop = true;
            break;

        case 'beat4':
            audio = new Audio('./beats/beat4.wav');
            audio.play();
            audio.loop = true;
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

/** Higher Order Functions */

function addition(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
}

function subtract(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return 'Division by zero is undefined.';
    }

    return (firstNumber / secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
}

function power(firstNumber, secondNumber) {
    let tempValue = 1;
    for (let i = 1; i <= secondNumber; ++i) {
        tempValue *= firstNumber;
    }
    firstNumber = tempValue;
    return firstNumber;
}

function modulus(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return 'Division by zero is undefined.';
    }
    return (firstNumber % secondNumber);
}

function calculator(firstNumber, secondNumber, operator) {
    return (operator(firstNumber, secondNumber));
}

/** JavaScript Objects */
let vehicle = {
    make: 'Tesla',
    model: 'Model S',
    vin: 'KAHSDKHAKSDUOASDLASDAJSKLD',
    price: '$43,748.89',
    mileage: 34738,

    performAutoPilot: function () {
        console.log('Auto pilot has been engaged.');
    }
}

console.log(`vehicle: ${vehicle}`);
console.log(vehicle);
console.log(vehicle.performAutoPilot());

/** Function Constructor */

function Vehicle(make, model, vin, price, mileage) {
    this.make = make;
    this.model = model;
    this.vin = vin;
    this.price = price;
    this.mileage = mileage;

    this.performAutoPilot = function () {
        console.log('Autopilot has been engaged.');
        this.detectPedestrian();
    }

    this.detectPedestrian = function () {
        console.log('Pedestrian has been detected.');
        this.brake();
    }

    this.brake = function () {
        console.log('Braking...');
    }
}


const tesla = new Vehicle(vehicle.make, vehicle.model, vehicle.vin, vehicle.price, vehicle.mileage);
tesla.performAutoPilot();

/** keydown event listener */
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
            audio = new Audio('./beats/beat1.mp3');
            audio.play();
            break;

        case 's':
            audio = new Audio('./beats/beat2.wav');
            audio.play();
            audio.loop = true;
            break;

        case 'd':
            audio = new Audio('./beats/beat3.wav');
            audio.play();
            audio.loop = true;
            break;

        case 'f':
            audio = new Audio('./beats/beat4.wav');
            audio.play();
            audio.loop = true;
            break;

        case 'h':
            audio = new Audio('./beats/beat5.wav');
            audio.play();
            break;

        case 'j':
            audio = new Audio('./beats/beat6.wav');
            audio.play();
            break;

        case 'k':
            audio = new Audio('./beats/beat7.mp3');
            audio.play();
            break;

        case 'l':
            audio = new Audio('./beats/beat8.mp3');
            audio.play();
            break;

        default:
            alert('Undefined Keyboard Key.');
            break;
    }
});

/** Understanding callback functions */

function keyboardEventListener(typeoflistener, callback) {
    let keyboardEventThatHappened = {
        eventType: 'keydown', 
        key: 'k', 
        duration: 2
    }

    if (keyboardEventThatHappened.eventType === typeoflistener) {
        callback(keyboardEventThatHappened);
    }
}


keyboardEventListener('keydown', function (event) { 
    console.log(event);
});


