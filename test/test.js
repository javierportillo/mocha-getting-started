const assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});


describe('Async code', function () {
    it('should call the callback function to declare the test as finished', function (done) {
        setTimeout(function () {
            done();
        }, 100);
    });
});
