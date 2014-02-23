/*
 * mb-strings v0.1.0
 * Provides helper functions on the String object
 * (c) 2014 Matthew Balmer http://mattbalmer.com
 * License: MIT
 */
(function(String) {
    function override(target, source) {
        if( target == undefined ) {
            source.native = target;
            return source;
        }
        return target;
    }

    /**
     * Formats a string by replacing {#} with it's numerically corresponding argument.
     * eg: <i>"Hello {0}! Good to see {1}".format('World', 'you!')</i> returns <i>"Hello World! Good to see you!"</i>
     * @returns {string} the formatted string
     */
    var formatString = function() {
        var args = arguments;

        // If first and only arg is an object, assume this object is to be used to format the string, using a key-value relationship
        if(typeof args[0] === 'object') {
            var map = args[0];
            return this.replace(/{(.+?)}/g, function(match, key) {
                if( typeof map[key] == 'undefined' ) return match;
                var result = map[key];
                return result;
            });
        }

        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };

    String.prototype.format = override(String.prototype.format, formatString);
}(String));