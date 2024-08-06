import { log } from "console";

function halfFryEgg(egg:number=1, butter:number=2,salt:number=1){
return egg + butter+ salt
}
console.log(halfFryEgg()); // by defalt
console.log(halfFryEgg(1,3,1)); // by defalt



//default with rest parameter
function shoppingInStore(store:string = "asma's STORE", ...list: string[]){
    return `Shopping at ${store} for ${list.join(", ")}`
}
console.log(shoppingInStore("Super market", "milk, bread, rice, eggs"));
console.log(shoppingInStore(undefined, "milk, bread, rice, eggs"));

//default with destructured objects
function configureSettings({ volume = 50, brightness = 70, theme = "light" } = {}): string {
    return `Settings: Volume(${volume}), Brightness(${brightness}), Theme(${theme})`;
}

console.log(configureSettings({ volume: 30 })); // Output: Settings: Volume(30), Brightness(70), Theme(light)
console.log(configureSettings()); // Output: Settings: Volume(50), Brightness(70), Theme(light)

//over riding default para
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(5)); // Output: 10
console.log(multiply(5, undefined)); // Output: 10
console.log(multiply(5, 3)); // Output: 15


