import when from '../src/index.js'

test('object have key a, b', () => {
    const testObject = {
        a: 'xxxx',
        b: 'xxxxx'
    }
    expect(when(testObject, ['a', 'b'])).toBe(true)
});

test('object donot have key a, b', () => {
    const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
    expect(when(testObject, ['a', 'b'])).toBe(false);
});

test('object donot have key a, b', () => {
    const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
    expect(when(testObject, ['a', 'b'])).toBe(false);
});

test('object have key a = xx', () => {
    const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
    expect(when(testObject, {a: 'xx'})).toBe(true);
});

test('object do not have key a = xxxx', () => {
    const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
    expect(when(testObject, {a: 'xxxx'})).toBe(false);
});

test('object have key a = xx && have key c', () => {
    const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
    expect(when(testObject, [{a: 'xx'}, 'c'])).toBe(true);
});

test('object do not have key a = xx && have key c', () => {
    const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
    expect(when(testObject, [{a: 'xxxx'}, 'c'])).toBe(false);
});

test('object have key a = xx &&  c = xxxx', () => {
    const testObject = {
        c: 'xxxx',
        a: 'xx'
    }
    expect(when(testObject, {a: 'xx', c:'xxxx'})).toBe(true);
});