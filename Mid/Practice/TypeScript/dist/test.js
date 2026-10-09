"use strict";
let studentName = "Hamim";
let studentAge = 26;
let studentGrade = 3.90;
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Grade:", studentGrade);
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Sum:", sum);
let a = 10;
let b = 20;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
function getStudentName() {
    return "Hamim";
}
function getStudentAge() {
    return 26;
}
function getStudentGrade() {
    return 3.90;
}
function getStudentInfo() {
    const student = {
        name: getStudentName(),
        age: getStudentAge(),
        grade: getStudentGrade()
    };
    console.log("Student Name:", student.name);
    console.log("Student Age:", student.age);
    console.log("Student Grade:", student.grade);
    console.log("Normal Function");
    return student;
}
async function getStudentInfoAsync() {
    const student = {
        name: getStudentName(),
        age: getStudentAge(),
        grade: getStudentGrade()
    };
    console.log("Student Name:", student.name);
    console.log("Student Age:", student.age);
    console.log("Student Grade:", student.grade);
    console.log("Async Function");
    return student;
}
function fetchStudentInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Hamim",
                age: 26,
                grade: 3.90
            });
        }, 2000);
    });
}
function getStudentInfoWithInterface() {
    const student = {
        name: getStudentName(),
        age: getStudentAge(),
        grade: getStudentGrade()
    };
    console.log("Student Name:", student.name);
    console.log("Student Age:", student.age);
    console.log("Interface Function");
    return student;
}
async function main() {
    getStudentInfo();
    await getStudentInfoAsync();
    getStudentInfoWithInterface();
    console.log("Fetching student information...");
    const student = await fetchStudentInfo();
    console.log("Student information received:");
    console.log(student);
}
main();
// Then and catch 
// async function main(): Promise<void> {
//     getStudentInfo();
//     await getStudentInfoAsync();
//     getStudentInfoWithInterface();
//     console.log("Fetching student information...");
//     fetchStudentInfo()
//         .then((student) => {
//             console.log("Student information received:");
//             console.log(student);
//         })
//         .catch((error: Error) => {
//             console.log("Error:", error.message);
//         })
//         .finally(() => {
//             console.log("Student information request completed.");
//         });
// }
