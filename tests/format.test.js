describe('String.format', function () {
    var string;

    describe('with multiple arguments (index style)', function () {

        it('should replace templated indexes with corresponding argument.', function () {
            string = 'Hello {0}!';

            string = string.format('World');

            expect(string).toBe('Hello World!');
        });

        it('should replace templated indexes with corresponding arguments in multiple uses', function () {
            string = 'Hello {0}! Did you know that {1} + {1} = {2}?';

            string = string.format('World', 2, 4);

            expect(string).toBe('Hello World! Did you know that 2 + 2 = 4?');
        });
    });

    describe('with an object argument (key-value style)', function () {

        it('should replace templated keys with given value.', function () {
            string = 'Hello {subject}!';

            string = string.format({
                subject: 'World'
            });

            expect(string).toBe('Hello World!');
        });

        it('should replace templated keys with given values, in multiple uses', function () {
            string = 'Hello {subject}! Did you know that {a} + {a} = {b}?';

            string = string.format({
                subject: 'World',
                a: 2,
                b: 4
            });

            expect(string).toBe('Hello World! Did you know that 2 + 2 = 4?');
        });
    });

});