function orbitalPeriod(arr) {
    const GM = 398600.4418
    const earthRadius = 6367.4447
    const newArr = arr.map(el => ({
        name: el.name,
        orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM))
    }))

    return newArr
}

console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]))