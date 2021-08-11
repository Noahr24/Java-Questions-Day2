//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish", "South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



for (let i=0;i<Object.keys(person3).length;i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(`Person's favorite ${Object.keys(person3)[i]}: ${Object.values(person3)[i]}`)
    }else{
        console.log(`Person's favorite ${Object.keys(person3)[i]}: ${Object.values(person3)[i]}`)
    }
}

//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class
function Person(name, age){
    this.name = name,
    this.age = age

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return console.log(`This is a ${this.name}, and he is ${this.age} years old.`)
    }

    // This method adds 1 to the age
    this.addAge = (() => {
        let counter = this.age
        return () => {return counter ++} 
    })()
    // This method adds 1 to the age
    this.addAge3 = (() => {
        let counter = this.age
        return () => {return counter += 3} 
    })()

}


let noah = new Person('Noah', 25)
let nate = new Person('Nate', 10)

console.log(noah.printInfo())
console.log(noah.addAge())
console.log(noah.addAge())
console.log(noah.addAge())
console.log(nate.printInfo())
console.log(nate.addAge3())
console.log(nate.addAge3())
console.log(nate.addAge3())







// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let p = new Promise((resolve, reject) => {
    let givenString = 'more than 10'
    if (givenString.length > 10){
        resolve('Big Word')
    }else{
        reject('Small Number')
    }

})

p.then((message) => {
    console.log('This is a ' + message)
}).catch((message) => {
    console.log('This is a ' + message)
})

