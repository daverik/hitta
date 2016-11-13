import { map, flatten, get } from './utils';
import { expect } from 'chai';

describe('something', () => {
    it('map', () => {
        let obj = {
            a: '123',
            b: '123'
        };

        let mapped = map(obj, (val, key) => {
            return val;
        });

        expect(mapped.length).to.be.equal(2);
        expect(mapped[0]).to.be.equal('123');

        mapped = map(obj, (val, key) => {
            return key;
        });

        expect(mapped.length).to.be.equal(2);
        expect(mapped[0]).to.be.equal('a');
    });

    it('flatten', () => {
        let arr = [[1, 2, 3], 4];

        arr = flatten(arr);

        expect(arr.length).to.be.equal(4);
    });

    it('get', () => {

        let obj = {
            a: {
                b: {
                    c: 123
                }
            }
        };

        let val = get(obj, 'a.b.c');

        expect(val).to.be.equal(123);
    });
});