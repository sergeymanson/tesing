# Тестовое задание

> тестовое задание php/js

## PHP 

### Задание 1
``` 
Here we have a function that helps us spam our hearty laughter. 
function spam($number){
  // TODO: Not returning the expected value.
  return "hue" * number;
}
But it's not working! We need you to fix it:
Expected results:
spam(1);//hue
spam(6);//huehuehuehuehuehue
spam(14);//huehuehuehuehuehuehuehuehuehuehuehuehuehue
Your Solution:
function spam($number){
  return "hue" * number; //TODO: Rewrite to make the function work
}
```

Предложенное решение [тут](php/task1.php).

### Задание 2
``` 
Complete the solution so that the function will break up camel casing, using a space between words.
You are free to implement and other additional features that you find reasonable as long as they meet the basic requirements.
Example
solution('camelCasing') should return 'camel Casing'
Your Solution:
// complete the function, PHP
function solution($string) {
  //...    
}
```
Предложенное решение [тут](php/task2.php).

### Задание 3

``` 
In elementary arithmetic a "carry" is a digit that is transferred from one column of digits to another column of more significant digits during a calculation algorithm. This task is about determining the number of carries performed during the addition of multi-digit numbers.
You will receive an input array, containing a set of pairs of numbers formatted as follows:
["123 456", "555 555", "123 594"]
And your output should be an array, formatted as follows:
["No carry operations", "3 carry operations", "1 carry operations"]
Some Assumptions:
- Assume that numbers can be of any length, but lower than MAX_INT/2, so you don't need to check range.
- The input may contain any arbitrary number of pairs.
Support of strings with arbitrary number of operands (like "123 456 222 .... 789") would be a plus
Your Solution:
// complete the function, PHP
function carry($input){
  return "";
}
```

Предложенное решение [тут](php/task3.php).

## JS
 
 ### Задание 1
 ```
 We would like you to implement an autocomplete function. The function will take in an input string and a dictionary array and return 
 the values from the dictionary that start with the input string. 
 Example:
 autocomplete('ai', ['airplane','airport','apple','ball']); // should return ['airplane','airport']
 Here's the list of other requirements:
 - If the current input string doesn't match anything, try to cut off last characters one by one until it does or no characters left. E.g. 
 autocomplete(('aim', ['airplane','airport','apple','ball'])) should still return ['airplane','airport'] because 'aim' doesn't match anything, but 'ai' does.
 - Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".
 - If there are more than 5 matches, restrict your output to the first 5 results. 
 - If there are no matches, return an empty array.
 - The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.
 Your Solution:
 // complete the function, JavaScript
 function autocomplete(input, dictionary){
   //
 }
 ```
 Предложенное решение [тут](js/task1.js).
 
  ### Задание 2
  ```
Write a functions that will make basic math calculations to produce results like in the following example. Please, do not use "eval":
three(times(five())); // must return 15
eight(minus(two())); // must return 6
one(plus(six(dividedBy(three())))); // must return 3
Your Solution (you can change the template whatever you want as long as the method calls, listed in function checkCalculations, remain unchanged):
function zero(x) {}
function one(x)  {}
function two(x)  {}
function three(x)  {}
function four(x)  {}
function five(x)  {}
function six(x)  {}
function seven(x)  {}
function eight(x)  {}
function nine(x)  {}
function plus(x) {}
function minus(x) {}
function times(x) {}
function dividedBy(x) {}
function checkCalculations() {
    console.log(three(times(five())));
    console.log(four(plus(eight())));
    console.log(eight(minus(two())));
    console.log(six(dividedBy(three())));
}
```
Предложенное решение [тут](js/task2.js).

## SQL

### Задание 1

```
We have two tables.
    Table: department
        Fields:
        id Number (pk)
        name Varchar(100)
    Table: employee
        Fields:
        id Number (pk)
        department_id Number
        chief_id Number
        name Varchar(100)
        salary Number
        
Please write SQL queries for:
- Display a list of employees, who receive salary greater than the direct chief's salary.
- Display a list of all departments along with an employee who receives the maximum salary in it. if more than one employee has the maximum salary, display all. The department should be shown even if it has no employees.
- Display a list of employees, who have exactly one direct subordinate.
- Display a list of departments sorted by total salary of employees in it, descending
```
Предложенное решение [тут](sql/task1.js).