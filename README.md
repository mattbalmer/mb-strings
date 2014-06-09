mb-strings
============

Provides helper functions on the String object

## Description

Adds helper functions to the String prototype. These functions are available to be called on any String instances.

## Usage

Simply load the script into your page (`<script src='/path/to/mb-strings.min.js></script>` or using Require or any other method), and all of the included functions will be available for use.

If any of the included functions replace existing ones, the previously existing functions will be saved on the prototype as `native`. eg `'hello {0}'.format.native('world')` will call the original function if `format` was detected.

## String.format

This method provides a way to easily format JavaScript Strings. Two different approaches may be taken.

### String.format - with indexes

Strings can be formatted by calling `format` on the String, and passing the arguments to use. The template String should include `{#}` where # is the argument index.

    var string = 'Hello {0}! Did you know that {1} + {1} = {2}?';
    var newString = string.format('World!', '2', '4');

    // 'Hello World! Did you know that 2 + 2 = 4?'
    console.log(newString);

### String.format - with key-value maps

Strings can be formatted by calling `format` on the String, and passing an object to use for matching. The template String should include `{key}` where `key` can be found on the given object, and replaced with its value.

    var string = 'Hello {subject}! Did you know that {a} + {a} = {b}?';
    var newString = string.format({
        subject: 'World',
        a: 2,
        b: 4
    });

    // 'Hello World! Did you know that 2 + 2 = 4?'
    console.log(newString);

## Compatibility

The plugin has not yet been rigorously tested, but should work in all modern browsers.

## Contact & License Info

Author: Matthew Balmer  
Twitter: [@mattbalmer](http://twitter.com/mattbalmer)  
Website: [http://mattbalmer.com](http://mattbalmer.com)  
License: MIT
