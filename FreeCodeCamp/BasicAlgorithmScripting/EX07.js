function repeatStringNumTimes(str, num) {
    let a = []
    for(let i = 0; i < num; i++){
        a.push(str)
    }
    return a.join('');
}

repeatStringNumTimes("abc", 3);