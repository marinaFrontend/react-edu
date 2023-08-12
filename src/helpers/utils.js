"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cropString = exports.range = void 0;
exports.range = (start, end) => {
    return [...Array(end).keys()].map((el) => el + start);
};
exports.cropString = (str, maxLength) => {
    return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};
//# sourceMappingURL=utils.js.map