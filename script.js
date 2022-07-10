// Variables - 1
let firstName = "Umair";
let lasttName = "Azmat";
let fullName = firstName + " " + lasttName;
console.log(fullName);

const pi = 7.14;
// pi=8;
// Value can' be changed with const
console.log(pi);

// strings -2
let paragraph =
  "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip";
let paragraph2 =
  "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip";
paragraph.startsWith("lorem");
console.log(paragraph.startsWith("lorem"));
console.log(paragraph.startsWith("hi")); //false
console.log(paragraph.endsWith("adip"));
console.log(paragraph.endsWith("hel")); //false

console.log(paragraph.indexOf("sit", 20));
console.log(paragraph.substring("sit", 50));

console.log(paragraph.toLowerCase());
console.log(paragraph2.toUpperCase());

console.log(paragraph.includes("sit"));
console.log(paragraph2.includes("hel")); //flase

console.log(paragraph[40]);

console.log(paragraph.slice(12, 26));

// Functions - 3

// sum
function sum(a, b) {
  console.log("a is ", a);
  console.log("b is ", b);
  let sum = a + b;
  return sum;
}

console.log("sum of a and b is :", sum(5, 10));

// Miles to  Km
function milesToKillometers(miles) {
  return (miles * 1.609).toFixed(1);
}
milesToKillometers(50);
console.log(milesToKillometers(50));

// Conditions -4

function compare(c, d) {
  console.log("Vlaue of C is " + c);
  console.log("Vlaue of D is " + d);
  if (isNaN(c)) {
    console.log("C is not a number");
  } else if (isNaN(d)) {
    console.log("D is not a number");
  } else if (c < d) {
    console.log("C is less then D");
  } else if (c == d) {
    console.log("C is equal to D");
  } else {
    console.log("D is less then C");
  }
}
console.log(compare(10, 20));
console.log(compare(40, 10));
console.log(compare(20, 20));
console.log(compare("ten", 20));
console.log(compare(10, "twenty"));

// Switch Case 

function today() {
  const day = new Date().getDay();

  switch (day) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("tuesday");
      break;
    case 3:
      console.log("wednesday");
      break;
    case 4:
      console.log("thursday");
      break;
    case 5:
      console.log("friday");
      break;
    case 6:
      console.log("saturday");
      break;
  }
}
console.log(today());

// conditional Operator // Weekend or not

function weekend() {
  const date = new Date().getDay();
  console.log("date is", date);
  return date == 0 || date == 6 ? "Weekend" : "not weekend";
}
console.log(weekend());


// Arrays -5

function month() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "july","Aug", "Sep", "Oct", "Nov", "Dec"]
    const current = new Date().getMonth();
    return months[current]
    // console.log(current);
}
console.log(month());

const months = ["January", "February", "March", "April", "May"]
console.log(months);

console.log(months.push("December"));
console.log(months);

console.log(months.pop("December"));
console.log(months);

// Objects - 6

const npcs = [];
npcs.push(createWaponsList());

function createWaponsList(){
    const powers = (Math.random() * 0.5 + 0.5).toFixed(3);
    const weapons = ["soware","Pistol","Machine gun","gernade"]
    const damage = 0;
    const strength = Math.random() * 2 + 1.0;

    return { powers, weapons, damage, strength}
}

console.log(createWaponsList().powers);
console.log(createWaponsList().weapons);
console.log(createWaponsList().damage);
console.log(createWaponsList().strength);
console.log(npcs)

// Loops