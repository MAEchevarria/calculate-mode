const calculateMode = (arr) => {
    // established object to store count of value in list.
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    // started by finding if count was same number, return all keys of obj but ran into issues with numbers being strings
    // added for loop to convert strings to numbers and pushing to new arr;
    let count = Object.values(obj);
    let numArr = Object.entries(obj);
    let entryArr = numArr.sort((a, b) => b[1] - a[1]);
    let numbers = [];

    for (let key of Object.keys(obj)) {
        if (key == Number(key)) {
            numbers.push(Number(key));
        } else {
            numbers.push(key);
        }
    }
    // needed to convert strings to numbers for single highest count and output to array
    if (count.every(x => x === count[0])) {
        return numbers;
    } else if (entryArr[0][0] == Number(entryArr[0][0])) {
        return [Number(entryArr[0][0])]
    } else {
        return [entryArr[0][0]];

    }
}
// console.log(calculateMode([1, 2, 3, 3]));
// console.log(calculateMode([4.5, 0, 0]));
// console.log(calculateMode([1.5, -1, 1, 1.5]));
// console.log(calculateMode([1, 1, 2, 2]));
// console.log(calculateMode([1, 2, 3]));
// console.log(calculateMode(["who", "what", "where", "who"]));