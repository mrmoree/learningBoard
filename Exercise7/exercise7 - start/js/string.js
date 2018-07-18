var MAINAPP = (function(u) {

    //setup as submodule
    var sub = u.string = u.string || {};

    /*
    String Functionality
    */
    var numChar = function(str, char) {
            //return (str.match(new RegExp(char, 'g')) || []).length;
            return (str.split(char).length - 1);
        },

        breakOut = function(str, delim) {
            var arr = str.split(delim);
            return arr.map(function(val) {
                return val.trim();
            });
        };

    //make methods public
    sub.numChar = numChar;
    sub.breakOut = breakOut;

    return u;

})(MAINAPP || {});