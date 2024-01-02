//3. Write a logic for marriage both girl and boy

/*var gender = "Male";
var age = 20;

if( age>=21 && gender==="Male")
{
    console.log("Male is Eligible for marriage");
}

else if(age>=18 && gender==="Female")
{
    console.log("Female is Eligible for marriage");
}
else{
    console.log("Not eligible for marriage");
}*/


//using Ternary operator
var gender = "Female";
var age = 25;

age >= 21 && gender === "Male"
  ? console.log("Male is Eligible")
  : age >= 18 && gender === "Female"
  ? console.log("Female is eligible")
  : console.log("Not eligible");
