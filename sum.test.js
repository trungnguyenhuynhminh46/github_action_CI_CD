const sum = require('./sum');

test('properly adds two numbers', () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 2)).toBe(3);
})