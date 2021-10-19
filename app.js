const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = (valueInDollar/oneEuroIs.USD)*oneEuroIs.JPY;
    //return the dollar value
    return valueInYen;
}

const fromYentoPound = function(valueYen){
    let valueinPound= (valueYen/oneEuroIs.JPY)*oneEuroIs.GBP
    return valueinPound
}

module.exports = { sum, fromEuroToDollar, fromDollartoYen , fromYentoPound }