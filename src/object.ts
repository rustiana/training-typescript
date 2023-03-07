const car: {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "Corola",
    year: 2009
}

console.log(car);

//Type Inference
const car2 = {
    type: "Toyota",
    model: "Inova",
    year: 2010,
};

console.log(car2.type);
console.log(car2.model);
console.log(car2.year);

//With optional
const car3: {type: string, model?: string, year?: number} = {
    type: "Honda"
};

console.log(car3);



