// Primitive datatypes
let num = 45;
console.log(typeof num);
let firstName = "Chandrakant";
console.log(typeof firstName);
let boolean = false;
console.log(typeof num);
let undefinedtype;
console.log(typeof undefinedtype);
console.log(typeof null);
console.log(typeof NaN);
console.log(null == undefined);
console.log(null === undefined);
console.log(typeof Symbol);
console.log(typeof BigInt);

// L-1/L-2/L-3
const country = "India";
const continent = "Asia";
let population = 1310;
const isIsland = false;
const language = "Hindi";
console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language
);

// L-4/L-5
let halfPop = population / 2;
console.log(`Half of ${country}'s population is: ${halfPop} million.`);
let popIncr = population + 1;
console.log(
  `Today population of ${country} increased by 1 to become: ${popIncr}`
);
let finlandPop = 6;
console.log(
  `Population of ${country} is more than Finland: ${population > finlandPop} `
);
const avgPop = 33;
let description = `${country} is in ${continent} and more than ${halfPop} million speak ${language}`;
console.log(description);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 windows + . is used to add emoji to the string 🤣🤣
*/
// let massJohn = 78;
// let heightJohn = 1.69;
// let massMark = 92;
// let heightMark = 1.95;
let massJohn = 95;
let heightJohn = 1.88;
let massMark = 85;
let heightMark = 1.76;
let BMIJohn = massJohn / heightJohn ** 2;
let BMIMark = massMark / heightMark ** 2;
let markHigherBMI = BMIJohn > BMIMark;
console.log(markHigherBMI);
if (BMIJohn > BMIMark)
  console.log(`John's BMI: ${BMIJohn} is greater than Mark's BMI: ${BMIMark}`);
else console.log(`John's BMI: ${BMIJohn} is less than Mark's BMI: ${BMIMark}`);

// L-6
if (population > 33)
  console.log(`${country}'s population greater than average`);
else console.log(`${country}'s population less than average`);

// L-7 type conversion(explicit) and coercion(implicit)
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

// L-8
// falssy values: {0,-0,"",Undefined,null,NaN}, truthy values: everything except 6-falssy values.
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(-0),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
);
console.log(Boolean(123), Boolean("Chandrakant"), Boolean([]));

// L-9
let numNeighbours;
// numNeighbours = prompt();// i/p from prompt is string.
// loose equality == type covercion occurs
numNeighbours = "1";
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else console.log("No borders");
// strict equality === type covercion does not occur
numNeighbours = "1";
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else console.log("No borders");
// type conversion
numNeighbours = "1";
if (Number(numNeighbours) === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else console.log("No borders");

// L-10
// testing for &&
if (population < 50 && language === "English" && !isIsland)
  console.log(`${country} does meet your criteria`);
else console.log(`${country} does not meet your criteria`);
// testing for ||
if (population < 50 || language === "English" || !isIsland)
  console.log(`${country} does meet your criteria`);
else console.log(`${country} does not meet your criteria`);
