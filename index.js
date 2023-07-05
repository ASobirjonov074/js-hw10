// let a = []
// let b = []
// let aWithb =  Object.assign(a, b)

// console.log(
//     a
// );

// let i = 0
// i++

// console.log(i);

// let arr = [89,123,32,68]
// let total = arr.reduce((sum, current) => sum + current )


// let max = name.reduce((a,b) => {
//     if(a.length > b.length) {
//         return a
//     } else {
//         return b
//     }
// })
// console.log(max);

// let names = ['amir', 'zarshed', 'maqsud', 'jaxongir']

// let arr = names.reduce((names, current) => {
//     if(names.length > current.length) {
//         return names
//     } else {
//         return current
//     }
// })
// console.log(arr);

let car_one = {
    name: "Mercedes",
    produced: "In 1901",
    Country: "Made in Germany",
    Model: "Mercedes 35 PS",
    colors: "White, Black, Blue,",
    used: "By rich people",
    document: {
        serries: "AC",
        number: 7077007,
        date: "1902-01-01",
        varanty: "1 year",
        city: "Berlin",
        full_name: function() {
            return this.name + ' ' + this.surname
        }
    }
}


let car_two = {
    name: "bmv",
    produced: "In 1947",
    Country: "Made in Germany",
    Model: "Mercedes 35 PS",
    colors: "White, Black, Blue,",
    used: "By rich people",
    document: {
        serries: "AC",
        number: 7077007,
        date: "1902-01-01",
        varanty: "1 year",
        city: "Berlin",
        full_name: function() {
            return this.name + ' ' + this.surname
        }
    }
}

let Garage = Object.assign({},car_one, { car_two })


let key = Object.keys(Garage)
let values = Object.values(Garage)

let arr = key.concat(values)
let sorted = {
    number: [],
    string: [],
    object: [],
}


arr.filter((info) => {
    if (typeof info === 'number') {
        sorted.number.push(info)
    } else if (typeof info === 'object') {
        sorted.object.push(info)
    } else if (typeof info === 'string') {
        sorted.string.push(info)
    } else {
        console.log('error');
    }
})

console.log(types);