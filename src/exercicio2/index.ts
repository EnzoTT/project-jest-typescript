//Exercicio 2
export function isInTheArray(number: number, array: number[]) {
    return array.indexOf(number) !== -1;
}

export function sumOfQuadraticDigits(number: number) {
    var result: number = 0;

    while (number > 0) {
        result += Math.pow(number%10,2);
        number = Math.floor(number/10);
    }

    return result
};

export function checkHappyNumber(number: number) {
    var numbersAlreadyValid: number[] = [];
    var checkNumber:number = number;

    while(checkNumber !== 1){
        if(isInTheArray(checkNumber, numbersAlreadyValid)){
            return false;
        }
        numbersAlreadyValid.push(checkNumber);
        checkNumber = sumOfQuadraticDigits(checkNumber);
    }
    return true;
}
