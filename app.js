const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 106.58;
    //return the dollar value
    return valueInYen;
}

const fromYentoPound = function(valueYen){
    let valueinPound= valueYen*0.00625
    return valueinPound
}

module.exports = { sum, fromEuroToDollar, fromDollartoYen , fromYentoPound }