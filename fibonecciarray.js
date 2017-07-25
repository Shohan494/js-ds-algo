var fibo = [10];

fibo[0] = 0;
fibo[1] = 1;

console.log(fibo[0]);
console.log(fibo[1]);


for (var i = 2; i <= 11; i++)
{
  fibo[i] = fibo[i-1] + fibo[i-2];
  console.log(fibo[i]);
}