function convertObjecttoArray() {
  if (typeof this === "object") {
    const collectionCopy = Object.values(this);
    return collectionCopy;
  }
  return this;
}

function myEach(collection, callback) {
  const collectionCopy = convertObjecttoArray.call(collection);

  for (let i = 0; i < collectionCopy.length; i++) {
    callback(collectionCopy[i]);
  }

  return collection;
}

function myMap(collection, callback) {
  const collectionCopy = convertObjecttoArray.call(collection);
  const result = [];

  for (let i = 0; i < collectionCopy.length; i++) {
    result.push(callback(collectionCopy[i]));
  }
  return result;
}

function myReduce(collection, callback, startingVal = 0) {
  const collectionCopy = convertObjecttoArray.call(collection);
  let acc = startingVal ? startingVal : collectionCopy[0];
  let index = startingVal ? 0 : 1;

  for (let i = index; i < collectionCopy.length; i++) {
    acc = callback(acc, collectionCopy[i]);
  }
  return acc;
}

function myFind(collection, predicate) {
  let match;
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      match = collection[i];
      break;
    }
  }
  return match;
}

function myFilter(collection, predicate) {
  let matches = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) matches.push(collection[i]);
  }
  return matches;
}

function mySize(collection) {
  const collectionCopy = convertObjecttoArray.call(collection);
  return collectionCopy.length;
}

function myFirst(array, n) {
  let elements = [];
  if (n) {
    for (let i = 0; i < n; i++) {
      elements.push(array[i]);
    }
  } else {
    elements = array[0];
  }
  return elements;
}

function myLast(array, n) {
  let elements = [];
  if (n) {
    for (let i = array.length - n; i < array.length; i++) {
      elements.push(array[i]);
    }
  } else {
    elements = array[array.length - 1];
  }
  return elements;
}

function myKeys(object) {
  let keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  let values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
