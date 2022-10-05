const addMoney = document.getElementById("addMoney");
const money = document.getElementById("money");
function add100(){
    money.innerText = (parseInt(money.innerText) + 100).toString();
    console.log((parseInt(money.innerText) + 100).toString());
}
addMoney.onclick = add100;
