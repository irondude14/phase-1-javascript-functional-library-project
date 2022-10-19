function myEach(collection, cb) {
    if (Array.isArray(collection)) {
        for (const element of collection) {
           cb(element);
        };
    } else if (typeof collection === "object") {
        for (const key in collection) {
            cb(collection[key]);
        };
    };
    return collection;
};


function myMap(collection, cb) {
    let newCollection = [];
    if (Array.isArray(collection)) {
        for (const element of collection) {
            newCollection.push(cb(element));
        }
    } else if (typeof collection === "object") {
        for (const key in collection) {
            newCollection.push(cb(collection[key]));
        };
    };
    return newCollection;
};

function myReduce(collection, cb, acc = -2) {
    let value = acc;
    if (Array.isArray(collection)) {
        for (const i in collection) {
            value = cb(value, collection[i]);
        };
    } else if (typeof collection === "object") {
        for (const key in collection) {
            value = cb(value, collection[key]);
        };
    };
    return value;
};

// How do I compare value to a callback function that returns true or false

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (const element of collection) {
            if (predicate(element) === true) {
                return element
            }
        };
    } else if (typeof collection === "object") {
        for (const key in collection) {
            if (predicate(collection[key]) === true) {
                return collection[key]
            }
        };
    };
};


function myFilter(collection, predicate) {
    let newCollection = [];
    if (Array.isArray(collection)) {
        for (const element of collection) {
            if(predicate(element) === true) {
                newCollection.push(element);
            };
        };
    } else if (typeof collection === "object") {
        for (const key in collection) {
            if(predicate(collection[key]) === true) {
                newCollection.push(collection[key]);
            };
        };
    };
    return newCollection;
};

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === "object") {
        return Object.keys(collection).length;
    };
};

function myFirst(array, n) {
    if (typeof n === "number") {
        let newArray = array.slice(0, n)
        return newArray
    } else {
        let newArray = array[0];
        return newArray;
    };
};

function myLast(array, n) {
    if (typeof n === "number") {
        let newArray = array.slice(-n)
        return newArray
    } else {
        let newArray = array[array.length-1];
        return newArray;
    }
};

function myKeys(object) {
    return Object.keys(object);
};

function myValues(object) {
    return Object.values(object);
}