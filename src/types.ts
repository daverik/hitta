import { isUndefined, some } from 'lodash';

export const queryTypes = {
    $exists: (srcValue, queryValue) => {
        return isUndefined(srcValue) !== queryValue; 
    },
    $gt: (srcValue, queryValue) => {
        return srcValue > queryValue 
    },
    $gte: (srcValue, queryValue) => {
        return srcValue >= queryValue 
    },
    $lt: (srcValue, queryValue) => {
        return srcValue < queryValue 
    },
    $lte: (srcValue, queryValue) => {
        return srcValue <= queryValue 
    },
    $in: (srcValue, queryValue) => {
        return some(queryValue, (val) => {
            return val === srcValue;
        });
    },
    $nin: (srcValue, queryValue) => {
        return !some(queryValue, (val) => {
            return val === srcValue;
        });
    },
    $regex: (srcValue, queryValue) => {
        return queryValue.test(srcValue);
    },
    $exact: (srcValue, queryValue) => {
        return srcValue === queryValue;
    }
};