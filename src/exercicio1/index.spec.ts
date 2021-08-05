import {
    isMultipleOfThreeOrFive,
    isMultipleOfThreeAndFive,
    isMultipleOfThreeOrFiveAndSeven,
    sumOfMultpleOfThreeOrFive,
    sumOfMultpleOfThreeAndFive,
    sumOfMultipleOfThreeOrFiveAndSeven
} from './index'

describe("Testes do exercicio 1", () => {
    //isMultipleOfThreeOrFive
    it('Valida que 5 o número é multiplo de 3 ou 5', () => {
        expect(isMultipleOfThreeOrFive(5)).toBe(true);
    })

    it('Valida que 3 o número é multiplo de 3 ou 5', () => {
        expect(isMultipleOfThreeOrFive(3)).toBe(true);
    })

    it('Valida que 7 não é multiplo de 3 ou 5', () => {
        expect(isMultipleOfThreeOrFive(7)).toBe(false);
    })

    //isMultipleOfThreeAndFive
    it('Valida que 15 é multiplo de 3 e 5', () => {
        expect(isMultipleOfThreeAndFive(15)).toBe(true);
    })

    it('Valida que 5 não é multiplo de 3 e 5', () => {
        expect(isMultipleOfThreeAndFive(5)).toBe(false);
    })

    //isMultipleOfThreeOrFiveAndSeven
    it('Valida que 5 não é multiplo de (5 ou 3) e 7', () => {
        expect(isMultipleOfThreeOrFiveAndSeven(5)).toBe(false);
    })

    it('Valida que 105 é multiplo de (5 ou 3) e 7', () => {
        expect(isMultipleOfThreeOrFiveAndSeven(105)).toBe(true);
    })

    //sumOfMultpleOfThreeOrFive
    it('Soma dos número multiplos de 5 ou 3', () => {
        expect(sumOfMultpleOfThreeOrFive()).toBe(233168);
    })

    //sumOfMultpleOfThreeAndFive
    it('Soma dos número multiplos de 5 e 3', () => {
        expect(sumOfMultpleOfThreeAndFive()).toBe(33165);
    })
    
    //sumOfMultipleOf3Or5And7
    it('Soma dos número multiplos de (5 ou 3) e 7', () => {
        expect(sumOfMultipleOfThreeOrFiveAndSeven()).toBe(33173);
    })
});
