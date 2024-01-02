/*2)print: 1234
           123
           12
           1 
          
*/
var str="";
for(var i = 1; i<=4; i++)
{
    for(var j=1; j<=4-i+1 ;j++)
    {
        str += j;
    }
    str += "\n";
}
console.log(""+str);