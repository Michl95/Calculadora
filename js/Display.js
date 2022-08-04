class Display{
    constructor(displayPreviousValue, displayCurrentValue){ // cuando la clase inicie se le va a pasar valores para instanciarla
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.operatorType = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.operatorSymbol = {
            add:'+',
            subtract: '-',
            multiply:'*',
            split:'%'

        }
    };

    deleteNumber(){
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printNumber();
    }

    deleteAll(){
        this.currentValue = '';
        this.previousValue = '';
        this.operatorType = undefined;
        this.printNumber();

    }

    compute(type){
        this.operatorType !== 'equal' && this.calcule();
        this.operatorType = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printNumber(); 

    }

    addNumber(number){
        if(number === '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printNumber();
    };

    printNumber(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.operatorSymbol[this.operatorType] || ''}`;
    };

    calcule(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(currentValue) || isNaN(previousValue)) return;

        this.currentValue = this.calculator[this.operatorType](previousValue, currentValue);
    }
}