var MAINAPP = (function(u) {

    // submodule
    var sub = u.quiz = u.quiz || {};

    //Dependencies
    var stringU = u.string;
    var domU = u.dom;
    var $ = u.dom.$;

    /*
        Quiz Functionality
        */
    var checkAnswer = function(value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = stringU.breakOut(domU.data($('#q01'), 'answer'), ",");
                correct = ans.every(function(val) {
                    return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
                });
                result = (correct) ? 'correct' : 'incorrect';
                displayFeedback(result);
            } else {
                displayFeedback('no-answer');
            }
        },
        initialize = function() {
            domU.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
                hideFeedback();
                checkAnswer($('#q01_ans')[0].value);
            });
        },
        displayFeedback = function(result) {
            var feedback = $('.feedback.' + result);
            domU.addClass(feedback, 'visible');
        },
        hideFeedback = function() {
            var feedback = $('.feedback.visible');
            domU.removeClass(feedback, 'visible');
        };



        //make methods public
        sub.checkAnswer = checkAnswer;
        sub.initialize = initialize;

        return u;


})(MAINAPP || {});