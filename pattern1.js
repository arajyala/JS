//1)print: 1
//         12
//         123
//         1234
//         12345



var str="";
for(var i = 1; i<=4; i++)
{
    for(var j=1; j<=i ;j++)
    {
        str += j;
    }
    str += "\n";
}
console.log(""+str);