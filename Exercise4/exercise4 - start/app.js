var MYAPP = MYAPP || {};
(function(namespace) {
    namespace.clickCount = 0;
    myNames = ["Anne", "Tristan", "Ena", "Oliver"];

    var greeting = function( myNames ) {
        var randomNumber = Math.floor( ( Math.random() * myNames.length) + 1 );
        randomNumber-=1;
        if( namespace.clickCount ) {
            console.log(myNames[randomNumber] + " clicked the logo another time");
        }else {
            console.log(myNames[randomNumber] + " clicked the logo for the first time");
        }
        namespace.clickCount++;
    };

    //Add a click handler to the javascript logo. The first time it is clicked after the page loads, display to the console: "You have clicked this logo for the first time."
    document.querySelector("#logo").addEventListener("click", function() {
        greeting(myNames);
    });

    //The second and subsequent clicks, display "You have clicked the logo again."

    //Create this without using any global variables.
})(MYAPP);

