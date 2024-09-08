// The reduce() method in JavaScript is incredibly powerful for condensing an array into a single value. Here are a few real-life project scenarios where reduce() shines:
// Calculating Totals , Finding Averages , IN A SHOPING APP WHERE WE HAVE TO SUN THE AMOUNT PRESENT IN CART BY ADDING ITEMS ONE BY ONE


const myArray = [1 , 2 , 3 , 4 , 5];

const myTotal = myArray.reduce( (accumulator , currentValue) => {
    console.log(`Accumulator is ${accumulator} And CurrentValue is ${currentValue}`)
    return accumulator + currentValue
} , 0)

console.log(`Final value of Accumulator is ${myTotal}`);