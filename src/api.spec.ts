import { expect } from 'chai';
import { any, find, filter } from './api';

let users = [{
    name: 'David',
    age: 27,
    contact: {
        address: 'Some way 8'
    },
    phoneNumber: 1234124
}, {
    name: 'Hannah',
    age: 32,
    contact: {
        address: 'Some way 14'
    },
    phoneNumber: '070946124'
}, {
    name: 'Bruce',
    age: 35,
    contact: {
        address: 'The way 2'
    }
},  {
    name: 'Bruce',
    age: 68,
    contact: {
        address: 'The way 2'
    }
},{
    name: 'Clark',
    age: 22,
    contact: {
        address: 'The way 19'
    }
}, {
    name: 'Daniel',
    age: 39,
    contact: {
        address: 'The way 19'
    },
    phoneNumber: '070946124',
    competencies: ['c#', 'perl', 'haskell']
}];

describe('api', () => {
    it('any (1)', () => {
        let anyUser = any(users)({
            name: 'Bruce'
        });

        expect(anyUser).to.be.equal(true);
    });

    it('any (2)', () => {
        let anyUser = any(users)({
            name: 'Brucius'
        });

        expect(anyUser).to.be.equal(false);
    });

    it('find (1)', () => {
        let user: any = find(users)({
            name: 'Bruce'
        });

        expect(user.name).to.be.equal('Bruce');
    });

    it('find (2)', () => {
        let user: any = find(users)({
            name: 'Brucius'
        });

        expect(user).to.be.equal(null);
    });

    it('filter (1)', () => {
        let filtered = filter(users)({
            name: 'Bruce'
        });

        expect(filtered.length).to.be.equal(2);
    });

    it('filter (2)', () => {
        let filtered = filter(users)({
            name: /D.*/
        });

        expect(filtered.length).to.be.equal(2);
    });
});