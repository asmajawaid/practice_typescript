let avg:number = 20; 
let percentage:number = 90; 

console.log("Value of avg: "+avg+" ,value of percentage: "+percentage);
 
let  res:boolean = ((avg>50)&&(percentage>80)); 
                    //   (true)&&(false) 2no condition must true so output is (true)
console.log("(avg>50)&&(percentage>80): ",res); //false

let ras:boolean = ((avg>50)||(percentage>80)); 
          //     (true)||(true) 2no condition me se koi bhi ak true hogi to output is (true)
console.log("(avg>50)||(percentage>80): ",ras); //true

let ros:boolean=!((avg>50)&&(percentage>80)); 
                 //(false) not (true) if a value isn't true so output is (true)
console.log("!((avg>50)&&(percentage>80)): ",ros); //true
