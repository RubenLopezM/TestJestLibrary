const { TestWatcher } = require('@jest/core')
const { sum, fromDollartoYen } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("We test the function Dollar to yen", function(){
    //import the function from app.js
    const { fromDollartoYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollartoYen(3.5)

    const expected = (3.5/1.2*127.9); 
    
    // this is the comparison for the unit test
     expect(fromDollartoYen(3.5)).toBe(373.04166666666674); 
})

test("We test the function Yen to Pound", function(){

    const { fromYentoPound } = require('./app.js')

    const pounds = fromYentoPound(2);

    const expected= (2/127.9)*0.8

    expect(fromYentoPound(2)).toBe(0.012509773260359656)
})