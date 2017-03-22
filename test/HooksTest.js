const expect = require('chai').expect;

describe('Hooks', function () {
    let number;

    before('should set the state of this test suite', function () {
        number = 0;
    });

    beforeEach('should set the state before every single test', function () {
        number = 0;
    });

    describe('#beforeEach()', function () {
        it('should reset the state before every test', function () {
            expect(number).to.equal(0);

            number = 10;

            expect(number).to.equal(10);
        });

        it('should reset the state for this test as well and make it pass', function () {
            expect(number).to.equal(0);
        });
    });

    afterEach('should do a cleanup of the state after every test', function () {
        number = null;
    });

    after('should finish anything left over in this test suite, close resources, etc.', function () {
        number = null;
    });
});
