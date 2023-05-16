
function findMax() {
let a = document.querySelector("#num1").value;
let b = document.querySelector("#num2").value;
let c = document.querySelector("#num3").value;

if (a > b && a > c) {
   console.log(a, "Is the Greatest");
}
else if (a < b && b > c) {
   console.log(b, "Is the Greatest");
}
else{
   console.log(c ,"is greater");
}
}