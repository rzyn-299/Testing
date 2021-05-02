function ubahNamaA(){
  var userInput1, myBox1;
  userInput1 = document.getElementById("form_mn").value;
  myBox1 = document.getElementById("appear1");
  myBox1.innerHTML = userInput1;
}

function ubahNamaB(){
  var userInput2, myBox2;
  userInput2 = document.getElementById("form_fn").value;
  myBox2 = document.getElementById("appear2");
  myBox2.innerHTML = userInput2;
}

function bagiMessage(){
  var userInput3, myBox3;
  userInput3 = document.getElementById("form_mes").value;
  myBox3 = document.getElementById("appear3");
  myBox3.innerHTML = userInput3;
}

function manaLoc(){
  var userInput4, myBox4;
  userInput4 = document.getElementById("form_loc").value;
  myBox4 = document.getElementById("appear4");
  myBox4.innerHTML = userInput4;
}

function theDate(){
  var userInput5, myBox5;
  userInput5 = document.getElementById("form_date").value;
  myBox5 = document.getElementById("appear5");
  myBox5.innerHTML = userInput5;
}
