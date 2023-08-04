const numbersArr = [];
const list = readInput();

while (true) {
let inputNumber = prompt("Enter an integer(enter a negative integer to quit):");
const value = parseInt(inputNumber);

if (isNaN(value)) {
     continue;
} else if (value < 0) {
    displayStats(list);
    break;
} else {
    numbersArr.push(value);
}
}

function readInput(value){
    const number =numbersArr
    return number;
}

function displayStats(value){
    const sum = list.reduce((acc, number) => acc + number, 0);
    const avg = sum / list.length;
    const min = Math.min(...list);
    const max = Math.max(...list);

    const numbersEntered = 'For the list is empyt';
    const average= 0 ;
    const minimum= 0 ;
    const maximum = 0 ; 

    const ShowStatistics = list.length > 0 ?
    "For the list "+`${list} the average is ${avg.toFixed(2)}, the minimun is ${min}, and the maximum is ${max}`:
    `${numbersEntered} the average is ${average}, the minimun is ${minimum}, and the maximum is ${maximum}`;
    
    alert(ShowStatistics);
}
  