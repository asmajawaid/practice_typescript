"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function halfFryEgg(egg = 1, butter = 2, salt = 1) {
    return egg + butter + salt;
}
console.log(halfFryEgg()); // by defalt
console.log(halfFryEgg(1, 3, 1)); // by defalt
//default with rest parameter
function shoppingInStore(store = "asma's STORE", ...list) {
    return `Shopping at ${store} for ${list.join(", ")}`;
}
console.log(shoppingInStore("Super market", "milk, bread, rice, eggs"));
console.log(shoppingInStore(undefined, "milk, bread, rice, eggs"));
//default with destructured objects
function configureSettings({ volume = 50, brightness = 70, theme = "light" } = {}) {
    return `Settings: Volume(${volume}), Brightness(${brightness}), Theme(${theme})`;
}
console.log(configureSettings({ volume: 30 })); // Output: Settings: Volume(30), Brightness(70), Theme(light)
console.log(configureSettings()); // Output: Settings: Volume(50), Brightness(70), Theme(light)
//over riding default para
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // Output: 10
console.log(multiply(5, undefined)); // Output: 10
console.log(multiply(5, 3)); // Output: 15
