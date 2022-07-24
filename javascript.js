const oneButton = document.querySelector('#oneButton');
const twoButton = document.querySelector('#twoButton');
const threeButton = document.querySelector('#threeButton');
const fourButton = document.querySelector('#fourButton');
const fiveButton = document.querySelector('#fiveButton');
const sixButton = document.querySelector('#sixButton');
const sevenButton = document.querySelector('#sevenButton');
const eightButton = document.querySelector('#eightButton');
const nineButton = document.querySelector('#nineButton');
const zeroButton = document.querySelector('#zeroButton');

const allClearButton = document.querySelector('#allClearButton');
const clearButton = document.querySelector('#clearButton');
const divideButton = document.querySelector('#divideButton');
const multiplyButton = document.querySelector('#multiplyButton');
const substractButton = document.querySelector('#substractButton');
const addButton = document.querySelector('#addButton');
const plusMinusButton = document.querySelector('#plusMinusButton');
const dotButton = document.querySelector('#dotButton');
const equalButton = document.querySelector('#equalButton');
const displayInput = document.querySelector('#displayInput');
const displaySolution = document.querySelector('#displaySolution');
const numbersParent = document.querySelector('#numbersParent');
const buttons = document.querySelector('#buttons');

// display input text
displayInput.textContent = '';
// display solution text
displaySolution.textContent = '';

// buttons addEventListeners
oneButton.addEventListener('click', () => {displayInput.textContent +=(1);
    buttonColor(); oneButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(1); }
    else if (sumZeroOne === 1) {b += (1);}
});
twoButton.addEventListener('click', () => {displayInput.textContent +=(2);
    buttonColor(); twoButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(2); }
    else if (sumZeroOne === 1) {b += (2);}
})
threeButton.addEventListener('click', () => {displayInput.textContent +=(3);
    buttonColor();  threeButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(3); }
    else if (sumZeroOne === 1) {b += (3);}
})
fourButton.addEventListener('click', () => {displayInput.textContent +=(4);
    buttonColor();  fourButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(4); }
    else if (sumZeroOne === 1) {b += (4);}
})
fiveButton.addEventListener('click', () => {displayInput.textContent +=(5);
    buttonColor(); fiveButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(5); }
    else if (sumZeroOne === 1) {b += (5);}
})
sixButton.addEventListener('click', () => {displayInput.textContent +=(6);
    buttonColor(); sixButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(6); }
    else if (sumZeroOne === 1) {b += (6);}
})
sevenButton.addEventListener('click', () => {displayInput.textContent +=(7);
    buttonColor(); sevenButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(7); }
    else if (sumZeroOne === 1) {b += (7);}
})
eightButton.addEventListener('click', () => {displayInput.textContent +=(8);
    buttonColor(); eightButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(8); }
    else if (sumZeroOne === 1) {b += (8);}
})
nineButton.addEventListener('click', () => {displayInput.textContent +=(9);
    buttonColor(); nineButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(9); }
    else if (sumZeroOne === 1) {b += (9);}
})
zeroButton.addEventListener('click', () => {displayInput.textContent +=(0);
    buttonColor(); zeroButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
    if (displaySolution.textContent != '') {
        displaySolution.textContent = '';
    }
    if ( sumZeroOne === 0) {a +=(0); }
    else if (sumZeroOne === 1) {b += (0);}
})

