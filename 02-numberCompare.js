var number1 = window.prompt("Enter a number")
var number2 = window.prompt("Enter another number")

if (number1 == number2){
  alert("the numbers are the same!" + "\n" + number1 +" = " + number2)
}
else if (number1 < number2){
  alert("number1 is less than number2" + "\n" + number1 +" < " + number2)
}
else{
  alert("number1 is greater than number2" + "\n" + number1 +" > " + number2)
}
