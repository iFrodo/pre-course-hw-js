let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: { country: 'USA', city: 'Bobryisk' }
};

let passportMarriedCopy = {  name: passportMarried.name, surname: passportMarried.surname,adress: { ...passportMarried.address }, married: true }
console.log(passportMarried)
console.log(passportMarriedCopy)
