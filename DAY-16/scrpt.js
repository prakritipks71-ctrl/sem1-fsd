const data = {
    products : [
        {
            id : 20,
            title : "cookie",
            price : 12
        },
        {
            id : 21,
            title : "sandwich",
            price : 15
        },
        {
            id : 22,
            title : "pizza",
            price : 100
        },
        {
            id : 23,
            title : "ice-cream",
            price : 50
        }
    ],
    total : 194,
    skip : 25,
    limit : 10
};

//destructuring 
const { products, total, skip} = data;
console.log(products);

//destructuring in array
const [p0, p1, p2] = products;
console.log(p0);
console.log(p1);
//we can use anything instead of p0, p1, p2.........we can also use a, b, c....these all work as indexes

//equality...(only used in primitives)
let i = [10,20,30];
let j = [10,20,30];
console.log(i == j);
console.log(i === j);
//hence the output is false
console.log(i[0] == j[0]); //checks only values
console.log(i[1] === j[1]); //checks both values and data-type

let k = i;
console.log(k == i);
console.log(k === i);
//here we are working on non-primitive data-type but here the location of k and i are same



