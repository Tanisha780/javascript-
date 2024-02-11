const accountId = 144553
let accountEmail = "tanisha345@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; // if only declare and not define value to that variable then js takes that value as undefined
//accountId = 2 //notallowed \\ beacuse it is constant it cant be changed

console.log(accountId);
accountEmail = "tanisha34@gmail.com"
accountPassword = 234
accountCity= "france"
// we cant use var if we use it and when we have to change in some new file then all values having var should be changed (issue in block and functions scope)
// so we dont usse var keyword insstead of var we use let keyword
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])