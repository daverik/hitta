import { query } from './query';

export const filter = query;

export const any = (data: Array<any>) => (_query: any) => {
    let queried = query(data)(_query);

    return queried && queried.length !== 0;
}

export const find = (data: Array<any>) => (_query: any) => {
    let queried = query(data)(_query);

    if (queried && queried.length !== 0) {
        return queried[0];
    } else {
        return null;
    }
}