/**
 * A prime number is a natural number greater than 1 that is only divisible by 1 and itself. 2, 3, 5, 7, 11, 13 etc are prime numbers. 
 * 4 for example, is not a prime number since 4 is divisible by 2. 4 / 2 = 2. 
 * Bonus points for a more functional approach in your code. For example, try to use array functions such as map, filter or reduce.
 * 
 * 
 */

let array:number[] = []

for(let i = 0; i <1000; i++){
    array.push(i)
}

let primeArray:number[] = array.filter((num) => getPrime(num))


function getPrime(n: number): boolean{
    //Verifying if n is smaller than 2 because doesnt exist a prime number bellow
    if(n < 2){
        return false
    }
    let half = n / 2
    for(let i = 2; i <= half; i++){
        //Verifying if has divisor 
        if(n % i == 0){
            return false
        }
    }
    return true
}

let primeSum = 0

primeArray.forEach((num) =>{
    primeSum += num
})

console.log(primeSum)