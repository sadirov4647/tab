// function palindrome(str) {
//   let regex = /[.,_-\s]/g;
//   let ok = str.toLowerCase().replace(regex, "");
//   console.log(ok)
//   // let reversed = ok.split("").reverse().join("");
//   // if (reversed === ok) {
//   //   console.log("true")
//   // } else {
//   //   console.log("false");
//   // }

//   for (let i = 0; i < ok.length; i++) {
//     var pl = ok[i]
//   }
//   for (let i = ok.length - 1; i >= 0; i--) {
//     var lp = ok[i].split("").join("");
//     console.log(lp)
//   }

//   if (lp === pl) {
//     console.log("true")
//   } else {
//     console.log("false")
//   }


// }
// palindrome("nope");




// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );


// let bubbles = [];

// function setup() {
//   createCanvas(600, 400);
//   for (let i = 0; i < 10; i++) {
//     let x = random(width);
//     let y = random(height);
//     let r = random(20, 60);
//     let b = new Bubble(x, y, r);
//     bubbles.push(b);
//   }
// }

// function mousePressed() {
//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles[i].clicked(mouseX, mouseY);
//   }
// }

// function draw() {
//   background(0);
//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles[i].move();
//     bubbles[i].show();
//   }
// }

// class Bubble {
//   constructor(x, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.brightness = 0;
//   }

//   clicked(px, py) {
//     let d = dist(px, py, this.x, this.y);
//     if (d < this.r) {
//       this.brightness = 255;
//     }
//   }

//   move() {
//     this.x = this.x + random(-2, 2);
//     this.y = this.y + random(-2, 2);
//   }

//   show() {
//     stroke(255);
//     strokeWeight(4);
//     fill(this.brightness, 125);
//     ellipse(this.x, this.y, this.r * 2);
//   }
// }

// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     updateScore() {
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this
//     }
// }

// var userOne = new User("gmail.com", "izzatillo");
// var secondOne = new User("asdasada", "oka");
// userOne.updateScore().updateScore();

// let myString = "izzatillo";
// let fccRegex = /izzatillo/i;
// let result = fccRegex.test(myString);
// console.log(result)


// "use strict";
// let blbl = {
//     kiyim: [
//         {
//             name: "izzatillo",
//             surname: "sadirov"
//         }, {
//             name: "izzatillo",
//             surname: "sadirov"
//         }, {
//             name: "izzatillo",
//             surname: "sadirov"
//         }
//     ]
// }

// for (let i = 0; i < blbl.kiyim.length; i++) {
//     console.log();
// }

// let elTemp = document.querySelector('template').content;

// function okFunction() {
//     let fr = elTemp.cloneNode(true);
//     fr.querySelector(".w-title").textContent = blbl.kiyim.name;

//     document.body.appendChild(fr);
//     return fr


// }
// okFunction()

// function randomRange(myMin, myMax) {

//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

//   }


// let lastNumber = 5;
// let multiplicationResult = 1;

// for(let i = 0; i <= lastNumber; i++){
//   if(i %= 2){ 
//     multiplicationResult += i 
//   }

// }

// console.log(multiplicationResult);

// let gameRuleset = {
//     diceNumber: 2,
//     maxAttempts: 3
//   };

//   let firstCat = {
//     name: 'Кекс',
//     points: 0
//   };

//   let secondCat = {
//     name: 'Рудольф',
//     points: 0
//   };

//   let cats = [firstCat, secondCat];

//   let runGame = function (ruleset, players) {
//     for (let currentAttempt = 1; currentAttempt <= ruleset.maxAttempts; currentAttempt++) {
//       for (let i = 0; i < players.length; i++) {
//         let throwResult = console.log(throwDice(ruleset.diceNumber, ruleset.diceNumber * 6));
//         players[i].points += throwResult;
//         console.log(players[i].name + ' выбросил ' + players[i].points);
//       }
//     }
//     return players;
//   };

//   let getWinners = function (players) {
//     let winners = [];
//     let max = players[0];

//     for (let i = 0; i < players.length; i++) {
//       let currentPlayer = players[i];
//       if (currentPlayer.points > max.points) {
//         max = currentPlayer;
//         winners = [max];
//         console.log('Новый рекордсмен: ' + currentPlayer.points);
//       }
//     }

//     return winners;
//   };

//   cats = runGame(gameRuleset, cats);
//   console.log(cats);
//   let tops = getWinners(cats);
//   console.log(tops);

// let name = 'Кекс';
// let catsFavoriteFood = { 'Кекс': 'рыба' };

// console.log(catsFavoriteFood.name);

// console.log(catsFavoriteFood[name]);

// let materialPrice = {
//   'wood': 1000,
//   'stone': 1500,
//   'brick': 2000
// };

// let house = {
//   rooms: 10,
//   floors: 5,
//   material: 'wood',
//   coefficient: 10.5,

//   calculateSquare: function(){
//     return this['rooms'] * this['coefficient'] * this['floors']
//   },
//   calculatePrice: function(){
//     return this.calculateSquare() * materialPrice[this['material']]
//   }

// };      


// let number = 15;
// for (let i = 1; i <= number; i++){
//   if(i != 1 &&  i != number){
//       if(number % i === 0){
//         console.log(i)
//         }
//     }
//   }
// let days = 9; 
// let period = 3;
// let workDayAmount = 200; 
// let weekendAmount = 100;
// let total = 0;

// for(let i = 1; i <= days; i++){
//   if(i % period === 0){
//     total +=  i * workDayAmount;
//   }else if(i % 6 === 1){
//     total +=  i * weekendAmount;
//   }
// }

// let bill = [123, 555, 44];
// let tips = [];
// let calcTip = function(){
//   for(i = 0; i < bill.length; i++){
//     if(bill[i] >= 50 && bill[i] <= 300){
//       let result =  bill[i] / 15;
//       tips.push(result);
//       console.log(tips)
//     }else{
//       result = bill[i] / 20;
//       tips.push(result);
//     }
//   }

// }
// calcTip()

// let calcTip = function(bill){
//   if (bill>=50 && bill<=300){
//     return bill  * 0.15;
//   }
//   return bill * 0.2;
// }
// console.log(bill);
// tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

// console.log(tips);


// var isValid = function(s) {
//   let brackets = [

//       "{:}",
//       "[:]",
//       "(:)"
//   ]

//   let sum = []

//   for(let ok of s){
//       if(brackets[ok]){
//           sum.push(brackets[ok])
//       }else{
//           sum.pop() !== ok
//       }
//   }
//   return !sum.length
// };

// function binarySearch(list, item){
//     let low = 0;
//     let high = list.length - 1;


//     while(low <= high)
//     let mid = (low + high) / 2;
//     let guess = list[mid];
//     if(guess === item){
//         return mid
//     }else if(guess > item){
//         high = mid - 1
//     }else{
//         low = mid + 1
//     }
//     return None
// }

// myList = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99];

// console.log(binarySearch(myList, 10))

// const result = 'k' + + 'o';
// console.log(result)