// divide
divideButton.addEventListener('click', () => {displayInput.textContent =('');
divideButton.setAttribute('style', 'background-color: #faa527;') ; 
plusOrMinus = 0; dotZeroOne = 0;
if (operatoZeroOneTwo === 0) {operateContainer = ('/'); sumZeroOne = 1; operatoZeroOneTwo = 1;}
else if (operatoZeroOneTwo === 1) { operate(); operateContainer = ('/'); sumZeroOne = 0; operatoZeroOneTwo = 2; a = ''; b = '';}
else if (operatoZeroOneTwo === 2) { operate(); operateContainer = ('/'); a = ''; b = '';}});
// multiply
multiplyButton.addEventListener('click', () => {displayInput.textContent =(''); 
multiplyButton.setAttribute('style', 'background-color: #faa527;'); 
plusOrMinus = 0; dotZeroOne = 0;
if (operatoZeroOneTwo === 0) {operateContainer = ('*'); sumZeroOne = 1; operatoZeroOneTwo = 1;}
else if (operatoZeroOneTwo === 1) { operate(); operateContainer = ('*'); sumZeroOne = 0; operatoZeroOneTwo = 2; a = ''; b = '';}
else if (operatoZeroOneTwo === 2) { operate(); operateContainer = ('*'); a = ''; b = '';}});
// substract
substractButton.addEventListener('click', () => {displayInput.textContent =(''); 
substractButton.setAttribute('style', 'background-color: #faa527;') ; 
plusOrMinus = 0; dotZeroOne = 0;
if (operatoZeroOneTwo === 0) {operateContainer = ('-'); sumZeroOne = 1; operatoZeroOneTwo = 1;}
else if (operatoZeroOneTwo === 1) { operate(); operateContainer = ('-'); sumZeroOne = 0; operatoZeroOneTwo = 2; a = ''; b = '';}
else if (operatoZeroOneTwo === 2) {operate(); operateContainer = ('-'); a = ''; b = '';}});
// add
addButton.addEventListener('click', () => {displayInput.textContent =(''); 
addButton.setAttribute('style', 'background-color: #faa527;') ; 
plusOrMinus = 0; dotZeroOne = 0;
if (operatoZeroOneTwo === 0) {operateContainer += ('+'); sumZeroOne = 1; operatoZeroOneTwo = 1;}
else if (operatoZeroOneTwo === 1) { operate(); operateContainer = ('+'); sumZeroOne = 0; operatoZeroOneTwo = 2; a = ''; b = '';}
else if (operatoZeroOneTwo === 2) { operate(); operateContainer = ('+'); a = ''; b = '';}});
// plus or minus
plusMinusButton.addEventListener('click', () => {plusMinusButton.setAttribute('style', 'background-color: #68fcfc;'); removeColor();
    if (sumZeroOne === 0 && a === '') {displayInput.textContent = '';}
    else if (sumZeroOne === 1 && b === '') {displayInput.textContent = '';}
    else {
    if ( sumZeroOne === 0 && plusOrMinus === 0) {displayInput.textContent = -(a); a = -Math.abs(a); plusOrMinus = 1;}
    else if (sumZeroOne === 0 && plusOrMinus === 1) {a = Math.abs(a); displayInput.textContent = (a); plusOrMinus = 0;}
    else if (sumZeroOne === 1 && plusOrMinus === 0) {displayInput.textContent = -(b); b = -Math.abs(b); plusOrMinus = 1;}
    else if (sumZeroOne === 1 && plusOrMinus === 1) {b = Math.abs(b); displayInput.textContent = (b); plusOrMinus = 0;}}})
// dot
dotButton.addEventListener('click', () => {displayInput.textContent +=('.');  dotButton.setAttribute('style', 'background-color: #2cf882;'); removeColorNumbers();
if ( sumZeroOne === 0 && dotZeroOne === 0) {a += ('.'); dotZeroOne = 1;}
else if (sumZeroOne === 1 && dotZeroOne === 0) {b += ('.'); dotZeroOne = 1;}})
// all clear
allClearButton.addEventListener('click', () => { allClearButton.setAttribute('style', 'background-color: #68fcfc;'); 
removeColor(); plusOrMinus = 0; dotZeroOne = 0;
displayInput.textContent =(''); displaySolution.textContent = ''; sumZeroOne = 0; operateContainer = ''; operatoZeroOneTwo = 0; totalSum = ''; a = ''; b = '';})
// clear last input
clearButton.addEventListener('click', () => {clearButton.setAttribute('style', 'background-color: #68fcfc;'); removeColor(); clearCalculation(); 
plusOrMinus = 0; dotZeroOne = 0;})
// equal 
equalButton.addEventListener('click', () => {equalButton.setAttribute('style', 'background-color: #faa527;'); removeColor(); 
plusOrMinus = 0; dotZeroOne = 0;
operate(); displayInput.textContent = ''; sumZeroOne = 0; operatoZeroOneTwo = 0; operateContainer = ''; a = ''; b = '';})



// calculations variables
let sumZeroOne = 0; // if var = 0 then input is 'a', if var = 1 then input is 'b'
let operateContainer = ''; // var that stores +-/* for operate function
let operatoZeroOneTwo = 0; // if var = 0 then no action, if var = 1 then calculate a+b, if var = 2 then calculate totalSum + a
let totalSum = ''; // var where total of the sum is stored
let plusOrMinus = 0; // if var = 0 then integer =+, if var = 1 then integer = -
let dotZeroOne = 0; // if var  = 0 then dot is allowed, if var = 1 then no more dots are allowed

