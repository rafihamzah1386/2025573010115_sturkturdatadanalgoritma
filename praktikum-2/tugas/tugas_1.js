// TUGAS 1: FIZZBUZZ

console.log("=== FizzBuzz 1 - 50 ===");

for (let i = 1; i <= 50; i++) {

    if (i % 15 === 0) { 
        console.log("FizzBuzz"); // kelipatan 3 & 5
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}
//5. Karena 15 adalah kelipatan dari 3 dan 5 sekaligus.