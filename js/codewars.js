/*
Code Wars Problem 2
Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter,the original string. 
You don't have to worry with strings with less than two characters.
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
*/

function removeChar(str){
    return str.slice(1, -1)
};



/*
Code Wars Problem 1
https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/solutions/javascript
Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.
Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}