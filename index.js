


let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your second number"));
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum=0;
function add()
{
  sum=num1+num2;
  alert("The sum of "+num1+" and "+num2+" is "+sum);
  document.getElementById("sum-el").textContent = sum;

}
function sub()
{
  sum=num1-num2;
  alert("The subtractin of "+num1+" and "+num2+" is "+sum);
  document.getElementById("sum-el").textContent = sum;
}
function div()
{
  sum=num1/num2;
  alert("The division of "+num1+" and "+num2+" is "+sum);
  document.getElementById("sum-el").textContent = sum;
}
function multi()
{
  sum=num1*num2;
  alert("The multiplication of "+num1+" and "+num2+" is "+sum);
  document.getElementById("sum-el").textContent = sum;
}
