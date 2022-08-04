const displayPreviousValue = document.getElementById('previousValue');
const displayCurrentValue = document.getElementById('currentValue');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const buttonSwitch = document.getElementById('lightMode');
const switchOff = document.querySelector('switchOff');

const display = new Display(displayPreviousValue, displayCurrentValue);

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button =>{
    button.addEventListener('click', () => display.compute(button.value));
});

// -------------- Light / Dark Mode ---------------------- //

let lightMode = localStorage.getItem('lightMode');

const lightModeOn = () => {
    localStorage.setItem('lightMode', 'enabled');
    document.body.classList.add('lightMode');
    buttonSwitch.classList.remove('switchOn');
    buttonSwitch.classList.add('switchOff');
};

const lightModeOff = () => {
    localStorage.setItem('lightMode', 'disabled');
    document.body.classList.remove('lightMode');
    buttonSwitch.classList.remove('switchOff');
    buttonSwitch.classList.add('switchOn');
};

if (lightMode === 'enabled') {
    lightModeOn();

};

buttonSwitch.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode')
    if (lightMode !== "enabled") {
        lightModeOn();
        console.log('On');
    } else {
        lightModeOff();
        console.log('Off');
    }
});


