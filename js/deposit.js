document.getElementById("DepositButton").addEventListener("click",function(){
  //get the amount from the deposit amount field
  const DepositField = document.getElementById("userDepositField");
  const newDepositeAmountString = DepositField.value;
  const newDepositeAmount = parseFloat(newDepositeAmountString);
   //console.log(typeof newDepositeAmount);

//step 3 get the amount of deposit
//for non input (element other than input textarea) use innerText to get the text
const depositTotalElement = document.getElementById("initialDepositAmount");
const previousdepositTotalString = depositTotalElement.innerText;
const previousdepositTotal = parseFloat(previousdepositTotalString);
// console.log(depositTotal)

//add numbers to set the total deposit
const currentDepositTotal = newDepositeAmount+previousdepositTotal;

//get current balance total
 const balancetotalElement = document.getElementById("balance_total");
const previousbalanceTotalString= balancetotalElement.innerText;
 const previousbalanceTotal = parseFloat(previousbalanceTotalString);





///calculate current balance

const CurrentBalanceTotal = previousbalanceTotal + currentDepositTotal;

//set the deposit total
depositTotalElement.innerText = currentDepositTotal;

//set the balance total
balancetotalElement.innerText = CurrentBalanceTotal;




//clear the deposit field
DepositField.value ='';
});