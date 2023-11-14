let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedCopy = { adress: { ...passportMarried.address }, name: passportMarried.name, surname: passportMarried.surname, married: true }
console.log(passportMarried)
console.log(passportMarriedCopy)
