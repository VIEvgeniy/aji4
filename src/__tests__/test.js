import calculateTotal from '../calculate.js';

test('basic test', () => {
    const result = 4;
    expect(result).toBe(4);
});

test('calculet sum without discound', () => {
    const list = [
        {
            id: 546,
            name: 'Воина и мир',
            count: 3,
            price: 400
        },
        {
            id: 55,
            name: 'Javascript',
            count: 1,
            price: 1300
        }
    ];
    const result = calculateTotal(list, false);
    expect(result).toBe(2500);
});

test('calculet sum with discound', () => {
    const list = [
        {
            id: 546,
            name: 'Воина и мир',
            count: 3,
            price: 401
        },
        {
            id: 55,
            name: 'Javascript',
            count: 1,
            price: 1300
        }
    ];
    const result = calculateTotal(list, true);
    expect(result).toBeCloseTo(2230.173);
})