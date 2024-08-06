"use strict";
// they don't block the execution of the rest of your code. This is great for performance
// because your program doesn't have to wait for these operations to finish before it can
// do anything else.
Object.defineProperty(exports, "__esModule", { value: true });
const checkMyResult = (myMarks) => {
    const promese = new Promise((resolve, reject) => {
        // let myMarks = 81 // staticlly no diye he
        if (myMarks > 80) {
            resolve("promise success"); //calling resolve
        }
        else {
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
const loginUserPromise = (email, passward) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "asma@gmail.com" && passward === 1234) {
                resolve(email);
            }
            else {
                reject("Invalid email or passward");
            }
        }, 2000);
    });
};
const getUserVideosPromise = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email) {
                resolve(["video1", "video2", "video3"]);
            }
            else {
                reject("Please provide your email");
            }
        }, 3000);
    });
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
    try {
        const email = await loginUserPromise("asma@gmail.com", 1234);
        console.log(email);
        const videos = await getUserVideosPromise(email);
        console.log(videos);
    }
    catch (error) {
        console.log(error);
    }
};
getUserDetails();
console.log("first");
// ====================================
//try catch
