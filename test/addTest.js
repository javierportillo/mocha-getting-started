const expect = require('chai').expect;
const Add = require('../src/add');

describe('Add operator', function () {
    it('should have a run method', function () {
        expect(Add).to.respondsTo('run');
    });

    describe('#run()', function () {
        it('should Add two numbers', function () {
            const tests = [
                [1, 1, 2],
                [10, 10, 20],
                [5, 3, 8],
                [0, -3, -3],
                [-6, -1, -7],
            ];

            for (let i of tests) {
                const result = Add.run(i[0], i[1]);
                expect(result).to.be.equal(i[2]);
            }
        });

        it('should throw error when input is not numeric', function () {
            expect(() => Add.run('hello', null)).to.throw(TypeError);
        });

        it('should throw error when input in NaN', function () {
            expect(() => Add.run(NaN, NaN)).to.throw(TypeError);
            expect(() => Add.run()).to.throw(TypeError);
            expect(() => Add.run(1, 1)).to.not.throw(TypeError);
        });
    });
});
