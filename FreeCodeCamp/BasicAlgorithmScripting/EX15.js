function mutation(arr) {
    let a = arr[1].toLowerCase()
    let str = arr[0].toLowerCase()
    for (let i = 0; i < a.length; i++){
        if(str.indexOf(a[i]) < 0) return false
    }
    return true;
}

mutation(["hello", "hey"]);