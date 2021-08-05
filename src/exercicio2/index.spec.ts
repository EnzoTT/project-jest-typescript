import {
    isInTheArray,
    sumOfQuadraticDigits,
    checkHappyNumber
} from './index'

const array:number[] = [1,2,3]

describe("Testes do exercicio 2", () => {
    
    it('Valida que 3 está no array [1,2,3]', () => {
        expect(isInTheArray(3 , array)).toBe(true);
    })

    it('Valida que 5 não está no array [1,2,3]', () => {
        expect(isInTheArray(5 , array)).toBe(false);
    })

    it('Verifica que a soma dos digitos de 97 elevado ao quadrado é 130', () => {
        expect(sumOfQuadraticDigits(97)).toBe(130);
    })

    it('Valida que 7 é um número feliz', () => {
        expect(checkHappyNumber(7)).toBe(true);
    })
    
    it('Valida que 9 não é um número feliz', () => {
        expect(checkHappyNumber(9)).toBe(false);
    })
});
