//any - unsure what the variable type would be 
//or expecting the value from third party library or the user input where we dont know the type

let randomValue : any =10;
randomValue= true
randomValue=34

let myVariable : unknown =10
//myVariable.hadFn()

//unknown type- we dont know the type

let random : unknown
//Typechecking we tell that user we know what the type of value might be 
(random as string).toUpperCase()


//user defined guard

function hasName (obj: any) : obj is {name : string}{
    return !!obj && typeof obj === "object" && "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name)
}

