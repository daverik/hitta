import { keys, some,isArray, map, flatten, filter, every, get } from 'lodash';
import { queryTypes } from './types';

export const query = (data) => {
    if (!isArray(data)) {
        throw new Error('Not an array');
    }

    return (query) => {
        let qa = flatten(extract(query, ''));

        return filter(data, (obj) => {
            return every(qa, (q: any) => {
                return queryTypes[q.type](get(obj, q.path), q.value);
            })
        }); 
    };
};

function extract(obj, path) {
    if (isArray(query) || !keys(obj).length) {
        return [];
    } else {
        return map(obj, (value, key: string) => {
            if (value instanceof RegExp) {
                return {
                    path: path === '' ? key : `${path}.${key}`,
                    type: '$regex',
                    value: value
                };
            } else if (typeof value === 'string') {
                return {
                    path: path === '' ? key : `${path}.${key}`,
                    type: '$exact',
                    value: value
                };
            }else if (/\$.*/.test(key)) {
                if (queryTypes[key]) {
                    return {
                        path: path,
                        type: key,
                        value: value
                    };
                } else {
                    return [];
                }
            } else {
                return flatten(extract(value, path === '' ? key : `${path}.${key}`));
            }
        });
    }
}