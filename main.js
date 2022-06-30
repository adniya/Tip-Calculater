var billperPerson = document.getElementById('bill-per');
var tip = document.getElementById('tip');
var bill = document.getElementById('bill-input').value;
const custom = document.getElementById('custom').value;
    const person = document.getElementById('total-person').value;
const nodeList = document.querySelectorAll('#btn');
function clickHandler(e) {

    if (e.target.textContent === '5%') {
        const tipbill = 0.05 * bill;
        let totalbill = +bill + +tipbill;
        console.log(totalbill);
        let result = totalbill / person;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent === '10%') {
        const tipbill = 0.1 * bill;
        let totalbill = +bill + +tipbill;
        console.log(totalbill);
        let result = totalbill / person;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == '15%') {
        const tipbill = 0.15 * bill;
        let totalbill = +bill + +tipbill;
        console.log(totalbill);
        let result = totalbill / person;
        console.log(result);
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == '25%') {
        const tipbill = 0.25 * bill;
        let totalbill = +bill + +tipbill;
        console.log(totalbill);
        let result = totalbill / person;
        console.log(result);
        billperPerson.textContent = '$' + result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == '50%') {
        const tipbill = 0.5 * bill;
        let totalbill = +bill + +tipbill;
        console.log(totalbill);
        let result = totalbill / person;
        billperPerson.textContent = result;
        tip.textContent = '$' + tipbill.toFixed(2);
    }
    if (e.target.textContent == custom) {
        custom = custom / 100;
        bill = custom * bill;
        console.log(bill);
    }
};
nodeList.forEach(node => {
    node.addEventListener('click', clickHandler);

});
function myFunction(){
    let bill = document.getElementById('bill-input').value;
    let custom = document.getElementById('custom').value;
    let tip = document.getElementById('tip');
    let billperPerson = document.getElementById('bill-per');
    let person = document.getElementById('total-person').value;
    var x = document.getElementById("custom").value;
    x=x/100;
    console.log(x);
    const tipbill =x * bill;
    let totalbill = +bill + +tipbill;
    console.log(totalbill);
    let result = totalbill / person;
    console.log(result);
    billperPerson.textContent = '$' + result.toFixed(2);
    tip.textContent = '$' + tipbill.toFixed(2);

}
function del(){
    billperPerson.textContent="$0.00";
    tip.textContent="$0.00";
}