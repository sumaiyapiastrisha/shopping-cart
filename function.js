





function update(product, increasing, price) {

    const caseinput = document.getElementById(product + '-number');
    if (increasing == true) {
        let caseNumber = parseInt(caseinput.value) + 1;
        caseinput.value = caseNumber;

    }
    else {
        if (caseinput.value > 0) {
            let caseNumber = parseInt(caseinput.value) - 1;
            caseinput.value = caseNumber;
        }

    }
    const updatetotal = document.getElementById(product + '-total');

    updatetotal.innerText = price * caseinput.value;

    total();

}

function total() {
    console.log(5);
    const phonetk = document.getElementById('case-number').value * 59;
    console.log(phonetk);
    const casetk = document.getElementById('phone-number').value * 112;
    const totaltk = phonetk + casetk;
    const totaltax = totaltk / 10;

    document.getElementById('Subtotal').innerText = totaltk;
    document.getElementById('tax').innerText = totaltax;
    document.getElementById('totalamount').innerText = totaltk + totaltax;
}

const plus = document.getElementById('case-plus');
plus.addEventListener('click', function () {

    update('case', true, 59);

})
const minus = document.getElementById('case-minus');
minus.addEventListener('click', function () {

    update('case', false, 59);


})
const plus1 = document.getElementById('phone-plus');
plus1.addEventListener('click', function () {

    update('phone', true, 112);

})
const minus1 = document.getElementById('phone-minus');
minus1.addEventListener('click', function () {

    update('phone', false, 112);


})