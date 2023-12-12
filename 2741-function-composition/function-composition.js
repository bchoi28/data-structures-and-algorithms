/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        let val = x;
        if (functions.length === 0) return x;
        while (functions.length) {
            let fn = functions.pop();
            val = fn(val);
        };
        return val;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */