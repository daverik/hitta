export const every = (arr: Array<any>, cb: any) => {
    return arr.every(cb);
};

export const filter = (arr: Array<any>, cb: any) => {
    return arr.filter(cb);
}

export const isArray = (obj: any) => {
    return Array.isArray(obj);
}

export const keys = (obj: any) => {
    return Object.keys(obj);
}

export const some = (arr: Array<any>, cb) => {
    return arr.some(cb);
};

export const map = (obj: any, cb): Array<any> => {
    if (isArray(obj)) {
        return obj.map(cb);
    } else {
        let arr = []

        for(let k in obj) {
            arr.push(cb(obj[k], k));
        }

        return arr;
    }
};

export const flatten = (arr: Array<any>) => {
    let newArr = [];

    arr.forEach((val) => {
        if (isArray(val)) {
            val.forEach((_val) => {
                newArr.push(_val);
            });
        } else {
            newArr.push(val);
        }
    });

    return newArr;
};

export const get = (obj: any, path: string) => {
    let pathArr = path.split('.');

    if (pathArr.length === 1) {
        return obj[pathArr[0]];
    } else {
        return get(obj[pathArr[0]], pathArr.slice(1, pathArr.length).join('.'));
    }
};

export const isUndefined = (obj: any) => {
    return typeof obj === 'undefined';
}