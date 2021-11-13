function multiply(a, b) {
    return a * b;
}

let result = multiply (2, 4);
console.log(result);


result = multiply (4, 6);
console.log(result);

console.log (2 + 10 - 19 + 4 - 90 +1)
console.log(-20 + -19 - (-10) - (-1) + 24)
console.log((10/5) * 4 - 20)
console.log(4096 % 12)
console.log(43 > 47)
console.log(12 == 17)
console.log(3 <= 3)
console.log(1 != 0)
console.log( "Hello" + 5*10)
var quote = "Stay awhile and listen!";
console.log(quote[6]);
"3">1


const chooseStations = (stations) => {
    const goodStations = [];
    for (const station of stations) {
        const capacity = station [1];
        if (capacity >= 20){
            const type = station [2];
            if (type === "community centre" || type === "school") {
                goodStations.push(station(0))
            }
        }
    }
    return goodStations
}

5 * "3";
5 + "3";
5 % "3";
let sum = 3 + 2;

const doubleSum = function(a, b) {
  let sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum);