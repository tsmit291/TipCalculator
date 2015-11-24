var button = document.getElementById('submitButton');
var bill = document.getElementById('billAmt');


button.addEventListener('click', tipCalc);

function tipCalc() {
  var myBill = bill.value.replace("$", ''); //Number is a built in function. Before this, it is taking myBill from the form as a string. The replace method is making sure if there is a $ input by the user, it is removed. Otherwise, you will get a NaN error.
  var twenty = (myBill * .2).toFixed(2); //.2
  var fifteen = (myBill * .15).toFixed(2); //.15
  var ten = (myBill * .10).toFixed(2); // .10
  var newBilltwenty = parseFloat(myBill) + parseFloat(twenty);
  var newBillfifteen = parseFloat(myBill) + parseFloat(fifteen);
  var newBillten = parseFloat(myBill) + parseFloat(ten);
  
  document.getElementById('newTiptwenty').innerHTML="(20% tip) You should tip: $" + twenty;
  document.getElementById('newBilltwenty').innerHTML="Your new total is: $" + newBilltwenty;
  document.getElementById('newTipfifteen').innerHTML="(15% tip) You should tip: $" + fifteen;
  document.getElementById('newBillfifteen').innerHTML="Your new total is: $" + newBillfifteen;
  document.getElementById('newTipten').innerHTML="(10% tip) You should tip: $" + ten;
  document.getElementById('newBillten').innerHTML="Your new total is: $" + newBillten;
}
