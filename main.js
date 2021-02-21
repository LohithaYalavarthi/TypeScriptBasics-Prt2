"use strict";
exports.__esModule = true;
var message = "Helloworld"; // This happens file is treated as script module had own scope where as script share global scope
console.log(message);
var belowage = false;
console.log(belowage);
var reachedEnd = false;
console.log(reachedEnd);
var list = [1, 2, 3];
console.log('list', list);
var list1 = [4, 5, 6];
//Tuples - is an Array with fixed number of elements whose types are known but not need to be the same
var x;
x = ["Hello", 23];
x[0].substring(2, 4);
//x[3] - accessing the element thats not present will throw an error
//Types in typescript - Boolean, number, string, Array,Tuple, Enum,Unknown , any, void, null, undefined
//Enums -Giving a friendly names to the sets of the numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("enumvalue", c);
//unknown -Type - If we dont know what will be the type of the variable we can give this mostly
// this is for the API -we dont know what response it might be and we want to accept everything then we use 
//this
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// 'maybe' could be a string, object, boolean, undefined, or other types
if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    var aBoolean = maybe;
    // So, it cannot be a string
    // const aString: string = maybe; -THIS IS NOT ACCEPTABLE
    //Type 'boolean' is not assignable to type 'string'.
}
//remember that all the convenience of any comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.
function warnUser() {
    console.log("This is my warning message");
}
