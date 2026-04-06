  console.log("krishna");
let fullname="krishna gupta";
 console.log(fullname);
 let age=24;
console.log(age);
x=null;          // pata toh hai kya hai per khali value hai hai
y=undefined;    // pata hi nahi kya hai isme
console.log(x);
console.log(y);
let isfollow=true;  // boolean type value
console.log(isfollow);
const pie=3.14;
console.log(pie);

{                      //block scope 
    let a=10;
    console.log(a);
}
{
    let a=10;
    console.log(a);
}

const student = {     // object
    fullname : "krishna gupta",      
    age: 20,
    cgpa: 8.2,
    ispass: true,

};

console.log(student.age);  //two ways
console.log(student["age"]);
student["age"]=student["age"] + 1;
console.log(student["age"]);
student["name"]="kanisk bansal";
