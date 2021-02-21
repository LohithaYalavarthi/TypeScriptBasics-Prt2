//any - unsure what the variable type would be 
//or expecting the value from third party library or the user input where we dont know the type
var randomValue = 10;
randomValue = true;
randomValue = 34;
var myVariable = 10;
//myVariable.hadFn()
//unknown type- we dont know the type
var random;
//Typechecking we tell that user we know what the type of value might be 
random.toUpperCase();
//user defined guard
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
