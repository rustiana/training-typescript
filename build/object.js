var car = {
    type: "Toyota",
    model: "Corola",
    year: 2009
};
console.log(car);
//Type Inference
var car2 = {
    type: "Toyota",
    model: "Inova",
    year: 2010
};
console.log(car2.type);
console.log(car2.model);
console.log(car2.year);
//With optional
var car3 = {
    type: "Honda"
};
console.log(car3);
