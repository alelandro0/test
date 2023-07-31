import operaciones from '../operaciones';


test('multiplicar 3 por 5 es igual a 15', () => {
  expect(operaciones.multi(3, 5)).toBe(15);
});


test('raíz cuadrada de 25 es igual a 5', () => {
  expect(operaciones.raizCuadrada(25)).toBe(5);
});


test('2 elevado a la potencia 3 es igual a 8', () => {
  expect(operaciones.potencia(2, 3)).toBe(8);
});


test('división de 10 por 2 es igual a 5', () => {
  expect(operaciones.divicion(10, 2)).toBe(5);
});


test('área de un círculo con radio 5 es igual a 78.5', () => {
  expect(operaciones.areaCirculo(5)).toBe(78.5);
});


test('suma de 2 más 3 es igual a 5', () => {
  expect(operaciones.suma(2, 3)).toBe(5);
});


test('resta de 5 menos 2 es igual a 3', () => {
  expect(operaciones.resta(5, 2)).toBe(3);
});


test('factorial de 5 es igual a "1 + 2 + 3 + 4 + 5 = 15"', () => {
  expect(operaciones.factorial(5)).toBe('1 + 2 + 3 + 4 + 5 = 15');
});


test('3 es impar', () => {
  expect(operaciones.pares(3)).toBe('3 es impar');
});

test('4 es par', () => {
  expect(operaciones.pares(4)).toBe('4 es par');
});


test('área de un cilindro con radio 2 y altura 5 es igual a 62.8', () => {
  expect(operaciones.areaDeUnCilindro(2, 5)).toBe(62.8);
});
