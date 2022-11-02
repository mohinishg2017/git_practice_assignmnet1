function checkPrime(num){
  let count=0; 
  for (x=1; x<=num; x++){
    if (num%x==0){
      count++
    }
  }return count;
} 

let prime=13
let ans=checkPrime(prime)
if (ans==2){
  console.log(prime, "is prime no")
} else {
   console.log(prime, "is not prime no")
}