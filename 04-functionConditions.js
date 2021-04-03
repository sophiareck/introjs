function conditions(choice){
if (choice == "1"){
  console.log("your flower is the daffodil" + "\n" + "happy spring");
  alert("your flower is the daffodil" + "\n" + "happy spring")
}
else if (choice == "2"){
  console.log("your flower is the tulip" + "\n" + "happy spring");
  alert("your flower is the tulip" + "\n" + "happy spring")
}
else if (choice == "3"){
  console.log("your flower is the daisy" + "\n" + "happy spring");
  alert("your flower is the daisy" + "\n" + "happy spring")
}
else{
    console.log("you don't get a flower because you can't follow directions" +
    "\n" + "I said to pick a number between 1 and 3 -_-");
    alert("you don't get a flower because you can't follow directions" +
    "\n" + "I said to pick a number between 1 and 3 -_-")
  }
}
choice = window.prompt("pick a number between 1 and 3 and I'll assign you a flower")
conditions(choice);

//I added an alert cause I wanted to
//I know it said to print to the console in the assignment
