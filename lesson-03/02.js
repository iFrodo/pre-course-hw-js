const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
let index = words.indexOf("апельсин");

if (index !== -1) {
    console.log("Ура! нашел");
} else {
    console.log("Придется поискать в другом магазине…");
}