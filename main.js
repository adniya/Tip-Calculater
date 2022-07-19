var billperPerson = document.getElementById('bill-per');
var tip = document.getElementById('tip');
var bill = document.getElementById('bill-input').value;
const custom = document.getElementById('custom').value;
const person = document.getElementById('total-person');
const nodeList = document.querySelectorAll('#btn');
nodeList.forEach(node => {
    node.addEventListener('click', clickHandler);

});


function clickHandler(e) {
    var bill = document.getElementById('bill-input').value;
    if (e.target.textContent === '5%') {
        let tipbill=0.05 * bill;
        let totalbill = + bill + (tipbill);
        console.log(totalbill);
        console.log(person.value);
        let result = totalbill / person.value;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent === '10%') {
        let tipbill=0.01 * bill;
        let totalbill = + bill + (tipbill);
        console.log(totalbill);
        console.log(person.value);
        let result = totalbill / person.value;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == '15%') {
        let tipbill=0.15 * bill;
        let totalbill = + bill + (tipbill);
        console.log(totalbill);
        console.log(person.value);
        let result = totalbill / person.value;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == '25%') {
        let tipbill=0.25 * bill;
        let totalbill = + bill + (tipbill);
        console.log(totalbill);
        console.log(person.value);
        let result = totalbill / person.value;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == '50%') {
        let tipbill=0.5 * bill;
        let totalbill = + bill + (tipbill);
        console.log(totalbill);
        console.log(person.value);
        let result = totalbill / person.value;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == custom) {
        custom = custom / 100;
        bill = custom * bill;
    }
};

function customn() {
    let bill = document.getElementById('bill-input').value;
    let custom = document.getElementById('custom').value;
    let tip = document.getElementById('tip');
    let billperPerson = document.getElementById('bill-per');
    let person = document.getElementById('total-person').value;
    var x = document.getElementById("custom").value;
    x = x / 100;
    const tipbill = x * bill;
    let totalbill = +bill + +tipbill;
    let result = totalbill / person;
    billperPerson.textContent = '$' + result.toFixed(2);
    tip.textContent = '$' + tipbill.toFixed(2);

}
function del() {
    billperPerson.textContent = "$0.00";
    tip.textContent = "$0.00";
}