// function cubeNumber(n) {
//     const cube = n**3;
//     return cube;
// }
// let n = Number(prompt("enter a number"));
// console.log(cubeNumber(n));



// function isAdult(age) {
//     if (age >= 18) {
//         console.log("Ture");
//     }
//     else {
//         console.log("False")
//     }
// }
// let age = Number(prompt("Enter your age"));
// isAdult(age);


// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);
//     return bmi;
// }
// let weight = prompt("Enter your weight in kg");
// let height = prompt("Enter your height in meter");
// console.log(calculateBMI(weight, height));



//----------Grade From Marks---------

// function gradeFromMarks(marks) {
//     if (marks >= 90) {
//         return "A";
//     } else if (marks >= 75) {
//         return "B";
//     } else if (marks >= 50) {
//         return "C";
//     } else {
//         return "F";
//     }
// }
// let marks = Number(prompt("Enter Your Marks"));
// let grade = gradeFromMarks(marks);
// alert(`You Grade is ${grade}`);
// console.log(grade);






//--------Discount Calculation---------

function applyDiscount(price, isMember = false) {
    if (isMember == true) {
        let discount = price * 0.1;
        let discountedPrice = price - discount;
        return discountedPrice
    }
}
let price = Number(prompt("Enter your Price"));
let isMember = confirm("Are you a Member?")
let dis = applyDiscount(price, isMember)

