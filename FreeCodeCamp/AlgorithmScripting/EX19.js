function addTogether(a, b = 0) {
    if(typeof(a) !== 'number' || typeof(b) !== 'number'){
        return undefined
    }
    if(!b){
        return function next(b){
            if(typeof(b) !== 'number'){
                return undefined
            }
            return a + b
        }
    }
    return a + b
}

addTogether(2,3);