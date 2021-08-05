import {
    isInTheRange,
    checkIfIsLowerCase,
    checkIfIsUpperCase,
    transferCharToCorrectNumber,
    calculateStringValue,
    isPrime,
    checkStringProperties
} from './index'

describe("Testes do exercicio 3", () => {

    it('Valida que 3 está no intervalo de 1 a 5', () => {
        expect(isInTheRange(3,1,5)).toBe(true);
    })

    it('Valida que 7 não está no intervalo de 1 a 5', () => {
        expect(isInTheRange(7,1,5)).toBe(false);
    })

    it('Valida que a é uma letra minúscula', () => {
        expect(checkIfIsLowerCase(97)).toBe(true);
    })

    it('Valida que A é uma letra maiúscula', () => {
        expect(checkIfIsUpperCase(65)).toBe(true);
    })

    it('Transforma o char A no número 27', () => {
        expect(transferCharToCorrectNumber('A')).toBe(27);
    })

    it('Transforma o char Z no número 52', () => {
        expect(transferCharToCorrectNumber('Z')).toBe(52);
    })

    it('Transforma o char z no número 26', () => {
        expect(transferCharToCorrectNumber('z')).toBe(26);
    })

    it('Transforma o char a no número 1', () => {
        expect(transferCharToCorrectNumber('a')).toBe(1);
    })

    it('Transforma o char - no número 0', () => {
        expect(transferCharToCorrectNumber('-')).toBe(0);
    })

    it('Verifica que o valor da string aA é 28', () => {
        expect(calculateStringValue('aA')).toBe(28);
    })

    it('Verifica que o valor valor da string -- é 0 ', () => {
        expect(calculateStringValue('--')).toBe(0);
    })

    it('Valida que 7 é um número é primo', () => {
        expect(isPrime(7)).toBe(true);
    })

    it('Valida que 8 não é um número é primo', () => {
        expect(isPrime(8)).toBe(false);
    })

    it('Verifica que a string bbba é um número feliz e primo', () => {
        expect(checkStringProperties('bbba')).toStrictEqual({"isHappyNumber": true, "isMultipleOfThreeOrFive": false, "isPrime": true});
    })

    it('Verifica que a string eea-[ é um número primo ', () => {
        expect(checkStringProperties('eea-[')).toStrictEqual({"isHappyNumber": false, "isMultipleOfThreeOrFive": false, "isPrime": true});
    })

    it('Verifica que a string aaa-- é um multiplo de 5 ', () => {
        expect(checkStringProperties('aaa--')).toStrictEqual({"isHappyNumber": false, "isMultipleOfThreeOrFive": true, "isPrime": true});
    })

});
