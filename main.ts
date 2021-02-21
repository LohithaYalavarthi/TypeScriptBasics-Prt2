export {} //by adding this file is treated as modules
let message ="Helloworld" // This happens file is treated as script module had own scope where as script share global scope
console.log(message)

let belowage = false
console.log(belowage)

let reachedEnd : boolean  = false
console.log(reachedEnd)

let list: number[] = [1, 2, 3];
console.log('list', list)

let list1: Array<number> = [4,5,6]

//Tuples - is an Array with fixed number of elements whose types are known but not need to be the same
//mixed number of types

let x: [string, number]
x=["Hello", 23]
x[0].substring(2,4)

//x[3] - accessing the element thats not present will throw an error

//Types in typescript - Boolean, number, string, Array,Tuple, Enum,Unknown , any, void, null, undefined
//Enums -Giving a friendly names to the sets of the numeric values

enum Color{
    Red, 
    Green, 
    Blue
}

let c : Color = Color.Green
console.log("enumvalue", c)

//unknown -Type - If we dont know what will be the type of the variable we can give this mostly
// this is for the API -we dont know what response it might be and we want to accept everything then we use 
//this

let notSure :unknown =4
notSure = "maybe a string instead";
notSure = false;

declare const maybe: unknown;

// 'maybe' could be a string, object, boolean, undefined, or other types

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
 // const aString: string = maybe; -THIS IS NOT ACCEPTABLE
//Type 'boolean' is not assignable to type 'string'.
}

//If we want to opt-out typechecking we can label to any type -Sometimes there might be 

declare function getValue(key: string): any;
//remember that all the convenience of any comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.


function warnUser(): void {
    console.log("This is my warning message");
  }

  //null and undefined 

  let u : undefined = undefined
  let n : null = null

  //Never type represents the type of values that never occur. 
  //Never is for the function return type that never returns or throws exception

  function error(message : string) : never {
    throw new Error(message)
  }

  //Never- the type of values that never occur
  //any- any is used when there is no type like the third party library where type declaration is not available
  //unknown -where we dont know the types of variable
  
  //Type Assertions - Sometimes we know more about the value than typescript does.
  //Usually , this will happen when you know the type of some entity could be more specific than its 
  // current type -So the typescript believed the programmer have performed any special checks that you need
  let someValue : unknown = "this is a string" 

  let strLength: number = (someValue as string).length;

//Interfaces - type checking focuses on the shape that values have









