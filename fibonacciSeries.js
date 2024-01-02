//5)write a programme to print Fibonacci series(using loops).
//sum of 2 preceeding numbers 0,1,1,2,3,5,8,13,21,34.........
var f1 =0;
var f2 =1;
console.log(" "+f1);
console.log(" "+f2);
for(var i = 2; i<=20; i++)
{
    f3= f1+f2;
    console.log(" "+ f3);
    f1=f2;
    f2=f3;
}
