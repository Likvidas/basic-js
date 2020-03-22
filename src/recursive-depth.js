module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let currentDepth = 1;

        for (let i = 0; i < arr.length; i++) {
            let additionalDepth = 1;
            if (Array.isArray(arr[i])) {
                additionalDepth += this.calculateDepth(arr[i]);
                if (additionalDepth > currentDepth) {
                    currentDepth = additionalDepth;
                };
            };
        };

        return currentDepth;

    };
};