describe('mb.formatString', function () {
    var string, formatString = mb.formatString;

    describe('with multiple arguments (index style)', function () {

        it('should replace templated indexes with corresponding argument.', function () {
            string = 'Hello {0}!';

            string = formatString(string,'World');

            expect(string).toBe('Hello World!');
        });

        it('should replace templated indexes with corresponding arguments in multiple uses', function () {
            string = 'Hello {0}! Did you know that {1} + {1} = {2}?';

            string = formatString(string, 'World', 2, 4);

            expect(string).toBe('Hello World! Did you know that 2 + 2 = 4?');
        });
    });

    describe('with an object argument (key-value style)', function () {

        it('should replace templated keys with given value.', function () {
            string = 'Hello {subject}!';

            string = formatString(string, {
                subject: 'World'
            });

            expect(string).toBe('Hello World!');
        });

        it('should replace templated keys with given values, in multiple uses', function () {
            string = 'Hello {subject}! Did you know that {a} + {a} = {b}?';

            string = formatString(string, {
                subject: 'World',
                a: 2,
                b: 4
            });

            expect(string).toBe('Hello World! Did you know that 2 + 2 = 4?');
        });
    });

});