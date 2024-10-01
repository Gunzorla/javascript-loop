// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
function reverseWord(str) {
    return str.split('').reverse().join('');
}

reversedCompanyName = reverseWord(companyName);

console.log(reversedCompanyName);
