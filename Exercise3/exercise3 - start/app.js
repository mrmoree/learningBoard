//Immediately invoke all three functions.


//Create a function that adds two numbers and assign it to a variable
var sum = (function(num1,num2){
    return num1 + num2;
})(3,4)

//Create a function that multiplies the previous number by itself and store it in a second variable.
var multiple = (function() {
    return sum*sum;
})(sum);

//Create a function that prints to the console the variable that contains the results of the previous function.

(function(){
    console.log(multiple)
})(multiple);   