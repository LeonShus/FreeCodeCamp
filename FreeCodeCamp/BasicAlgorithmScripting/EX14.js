function getIndexToIns(arr, num) {
    arr.sort((a,b) => a-b)

    if(arr.length === 0) return 0
    if(arr[arr.length - 1] < num) return arr.length

    for(let i = 0; i < arr.length + 1;i++){
        if(arr[i] >= num){
            return i
        }
    }
}

getIndexToIns([40, 60], 50);