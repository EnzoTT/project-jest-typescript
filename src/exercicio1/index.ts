//Exercicio 1
export function isMultipleOfFive(number: number) {
    return(number % 5 === 0) 
}
export function isMultipleOfThree(number: number) {
    return(number % 3 === 0) 
}
export function isMultipleOfSeven(number: number) {
    return(number % 7 === 0) 
}

export function isMultipleOfThreeOrFive(number: number) {
    return(isMultipleOfThree(number)|| isMultipleOfFive(number))  
}

export function isMultipleOfThreeAndFive(number: number) {
    return(isMultipleOfThree(number) && isMultipleOfFive(number))  
}

export function isMultipleOfThreeOrFiveAndSeven(number: number) {
    return (isMultipleOfThreeOrFive(number) && isMultipleOfSeven(number))    
}

export function sumOfMultpleOfThreeOrFive() {
    const reducer = (accumulator:number, curr:number) => isMultipleOfThreeOrFive(curr)? accumulator + curr: accumulator;
    var array: number[] = Array.from(Array(1000).keys())
    return  array.reduce(reducer);
}

export function sumOfMultpleOfThreeAndFive() {
    const reducer = (accumulator:number, curr:number) => isMultipleOfThreeAndFive(curr)? accumulator + curr: accumulator;
    var array: number[] = Array.from(Array(1000).keys())
    return  array.reduce(reducer);
}

export function sumOfMultipleOfThreeOrFiveAndSeven() {
    const reducer = (accumulator:number, curr:number) => isMultipleOfThreeOrFiveAndSeven(curr)? accumulator + curr: accumulator;
    var array: number[] = Array.from(Array(1000).keys())
    return  array.reduce(reducer);
}