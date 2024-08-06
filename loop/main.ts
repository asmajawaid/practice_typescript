// code ko bar  bar chalana
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")

// function printConsole() {
//     console.log("1");
// }
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// function or direct console bhi br br chalana he. 
// ===========================FOR LOOP====================================
console.log("before loop")
for(let i=0; i<5; i++){
    console.log("1")
    console.log("2")

}

let index:number=0
while(index<5){
    console.log("10")
    console.log("20")
    index =index +1
    console.log("index:", index)

}

console.log("after loop")
// ====================================================================

//write the ts programme thats print the table of 2 ten times?


let start:number = 1;
 while (start <= 10){
    let result = 2* start;
    console.log(" 2 * " + start + " = " + result);
    start = start + 1;

 }


let table5:number = 1;
while(table5 <= 10) {
    let tableAnswer = 5*table5;
    console.log(" 5 * " + table5 + " = "+tableAnswer);
    table5= table5+1;
}



// ==============================FOR============================================
let cities = ["karachi", "islamabad", "lahore", "balochistan", "pishawar"] 
for(let i=0; i<cities.length; i++){
    let array = cities[i];
    console.log(array)
}
// =================================FOR OF===============================================
let color =[ "red", "yellow", "black", "pink", "blue"]
for(let i of color ){
    console.log(i);
}
// ===================================FOR IN=========================================

let country =["pakistan","india","USA","UAE","UK","russia"]
for(let i in country){
    console.log( country[i]);
}




