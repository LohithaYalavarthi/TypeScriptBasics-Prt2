interface valuesType {
    a :number,
    b:number
}
function createSquare(values : valuesType){
 let sum = values.a * values.b
 console.log("sum", sum)

}
let values={
    a : 2,
    b : 3
}
createSquare(values)

//Optional Parameters


interface SquareConfig {
    color?: string;
    width?: number;
    [propName : string ] : any
  }
  
  function createSquare1(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
  
  let mySquare = createSquare1({ width: 100, opacity: 0.5, area :300 } as SquareConfig);
  //Function Types.............

  //Instead of declaring not only object interface can be used to declare function types

  interface SearchFun{
    (source : string, substring : string) : boolean
  }

let mySearch: SearchFun;

mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

//indexable types - declare  the index type would be 

interface StringArray {
  [index : number] : string // this refers that index will be of number type and value will be string
}

let myArray : StringArray
myArray =["Bob", "Fred"]
let myStr : string = myArray["8"]

//Class Types along with methods declaring types
interface ClockInterface {
  currentTime : Date,
  setTime (d : Date) : void;
}

class Clock implements ClockInterface{
  currentTime : Date = new Date();
  setTime (d: Date) {
    this.currentTime = d
  }
  constructor(h:number,m:number){}
}
