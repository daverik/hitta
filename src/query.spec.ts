import { expect } from 'chai';
import { query } from './query';

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

describe('something', () => {
    it('string selctor (1)', () => {
        let queried = query(users)({
            name: 'Bruce'
        });

        expect(queried.length).to.be.equal(2);
    });

    it('string selector (2)', () => {
        let queried: any = query(users)({
            contact: {
                address: 'Some way 14'
            }
        });

        expect(queried[0].name).to.be.equal('Hannah');
    });

    it('$in selector', () => {
        let queried: any = query(users)({
            name: {
                $in: ['David', 'Daniel', 'Clark']
            }
        });

        expect(queried.length).to.be.equal(3);
    });

    it('$nin selector', () => {
        let queried: any = query(users)({
            name: {
                $nin: ['Daniel']
            }
        });

        expect(queried.length).to.be.equal(5);
    });
    
    it('$gt selector', () => {
        let queried: any = query(users)({
            age: {
                $gt: 30
            }
        });

        expect(queried.length).to.be.equal(4);
    });

    it('$gte selector', () => {
        let queried: any = query(users)({
            age: {
                $gte: 68
            }
        });

        expect(queried.length).to.be.equal(1);

        queried = query(users)({
            age: {
                $gte: 69
            }
        });

        expect(queried.length).to.be.equal(0);
    });

    it('$lt selector', () => {
        let queried: any = query(users)({
            age: {
                $lt: 30
            }
        });

        expect(queried.length).to.be.equal(2);
    });

    it('$regex selector', () => {
        let queried: any = query(users)({
            name: /D.*/
        });

        expect(queried.length).to.be.equal(2);
    });
});