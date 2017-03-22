const Add = {
    run: function (n1, n2) {
        const a = Number(n1);
        const b = Number(n2);

        if (isNaN(a) || isNaN(b)) {
            throw new TypeError('Invalid argument types, numbers were expected');
        }

        return a + b;
    }
};

module.exports = Add;
