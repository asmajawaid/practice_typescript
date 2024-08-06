//defination: The TypeScript switch statement executes one statement from multiple conditions.
//  It evaluates an expression based on its value.  Each value is represented by a single block 
// of code in a switch statement.

//https://www.javatpoint.com/typescript-switch-statement

// The following points must be remembered in a switch statement:

// 1.There can be N number of cases inside a switch statement.
// 2.The case values must be unique.
// 3.The case values must be constant.
// 4.Each case statement has a break statement at the end of the code. The break statement is optional.
// 5.The switch statement has a default block which is written at the end. The default statement is optional.




// import { log } from "console";

let section: string = "A";

switch (section) {
  case "A":
    console.log("switch - your class timing is every sunday 11am - 1pm");
    break;
  case "B":
    console.log("switch - your class timing is every sunday 2pm - 4pm");
    break;
  default:
    console.log("switch - your class timing is every sunday 6pm - 8pm");

    break;
}
// ===============================================================================================
// 
let a=3
let b=2
switch (a+b){
  case 1:{
    console.log("a+b is 1");
    break;
  }
  case 2:{
    console.log("a+b is 5");
    break;
  }
  case 3:{
    console.log("a+b is 6");
    break;
  }
  default:{
    console.log("a+b is 5");
    break;
  }
}
// =========================================================================================

let grade="A";
switch (grade){
  
  case'A+':  
      console.log("Marks >= 90"+"\n"+"Excellent");  
      break; 
      case'A':  
      console.log("Marks [>= 80 and <90]"+"\n"+"GOOD");  
      break; 
      case'B+':  
      console.log("Marks [>= 70 and <80]"+"\n"+"Above Average");  
      break; 
      case'B':  
      console.log("Marks[>= 60 and >70]"+"\n"+"Average");  
      break; 
      case'C':  
      console.log("Marks < 60"+"\n"+"Below Average");  
      break; 
      default:
        console.log("invalid Grade")


}


