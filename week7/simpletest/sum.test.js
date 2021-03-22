const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toEqual(3);
})

test('adds 3 + 2 to equal 5', () => {
    expect(sum(4,2)).toEqual(6);
})

test('null', () => { 
    const n = null; 
    expect(n).toBeNull(); 
    expect(n).toBeDefined(); 
    expect(n).not.toBeUndefined(); 
    expect(n).not.toBeTruthy(); 
    expect(n).toBeFalsy(); }); 