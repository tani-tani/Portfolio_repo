$(document).ready(function() {
    const $myMap = new Map([
        ['USD', {
            buy: 27.5861,
            sell: 28.0417,
        }],
        ['EUR', {
            buy: 31.3988,
            sell: 32.152,
        }],
        ['RUB', {
            buy: 0.3399,
            sell: 0.4188,
        }]

    ]);


    const $currencySelect = $('#choose-currency');
    const $convertForm = $('#form-convert');
    const $input = $('#insert-sum');
    const $resultInput = $('#result-show');

    $input.focus();

    for (let $key of $myMap.keys()) {
        const $option = document.createElement('option');
        $option.value = $key;
        $option.innerText = $key;
        $currencySelect.append($option);
    }


    //function  EXCHANGE
    function exchange(currency, operation, amount) {
        const $rate = $myMap.get(currency)[operation];
        return $rate * amount;
    }

    //Change event
    $convertForm.on('change', () => {
        const $currency = $currencySelect.val();
        const $operation = $('[name="operation"]:checked').val();
        const $amount = $input.val();

        const result = exchange($currency, $operation, $amount);
        $resultInput.html(result);
    });


});