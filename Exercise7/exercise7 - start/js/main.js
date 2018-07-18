

var MAINAPP = (function(nsp) {

    var myQuiz = MAINAPP.quiz;
    var myDom = MAINAPP.dom;
    var myString = MAINAPP.string;
    var $ = MAINAPP.dom.$;

    /*
    Setup
    */
    var initQuiz = function() {
        myQuiz.initialize();
    };

    myDom.domReady(function() {
        initQuiz();
    });


    return nsp;

})(MAINAPP || {});