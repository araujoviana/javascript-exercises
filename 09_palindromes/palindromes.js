const palindromes = function (potentialPalindrome) {  
    console.log(potentialPalindrome == potentialPalindrome.split('').reverse().join(''));

    if (potentialPalindrome.replace(/[^A-Za-z0-9]/g, '').toUpperCase() == potentialPalindrome.replace(/[^A-Za-z0-9]/g, '').toUpperCase().split('').reverse().join('')) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
