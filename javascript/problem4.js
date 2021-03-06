/*
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.
    */

//function that determines a palindrome
function isPalindrome(x)
{
    return x.toString() == x.toString().split("").reverse().join("");
}

//hold largest palindrome
var largest = 0;

//test product of all integers with 3 digits.
for(var i = 100; i < 999; i++)
{
    for(var j = 100; j < 999; j++)
    {
        var product = i * j;

        if(isPalindrome(product))
        {
            if(largest < product)
            {
                largest = product; 
            }
        }
    }
}

console.log(largest);
