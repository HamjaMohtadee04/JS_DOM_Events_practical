//step1 add add event listener on login button
document.getElementById("SubmitButton").addEventListener("click",function(){
   //step 2  get the email address inside the email address field
   //always remember to use .value to get text from an input field
   const EmailField = document.getElementById("userEmail");
   const Email = EmailField.value;
   console.log(Email);

 //step 3  get the password inside the password field
   //always remember to use .value to get text from an input field
 
   const PasswordField = document.getElementById("userPassword");
   const Password = PasswordField.value;
   console.log(Password);

   //step -4 
   //do not verify email password on the client side

   if (Email ==="dummyemail1@gmail.com" && Password=== "1234"){
    console.log("valid user");
   }
   else{
    console.log("invalid user");
   }

});