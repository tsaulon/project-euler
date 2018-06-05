
/*
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(x)
{
    var flag = true;
    
    //test if numbers are divisible by numbers other than 1 or itself.
    for(var i = 2; i < x; i++)
    {
        if(x % i === 0)
        {
            flag = false;
        }
    }

    return flag;
}

function getLargestPrime(y)
{
    var nums = [];

    for(var i = 2; i < y; i++)
    {
        //collect numbers that divide without remainder in nums
        if(y % i === 0)
        {
            nums.push(i);
        }
    }

    //filter array for prime numbers
    var nums = nums.filter(function(z){ return isPrime(z) });

    //grab last element of array (sort not needed).
    return nums[nums.length - 1];
}

console.log(getLargestPrime(600851475143));

//optimization for compilation time is still needed.
