const accountId = 12345 
let accountEmail = "abc@gmil.com" 
var accountPassword = "12345"
accoiuntCity = "jaipur"


console.log(accountId);
/*prefer not to use var
due to issue in block and functional scope */
accountEmail="qwe@gmail.com"
accountPassword="123233"
accoiuntCity="delhi"
let accountState;
console.table([accountEmail, accountPassword, accoiuntCity,accountState]);