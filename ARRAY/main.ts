// //Making ARRAY
// let studentNames:string[]=["asma","jawaid","hadi","qadir","arshad","abdul samad"]

// console.log(studentNames[0]); // access first element

// console.log(studentNames); 

// console.log(studentNames[3]); //call specific variable from array

// console.log(studentNames[0]); //print with old name

// studentNames[0]="arshad mehmood" //over write variable in array

// console.log(studentNames[0]); //print new value

// console.log(studentNames); //check with new value array

// console.log(studentNames.length); //know whats the lenght(NumberOfItems) of array

// console.log('function:');

// let studentNames:string[]=["asma","jawaid","hadi","qadir"]
// function pushNewItemInArray(studentNameAdd:string) {
//     studentNames[3]=studentNameAdd // always over write value not add,yaha index no define nahe krty
//     // studentNames[studentNames.length]= studentNameAdd
// }
// pushNewItemInArray("alex")
// // pushNewItemInArray("zender")
// // pushNewItemInArray("allien")
// console.log(studentNames); 
// // ====================================================================


// //simply create variable and use built in function to add and remove


// //we can also use preBuilt in function to add and remove like
let stuNames:string[]=["jawaid","hadi","qadir","arshad"]

stuNames.push("osama")
stuNames.pop()
console.log(stuNames)

stuNames.shift();
stuNames.unshift("Asma")
console.log(stuNames);

// //in splice function we pass 3 arguments first which index No is strt and how much index No delete and 3rd "add item"
// stuNames.splice(3,0,"jawaid", "quyyum") //morethan one items can add
// console.log(stuNames);
// // stuNames.splice(4,0,"hifza", "kiran") //add in last
// // console.log(stuNames);
// stuNames.splice(4,0,"hifza", "kiran") //add in last
// stuNames.splice(0,4,"hifza", "kiran") //add in start
// console.log(stuNames);
// stuNames.splice(0,4) //[print [] null bcoz 4 index not exist ]
// console.log(stuNames);



let studentRollNo:number[]=[1002,1003,1004,1005,1006,1007,1008,1009]
console.log(studentRollNo[6] + studentRollNo[5]) // do arthmatic operations
console.log(studentRollNo.length);

































