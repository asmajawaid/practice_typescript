//IF ELSE STATEMENT (if 2 condition)
let isRaining = false; //or false
if (isRaining){
    console.log("wear a rain coat");//true
}else{
    console.log("wear a sun glasses");//false
}

// if 3 condition
let weather = "cloudy";// cloudy||raining|| ""
if (weather === "raining"){
    console.log("wear a rain coat");
}else if(weather === "cloudy") {
    console.log("wear a light jscket");
}else{
    console.log("wear a sun glasses");

}
//2 condition with
const min = 100;
let count = 100;
if (count < min) {
    count++;
} else {
    count = 1;
}
console.log(count); //output is 1

//3 condition with teranary operators
const max = 100;
let counter = 100;
counter < max ? counter++ : counter = 1;
console.log(counter);//1 output

//IF, ELSE IF AND ELSE STATEMENT(3 condition)
let discount : number;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5){
    discount=5 //5%
}else if  (itemCount>5 && itemCount<=10){
    discount=10 //10%
}else{
    discount=15 //15%
}
console.log(`You got ${discount}% discount. `)


// more than 3 condition
let discounts: number;
let itemCounts = 11;
if (itemCounts > 0 && itemCounts <= 5) {
    discounts = 5;  // 5% discount
} else if (itemCounts > 5 && itemCounts <= 10) {
    discounts = 10; // 10% discount 
} else if (itemCount > 10) {
    discounts = 15; // 15%
} else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)
