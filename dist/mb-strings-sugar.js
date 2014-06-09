/*
 * mb-strings v0.2.1 (sugar syntax)
 * Provides helper functions related to the String object. 
 * (c) 2014 Matt Balmer <matt@mattbalmer.com> http://mattbalmer.com
 * License: MIT
 */
;(function(mb) {
    if(!mb) return;

    /**
     * Formats a string by replacing {#} with it's numerically corresponding argument.
     * eg: <i>"Hello {0}! Good to see {1}".format('World', 'you!')</i> returns <i>"Hello World! Good to see you!"</i>
     * @returns {string} the formatted string
     */
    String.prototype.format = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift(this);
        return mb.formatString.apply(this, args);
    };

}( (typeof mb !== 'undefined' ? mb : undefined) ));