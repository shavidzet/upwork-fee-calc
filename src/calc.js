const R = require('ramda')

const clear = (n) => n.toFixed(2)
const fixN = R.pipe(clear, parseFloat)
const percentage = R.pipe(
    R.multiply,
    R.divide(R.__, 100)
)
const fee = R.pipe(
    percentage,
    fixN
)
const amountWithoutFee = R.pipe(R.subtract, fixN)

const calculate = (amount, contractFee, countryFee) => {
    const calcContractFee = fee(
        amount,
        contractFee
    )
    const calcCountryFee = fee(
        calcContractFee,
        countryFee
    )
    const fees = R.add(
        calcContractFee,
        calcCountryFee
    )
    const result = amountWithoutFee(
        amount,
        fees
    )
    return result
}

module.exports = calculate