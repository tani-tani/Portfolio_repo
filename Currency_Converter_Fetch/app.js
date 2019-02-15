const currencySource = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const converterBody = document.querySelector('.body-converter');
const currencySelect = document.querySelector('#choose-currency');
const result = document.querySelector('#result-show');
const convertForm = document.getElementById('form-convert');
const input = document.getElementById('insert-sum');
const resultInput = document.getElementById('result-show');

input.focus();

fetch(currencySource)
    .then(response => response.json())
    .then(currencyArray => new Map(currencyArray.map(i => [i.cc, i.rate])))
    .then((currenciesMap) => {
        currenciesMap.forEach((rate, code) => {
            const option = document.createElement('option');
            option.innerText = code;
            currencySelect.appendChild(option);
        })
        convertForm.addEventListener('change', (event) => {
            let selectedCurrency = currencySelect.value;
            const exchangeRate = currenciesMap.get(selectedCurrency);
            const exchangeResult = exchangeRate * input.value;
            resultInput.innerHTML = exchangeResult;
        })
    });