const sum = (a,b) => a+b;

const removeDuplicates = (array) => {
  return [...new Set(array)];
}

const asyncAdd = (a,b) => Promise.resolve(sum(a,b));

const sub = (a,b) => a-b;

module.exports = {sum, sub, removeDuplicates, asyncAdd};