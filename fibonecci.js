var a = 0;
var b = 1;
var c = a + b;
var number = prompt("Please enter How Many Fibonecci You Need", "1-50");

console.log(a);
console.log(b);

for (i = 0; i <= number; i++)
{
    console.log(c);
    //renew
    a = b;
    b = c;
    c  = a + b;
}