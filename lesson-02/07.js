let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: 'USA', city: 'Bobryisk'
    }
};

let passportMarriedCopy = { adress: { ...passportMarried.address }, married: true, name: passportMarried.name, surname: passportMarried.surname }
console.log(passportMarried)
console.log(passportMarriedCopy)