// all operate buttons (+,-,*,/) goes through this function and then send to their functions
function operate () {
    if (operateContainer === '+' && operatoZeroOneTwo === 1) {
        return addCalculation(a, b);
    } else if (operateContainer === '+' && operatoZeroOneTwo === 2) {
        b = 0;
        return addCalculation(a, b)
    } else if (operateContainer === '-' && operatoZeroOneTwo === 1) {
        return substractCalculation(a, b);
    } else if (operateContainer === '-' && operatoZeroOneTwo === 2) {
        b = 0;
        return substractCalculation(a, b);
    } else if (operateContainer === '*' && operatoZeroOneTwo === 1) {
        return multiplyCalculation(a, b);
    }  else if (operateContainer === '*' && operatoZeroOneTwo === 2) {
        b = 0;
        return multiplyCalculation(a, b);
    } else if (operateContainer === '/' && operatoZeroOneTwo === 1) {
        return divideCalculation(a, b);
    }  else if (operateContainer === '/' && operatoZeroOneTwo === 2) {
        b = 0;
        return divideCalculation(a, b);
    }
};

let a = '';
let b = '';

// add calculation
function addCalculation (a, b) {
    if (operatoZeroOneTwo === 1) {
    let som = Number(a) + Number(b) + Number(totalSum);
    displaySolution.textContent = som;
    totalSum = som;
    return;
    } else if (operatoZeroOneTwo === 2) {
        let som = Number(a) + Number(b) + Number(totalSum);
        displaySolution.textContent = som;
        totalSum = som;
        return;
    }
};

// substract calculation
function substractCalculation (a, b) {
    if (operatoZeroOneTwo === 1) {
        let som = Number(totalSum) + Number(a) - Number(b);
        displaySolution.textContent = som;
        totalSum = som;
        return;
    } else if (operatoZeroOneTwo === 2) {
        let som = Number(totalSum) - Number(a) - Number(b);
        displaySolution.textContent = som;
        totalSum = som;
        return;
    }
}
// multiply calculation
function multiplyCalculation (a, b) {
    if (operatoZeroOneTwo === 1) {
        if (Number(totalSum) === 0) {
            let som =  Number(a) * Number(b);
            displaySolution.textContent = som;
            totalSum = som;
            return;
        } else if (Number(a) === 0) {
            let som =  Number(b) * Number(totalSum);
            displaySolution.textContent = som;
            totalSum = som;
            return;
        } else if (Number(b) === 0) {
            let som =  Number(a) * Number(totalSum);
            displaySolution.textContent = som;
            totalSum = som;
            return;
        } else {
            let som =  Number(a) * Number(b) * Number(totalSum);
            displaySolution.textContent = som;
            totalSum = som;
            return;
        }
    } else if (operatoZeroOneTwo === 2) {
        if (Number(b) === 0) {
            let som =  Number(a) * Number(totalSum);
            displaySolution.textContent = som;
            totalSum = som;
            return;
        } else {
            let som =  Number(a) * Number(b) * Number(totalSum);
            displaySolution.textContent = som;
            totalSum = som;
            return;
    }}
}
// devide calculation
function divideCalculation (a, b) {
    if (operatoZeroOneTwo === 1) {
        if (Number(b) === 0) {
            displaySolution.textContent = 'Division by zero is undefined';
            return;
        } else {
        let som =  Number(a) / Number(b);
        displaySolution.textContent = (Math.round(som * 100) / 100);
        totalSum = som;
        return;
        }
    } else if (operatoZeroOneTwo === 2) {
        let som =  Number(totalSum) / Number(a);
        displaySolution.textContent = (Math.round(som * 100) / 100);
        totalSum = som;
        return;
    }
}

// clears a or b variable
function clearCalculation () {
    if ( sumZeroOne === 0) {a = ''; displayInput.textContent = ''; }
    else if (sumZeroOne === 1) {b = ''; displayInput.textContent = '';}
};

// when click on number, remove operator color
function buttonColor() {
    addButton.setAttribute('style', 'background-color: #bedf2b;');
    divideButton.setAttribute('style', 'background-color: #bedf2b;');
    multiplyButton.setAttribute('style', 'background-color: #bedf2b;');
    substractButton.setAttribute('style', 'background-color: #bedf2b;');
    equalButton.setAttribute('style', 'background-color: #bedf2b;');
    return;
};

// when click on button, color returns back to orignal
function removeColor () {
    setTimeout(() => {allClearButton.setAttribute('style', 'background-color: #23dada;'); }, 400);
    setTimeout(() => {clearButton.setAttribute('style', 'background-color: #23dada;');}, 400);
    setTimeout(() => {plusMinusButton.setAttribute('style', 'background-color: #23dada;');}, 400)
    setTimeout(() => {equalButton.setAttribute('style', 'background-color: #bedf2b;');}, 400);
    return;
};

// when click on a number, color returns back to orignal
function removeColorNumbers() {
    setTimeout(() => {oneButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {twoButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {threeButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {fourButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {fiveButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {sixButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {sevenButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {eightButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {nineButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {zeroButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    setTimeout(() => {dotButton.setAttribute('style', 'background-color: ##25da80;');}, 400);
    return;
};