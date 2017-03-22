const assert = require('assert');
const should = require('chai').should();

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
            [1, 2, 3].indexOf(0).should.equal(-1);
        });

        // Pending test should be written eventually
        // it('should return the index of an element in an array');
    });
});


describe('Async code', function () {
    describe('callbacks', function () {
        it('should call the done function to declare the test as finished', function (done) {
            setTimeout(function () {
                done();
            }, 25);
        })
    });

    describe('promises', function () {
        it('should return a promise to declare the test as finished', function () {
            return new Promise(function (resolve) {
                assert.ok(true);
                resolve();
            });
        });
    });
});
