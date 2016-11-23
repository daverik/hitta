import { any, filter, find } from './api';
import { query } from './query';

exports.query = function(...rest) {
    console.warn('Deprecated. Please use filter instead.');
    return query.apply(this, rest);
};

exports.filter  = filter;
exports.any     = any;
exports.find    = find;