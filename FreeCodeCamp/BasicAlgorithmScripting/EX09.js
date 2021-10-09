function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            num = arr[i]
            return num
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);