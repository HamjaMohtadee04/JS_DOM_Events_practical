const WithdrawButtonId = document.getElementById("WithdrawButton").addEventListener("click",function(){
    // console.log("clicked withdrawbutton");
    //step 2 get the input field amount
    const userWithdrawField  = document.getElementById("userWithdraw");
    const WithdrawButtonIdString = userWithdrawField.value;
    const WithDrawFieldvalue = parseFloat(WithdrawButtonIdString);
    // console.log(WithDrawFieldvalue);

 const initialwithdrawamount = document.getElementById("withdrawTotal");
 const initialwithdrawValue = initialwithdrawamount.innerText;
 const initialWithdraw = parseFloat(initialwithdrawValue);

 //for balance
 const initialBalance = document.getElementById("balance_total");
 const initialBalanceString = initialBalance.innerText;
 const previousinitialBalance = parseFloat(initialBalanceString);
 console.log(previousinitialBalance);

 

 const totalwithdraw = initialWithdraw + WithDrawFieldvalue;
//  console.log(totalwithdraw);

//set the withdraw total
initialwithdrawamount.innerText = totalwithdraw;


//set the current balance

const currentBalance = previousinitialBalance - totalwithdraw;
// console.log(currentBalance);
//set the current balance
initialBalance.innerText = currentBalance;

 //clear userwithdraw input field
     userWithdrawField.value = '';
});




