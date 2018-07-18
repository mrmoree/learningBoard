
var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

console.log(Object.getOwnPropertyNames(pres));

console.log("1. task");
//1. task
var count = 0;
for(var prop in pres) {
    if(pres.hasOwnProperty(prop)) {
        console.log(prop + " " + typeof pres[prop]);
    }
}
console.log("task 1 prop count " + count);
console.log("2. task");
//2. task
var task2count = 0;
for(prop in pres) {
    console.log(prop);
    task2count++;
}
console.log("task 2 prop count " + task2count);

