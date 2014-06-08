(function(mb, String) {

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

}(mb, String));