import { html, render } from 'lit-html/lib/lit-extended';
import upworkFeeCalc from './calc'
import './style.scss'

const inputs = {
    amount: 0,
    contractFee: 0,
    vat: 0
}

const calc = () => {
    const calculated = upworkFeeCalc(
        inputs.amount,
        inputs.contractFee,
        inputs.vat
    )
    return isNaN(calculated)
        ? 0
        : `${calculated} $` 
}

const handleInputChange = (e) => {
    const { name } = e.target
    inputs[name] = e.target.value
    renderApp()
}


const template = () => html`
    <div class="d-flex">
        <div class="distance-l">
            <div>Amount <i>($)</i></div>
            <input
                autofocus
                name="amount"
                type="number"
                value=${inputs.amount}
                on-keyup=${handleInputChange}
            />
        </div>
        <div class="distance-l">
            <div>Contract fee <i>(%)</i></div>
            <input
                name="contractFee"
                type="number"
                value=${inputs.contractFee}
                on-keyup=${handleInputChange}
            />
        </div>
        <div class="distance-l">
            <div>VAT <i>(%)</i></div>
            <input
                name="vat"
                type="number"
                value=${inputs.vat}
                on-keyup=${handleInputChange}
            />
        </div>
    </div>
    <div class="distance-y distance-l text-center">
        <h3>Calculated: ${calc()}</h3>
    </div>
`

const renderApp = () => render(template(), document.body)

renderApp()