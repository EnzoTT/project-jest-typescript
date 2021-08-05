
import {checkHappyNumber} from '../exercicio2/index'
import {isMultipleOfThreeOrFive} from '../exercicio1/index'

export function isInTheRange(x: number, min: number, max: number) {
    return x >= min && x <= max;
}

export function checkIfIsLowerCase(ASCIIcode: number) {
    const a_PositionInASCII = 97;
    const z_PositionInASCII = 122;
    return isInTheRange(ASCIIcode, a_PositionInASCII, z_PositionInASCII)
}

export function checkIfIsUpperCase(ASCIIcode: number) {
    const A_PositionInASCII = 65;
    const Z_PositionInASCII = 90;
    return isInTheRange(ASCIIcode, A_PositionInASCII, Z_PositionInASCII)
}

export function transferCharToCorrectNumber(string: string) {
    var ASCIIcode: number = string.charCodeAt(0);
    if (checkIfIsLowerCase(ASCIIcode)) {
        return ASCIIcode - 96;
    }
    if (checkIfIsUpperCase(ASCIIcode)) {
        return ASCIIcode - 38;
    }
    return 0;
}

export function calculateStringValue(string: string) {
    var stringSeparated: string[] = string.split('');
    var result:number = 0;

    for (var i: number = 0; i < stringSeparated.length; i++) {
        result += transferCharToCorrectNumber(stringSeparated[i])
    }

    return result;
}

export function isPrime(number:number) {
    for (let i = 2; i < number; i++)
      if (number % i === 0) {
        return false;
      }
    return number > 1;
};


interface Properties {
    isPrime: boolean;
    isHappyNumber: boolean;
    isMultipleOfThreeOrFive: boolean;
}


export function checkStringProperties(string:string) {
    var stringValue:number = calculateStringValue(string);

    var properties:Properties ={
        isPrime: isPrime(stringValue),
        isHappyNumber: checkHappyNumber(stringValue),
        isMultipleOfThreeOrFive: isMultipleOfThreeOrFive(stringValue)
    }

    return properties;
}