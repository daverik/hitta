import { map } from './utils';
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
});