var rickCounter = 0;
var mortyCounter = 0;
var summerCounter = 0;
var mrMeeseks = 0;
function goToName () {
  document.getElementById("start").style.display= "none";
  document.getElementById("name").style.display = "block";
}

function showName () {
  var name = (document.getElementById("username").value);
  console.log(document.getElementById("username").value);
}
function goToAge () {
  document.getElementById("name").style.display = "none";
  document.getElementById("age").style.display = "block";
}

function showAge () {
  var userage = (document.getElementById("userAge").value);
  console.log(document.getElementById("userAge").value);
  if (userage <=14) {
    mortyCounter++;
  } else if (userage >14 && userage <= 16) {
    summerCounter++;
  } else if (userage >= 17){
    rickCounter++;
  }
}
function goToGender () {
  document.getElementById("age").style.display = "none";
  document.getElementById("gender").style.display = "block";
}

function showGender () {
  var usergender = (document.querySelector('input[name="selectedGender"]:checked').value);
  console.log(document.querySelector('input[name="selectedGender"]:checked').value);
  if (usergender === "Female") {
    summerCounter++;
  } else if (usergender==="Male") {
    rickCounter++;
    mortyCounter++;
  } else if (usergender === "DUNNO") {
    mrMeeseks++;
  }
}
function goToInterests () {
  document.getElementById("gender").style.display = "none";
  document.getElementById("interests").style.display = "block";
}

function showInterestRick() {
  console.log(document.getElementById("booze").value);
  rickCounter++;
}
function showInterestMorty() {
console.log(document.getElementById("girls").value);
  mortyCounter++;
  mrMeeseks++;
}
function showInterestSummer () {
  console.log(document.getElementById("boys").value);
  summerCounter++;
  mrMeeseks++;
}
function goToAdventure () {
  document.getElementById("interests").style.display = "none";
  document.getElementById("adventure").style.display = "block";
}

function ifAdventure() {
  var ifLoveAdventure = (document.getElementById("adventureLover").value);
  console.log(document.getElementById("adventureLover").value);
  if (ifLoveAdventure <= 33) {
    mortyCounter++;
  } else if (ifLoveAdventure > 33 && ifLoveAdventure <= 66) {
    summerCounter++;
  } else if (ifLoveAdventure > 66 && ifLoveAdventure <=88) {
    mrMeeseks++;
  } else if (ifLoveAdventure > 88 && ifLoveAdventure <=100){
    rickCounter++;
  }
}
function goToResult() {
  document.getElementById("adventure").style.display = "none";
  document.getElementById("result").style.display = "block";
}

function congratsYou() {
if (rickCounter > mortyCounter && rickCounter > summerCounter && rickCounter > mrMeeseks){
  document.write("Congratulations "+document.getElementById("username").value+", you are Rick!");
  document.write("");
  var rickRes = document.createElement("IMG");
  rickRes.setAttribute("src", "pic/rick.jpg");
  document.body.appendChild(rickRes);
} else if (mortyCounter > rickCounter && mortyCounter > summerCounter && mortyCounter > mrMeeseks) {
  document.write("I am sorry "+document.getElementById("username").value+", you are Morty!");
  document.write("");
  var mortyRes = document.createElement("IMG");
  mortyRes.setAttribute("src", "pic/morty.jpg");
  document.body.appendChild(mortyRes);
} else if (summerCounter > rickCounter && summerCounter > rickCounter && summerCounter > mrMeeseks) {
  document.write("Eeeeeegh "+document.getElementById("username").value+", you are Summer!");
  document.write("");
  var summerRes = document.createElement("IMG");
  summerRes.setAttribute("src", "pic/summer.jpg");
  document.body.appendChild(summerRes);
} else if (mrMeeseks > rickCounter && mrMeeseks > summerCounter && mrMeeseks > mortyCounter) {
   document.write("What?! "+document.getElementById("username").value+", you are Mr. Meeseks!");
   document.write("");
   var meeseeksRes = document.createElement("IMG");
   rickRes.setAttribute("src", "pic/meeseeks.jpg");
   document.body.appendChild(meeseeksRes);
}
}
