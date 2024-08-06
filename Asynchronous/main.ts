// they don't block the execution of the rest of your code. This is great for performance
// because your program doesn't have to wait for these operations to finish before it can
// do anything else.

import { log } from "console";

//CALLBACK FUNCTION: A callback function is a function passed into another function as an
//argument, which is then invoked inside the outer function to complete some kind of
// routine or action. The consumer of a callback-based API writes a function that is passed
// // into the API.
// type Fn = () => void
// const func1 = (callback: Fn) => {
//   console.log("function one invoked.");
//   callback();
// };
// const func2 = () => {
//   console.log("function two invoked.");
// };
// func1(func2);
// // //==================================================
// const myFun = (callback: Fn) => {
//   console.log("function one invoked.");
//   callback(); // yaha function call hwa he
// };
// myFun(() => console.log("function two invoked.")); //parameter me function pass karna CALLBACK
// // =============================================
// console.log("first");

// setTimeout(() => {
//   console.log("after 3 second");
//   console.log("second");
// }, 3000);

// console.log("third");
// // ===========================================================
// // callBack real life example of concurrency

// const userLoggin = (email: string, passward: number) => {
//   // setTimeout(()=>{
//   // 	console.log("Loggeed In.");

//   // },5000)
//   return {
//     userEmail: email, //return nahe karwaye gy q k return se answer undefine ayga
//   };
// };
// const myemail = userLoggin("arshadasma@abc.com", 12345);
// console.log(myemail); //object print hoga
// //  --------------------------------------------------
// const loggingUser = (email: string, passward: number, callBack: any) => {
//   setTimeout(() => {
//     callBack(email); //call kia he or value di he nechy waly parameter ki
//   }, 2000);
// };
// const getUserVideos = (email: string, callBack: any) => {
//   setTimeout(() => {
//     callBack(["video1", "video2", "video3"]);
//   }, 3000);
// };
// loggingUser("arshadasma@abc.com", 12345, (email: string) => {
//   console.log("User logged In", email);
//   getUserVideos(email, (videos: any) => console.log(videos));
// });
// //email name he callback me value he
// //nested callback called callback hell. isko avoid kaerty he

// // ============syns code simple promise=====================
type fn = () => void;
const checkMyResult = (myMarks: number) => {
  const promese = new Promise((resolve, reject) => {
    // let myMarks = 81 // staticlly no diye he
    if (myMarks > 80) {
      resolve("promise success"); //calling resolve
    } else {
      reject("Fail");
    }
  });
  return promese;
};

checkMyResult(81)
  .then((message) => {
    //resolve k function ki body he ye
    console.log(message);
    return "Treat";
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
// console.log(promise); // promise ka object print hoga
// // =======================================================

//async promise

const loginUserPromise = (email:string, passward:number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(email === "asma@gmail.com" && passward === 1234){
      resolve(email)
      }else{
        reject("Invalid email or passward")
      }
    }, 2000);
  })
}

const getUserVideosPromise = (email:unknown) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(email){
        resolve(["video1", "video2", "video3"]);
      }else{
        reject("Please provide your email")
      }
      
    }, 3000);
   })
  
};

// loginUserPromise("asma@gmail.com", 1234)
// .then((email) => {
//   console.log(email);
//   return getUserVideosPromise("asa@gmail.com")
// })
// .then((videos) =>{
//     console.log(videos);   
// })
// .catch((err) => { //cath ak hi hota he
//   console.log(err);
// })

// ==================================
//async await=> simplify code

const getUserDetails = async () => {
  try{
    const email = await loginUserPromise("asma@gmail.com",1234)
    console.log(email);
    const videos = await getUserVideosPromise(email)
    console.log(videos);
    
  }catch(error){
    console.log(error);
  }
}
getUserDetails()
console.log("first");

// ====================================
//try catch