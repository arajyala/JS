/* print the below pattern
   *
   **
   ***
   ****  
*/

for(var i =1; i<=4; i++)
{
   var line ="";
   for(var j=1;j<=i; j++)
   {
      line += "*";
   }
   console.log(line);
}
