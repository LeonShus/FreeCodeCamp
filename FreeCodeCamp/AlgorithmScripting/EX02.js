
function diffArray(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        !arr2.includes(arr1[i]) && newArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        !arr1.includes(arr2[i]) && newArr.push(arr2[i])
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]))