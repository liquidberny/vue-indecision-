// sum.test.js
import { expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';
import { describe } from 'node:test';
describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    //   if (sum(1,2) !== 3){
    //     throw new Error('La suma no es correcta');
    //   }
  });
});

describe('addArray', () =>{
    test('La suma del arreglo [1,2,3,4] es 10', () => {
      expect(addArray([1, 2, 3, 4])).toBe(10);
    });
    
    test('La suma del arreglo [] es 0', () => {
      expect(addArray([])).toBe(0);
    });
    
})

