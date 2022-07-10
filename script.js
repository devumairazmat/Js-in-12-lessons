// Variables
let firstName = "Umair";
let lasttName = "Azmat";
let fullName = firstName + " " + lasttName;
console.log(fullName);

const pi = 7.14;
// pi=8;
// Value can' be changed with const
console.log(pi);

// strings
let paragraph = "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip";
let paragraph2 = "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip";
paragraph.startsWith("lorem");
console.log(paragraph.startsWith("lorem"));
console.log(paragraph.startsWith("hi")); //false
console.log(paragraph.endsWith("adip"));
console.log(paragraph.endsWith("hel")); //false

console.log(paragraph.indexOf("sit",20));
console.log(paragraph.substring("sit",50));


console.log(paragraph.toLowerCase());
console.log(paragraph2.toUpperCase());

console.log(paragraph.includes("sit"));
console.log(paragraph2.includes("hel")); //flase

console.log(paragraph[40]);

console.log(paragraph.slice(12,26));

// Functions

// sum
function sum (a,b) {
    console.log("a is ",a);
    console.log("b is ",b);
    let sum=a+b;
    return sum;
}

console.log("sum of a and b is :", sum(5,10));

// Miles to  Km
function milesToKillometers(miles){
    return (miles*1.609).toFixed(1);
}
milesToKillometers(50);
console.log(milesToKillometers(50))
