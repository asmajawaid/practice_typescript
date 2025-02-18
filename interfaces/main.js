//  One of TypeScript’s core principles is that type checking focuses on the shape that values
//  have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, 
//  interfaces fill the role of naming these types, and are a powerful way of defining 
//  contracts within your code as well as contracts with code outside of your project.
function myobj(labelObj) {
    console.log(labelObj.label);
}
let printobj = { size: 10, label: "size 10 of object" };
myobj(printobj);
export {};
