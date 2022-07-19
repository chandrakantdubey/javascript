"use strict";
// helps to find and fix the bug which rather would go undetected.

// declaration
function logger(){
    console.log("My name is Chandrakant");
}
// calling/running/invoking
const loggerVal = logger();
console.log(loggerVal);
// when function return nothing their value is undefined.
// function produce a value hence they can be assigned a value

// function use DRY(do not repeat yourself)
// we can relate the function to juicer
// you put in fruits(parameters/arguments) and turn power(code) on it produces(return type) juice
function fruitProcessor(apples,oranges){
    // console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice = fruitProcessor(5,0);
console.log(applejuice);
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// function declaration
// function declaration can be called before defination appears in the code.
function calcAge1(birthYear){
    const age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1(1996);
console.log(age1);

// function expression
const calcAge2 = function(birthYear){
    const age = 2037 - birthYear;
    return age;
}
const age2 = calcAge2(1996);
console.log(age2);

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);
const yearUntillRetirement = (birthYear,name) => {
    const age = 2037 - birthYear;
    const retirement = 58-age;
    return `${name} has ${retirement} years for retirement.`;
}
console.log(yearUntillRetirement(1996,"Chandrakant"));

// calling functions inside other function
function cutFruitPieces (fruit){
    if("oranges") return fruit*8;
    else if("apples") return fruit*4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apples} apples ${applePieces} pieces and ${oranges} oranges ${orangePieces} pieces.`;
    return juice;
}
const juice = fruitProcessor(3,5);
console.log(juice);

// L-1
function describeCountry(country,population,capitalCity){
    return `${country} has a population of ${population} millions and ${capitalCity} is the capital city`;
}
const desCon = describeCountry("India",1310,"Delhi");
console.log(desCon);
// L-2, L-3
function percentageOfWorld(population){
    const worldPopulation = 7900;
    return (population/worldPopulation)*100;
}
console.log(`Population of China is: ${percentageOfWorld(1441)}% of world population`);
const percentageOfWorld1 = population => (population / 7900) * 100;
console.log(percentageOfWorld1(1441));


// Arrays: DataStructures: comma separated
// L-4
// using array literal
const friends = ['Shraddha','Sanju','Yuvraj'];
console.log(friends);
// using array construct using new keywor
const years = new Array(1991,1984,2008,2020);
// accessing the array
console.log(friends[0]);
// length of the array
console.log(friends.length);
// inside square brackets we can put any expression that evaluates to value that can be parsed.
console.log(friends[friends.length-1]);
// adding an element inside the array
friends[3] = "Onkar";
console.log(friends);
// as we see above variable declared with const is mutable
// the reason is objects are mutable

// L-5
// Arrays methods
const newLength = friends.push('Gaurav');
// push method adds element at the end
console.log(friends);
// push method returns a length
console.log(newLength);
// pop methods pops out the last element
console.log(friends.pop());
// unshift adds element at the start and returns length
console.log(friends.unshift("Gaurav"));
// indeOf returns the index of the element
console.log(friends.indexOf('Shraddha'));
// includes checks with strict equlaity and returns boolean value.
console.log(friends.includes('Sanjay'));
console.log(friends.includes('Sanju'));


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
const checkAVg = (scr1,scr2,scr3)=>(scr1+scr2+scr3)/3;
// const avgKoalas = checkAVg(44,23,71);
// const avgDolphins = checkAVg(23,34,27);
const avgKoalas = checkAVg(185, 154, 141);
const avgDolphins = checkAVg(65, 54, 49);
console.log(avgDolphins,avgKoalas);
const checkWinner = (avgKoalas,avgDolphins) => {
    if(avgKoalas>=(avgDolphins*2)) return 'Koalas';
    else if(avgDolphins>=(avgKoalas*2)) return 'Dolphins';
    else return 'No one wins';
};
console.log(checkWinner(avgKoalas, avgDolphins));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
const calcTip = (billVal)=>{
    if(billVal>=50 && billVal<=300) return billVal*0.15;
    else if(billVal>300) return billVal*0.2;
    else return 0;
}
const billVal = [125,555,44];
const tips = [calcTip(billVal[0]), calcTip(billVal[1]), calcTip(billVal[2])];
const total = [
  billVal[0] + calcTip(billVal[0]),
  billVal[1] + calcTip(billVal[1]),
  billVal[2] + calcTip(billVal[2]),
];
console.log(tips[0],tips[1],tips[2]);
console.log(total[0], total[1], total[2]);


// Objects
// L-6
const Chandrakant = {
    firstname: 'Chandrakant',
    lastname: 'Dubey',
    age: 2022-1996,
    job: 'Project Engineer',
    friends: ['Shraddha','Sanju','Yuvi'],
};
console.log(Chandrakant);
// accesing the property
console.log(Chandrakant.lastname);
console.log(Chandrakant['lastname']);
const nameKey = 'name';
// brackets allow to pass in expressions
console.log(Chandrakant['first'+nameKey]);

const John = {
    height: 1.8,
    johnFullName: 'John Yang',
    mass: 70,
    johnBMI: (mass,height)=>{
    return mass / (height * height);
    }
}
console.log(John.johnBMI(54,1.65));


