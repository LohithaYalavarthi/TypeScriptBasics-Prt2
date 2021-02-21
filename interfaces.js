function createSquare(values) {
    var sum = values.a * values.b;
    console.log("sum", sum);
}
var values = {
    a: 2,
    b: 3
};
createSquare(values);
function createSquare1(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20
    };
}
var mySquare = createSquare1({ width: 100, opacity: 0.5, area: 300 });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray["8"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
