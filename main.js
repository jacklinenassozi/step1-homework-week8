//An array with the numbers from 1 to 1000.
let myArray = [];
for(let i = 1; i<1000; i++){
myArray.push(i)
}
function divisibleFactory(x){
    const divisibleNumber = () => myArray.filter(num => num % x === 0);
    return divisibleNumber;
  }
  // const divisbleByWHATEVERNUMBER = arr ... WHATEVERNUMBER ... ;
  const divisibleBy3 = divisibleFactory(3);
console.log("numbers divisible by 3: ", divisibleBy3());
console.log("Amount of numbers divisible by 3: ", divisibleBy3().length);

const divisibleBy10 = divisibleFactory(10);
console.log("Numbers divisible by 10: ", divisibleBy10());
console.log("Amount of numbers divisible by 10: ", divisibleBy10().length);

const divisibleBy21 = divisibleFactory(21);
console.log("Numbers divisible by 21: ", divisibleBy21());
console.log("Amount of numbers divisible by 21: ", divisibleBy21().length);