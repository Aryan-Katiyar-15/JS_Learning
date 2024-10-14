const account_ID= 12345                          /// value cant be changed further 
let account_email="aryan1234@gmail.com"
var account_password="987456"
accountCity="Kanpur"
let accountstate;

// accountID =2 // not allowed 
 
account_email="hello456@gmail.com"

account_password="852647"

accountCity="delhi";

// to avoid multiple console.log function for multiple output we use console.table

console.table([account_ID,account_email,account_password,accountCity,accountstate])

/*
prefer not to use var
because of issue in block scope and functional scope

*/