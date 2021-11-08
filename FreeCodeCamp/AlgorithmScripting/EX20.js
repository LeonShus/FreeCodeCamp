const Person = function(firstAndLast) {
    let name = firstAndLast

    this.getFirstName = () => {
        return name.split(' ')[0]
    }

    this.getLastName = () => {
        return name.split(' ')[1]
    }

    this.getFullName = () => {
        return name
    }

    this.setFirstName = (newFirstName) => {
        name = newFirstName + ' ' + name.split(' ')[1]
    }

    this.setLastName = (newLastName) => {
        name = name.split(' ')[0] + ' ' + newLastName
    }

    this.setFullName = (newName) => {
        name = newName
    }
}

const bob = new Person('Bob Ross')
console.log(bob.getFullName())
console.log(bob.getLastName())
console.log(bob.getFirstName())
console.log(bob.setFirstName('Haskell'))
console.log(bob.getFullName())
console.log(bob.setLastName('Shu'))
console.log(bob.getFullName())


console.log(Object.keys(bob).length)