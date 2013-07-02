module.exports = {
    'onFulfilled callback should be called when argument fulfilled' : function(test) {
        var resolver,
            promise = Vow.promise(function(_resolver) {
                resolver = _resolver;
            });

        Vow.when(promise, function(val) {
            test.strictEqual(val, 'val');
            test.done();
        });

        resolver.fulfill('val');
    },

    'onRejected callback should be called when argument rejected' : function(test) {
        var resolver,
            promise = Vow.promise(function(_resolver) {
                resolver = _resolver;
            });

        Vow.when(promise, null, function(error) {
            test.strictEqual(error, 'err');
            test.done();
        });

        resolver.reject('err');
    },

    'onFulfilled callback should be called if argument is non-promise' : function(test) {
        Vow.when('val', function(val) {
            test.strictEqual(val, 'val');
            test.done();
        });
    },

    'onProgress callback should be called when argument notified' : function(test) {
        var resolver,
            promise = Vow.promise(function(_resolver) {
                resolver = _resolver;
            });

        Vow.when(promise, null, null, function(val) {
            test.strictEqual(val, 'val');
            test.done();
        });

        resolver.notify('val');
    }
};
