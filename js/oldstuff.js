
// are you ready?
document.getElementById("startBtn").addEventListener("click",
 (e) => {
 document.getElementById("startImg").src = "http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg";
});

//change text to continue click

document.getElementById("startBtn").addEventListener("click",
(e) => {
var elem = document.getElementById("startBtn");
  if (elem.value=="I am ready!") {
      elem.value = "Continue";
  } else {
    var rmvbtn = document.getElementById("startBtn");
    rmvbtn.remove();
    var rmvimg = document.getElementById("startImg");
    rmvimg.remove();
          var newDiv = document.createElement("div");
          var newStyle = document.createElement("H1");
          var firstQuestion = document.createTextNode("What is your name?");
          newStyle.appendChild(firstQuestion);
          newStyle.setAttribute("id", "question");
          var username = document.createElement("INPUT");
          username.setAttribute("type", "text");
          username.setAttribute("id", "userName");
          var btn = document.createElement("BUTTON");
          btn.setAttribute("id", "submitName");
          var btnText = document.createTextNode("Submit");
          btn.appendChild(btnText);
          var newPic = document.createElement("IMG");
          newPic.setAttribute("id","firstQuePic");
          newPic.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/736x/2d/bb/22/2dbb221505762fb32cfec3a21aa9749f.jpg");
                newDiv.appendChild(newStyle);
                newDiv.appendChild(newPic);
                username.appendChild(btn);
                newDiv.appendChild(username);
                newDiv.appendChild(btn);
                document.body.appendChild(newDiv);

    document.getElementById("submitName").addEventListener("click",
  (e) => {
    var ifSubmit = document.getElementById("userName").value;
    if (ifSubmit.length!=-1) {
      console.log(ifSubmit);

      var rmvbtn = document.getElementById("submitName");
      rmvbtn.remove();
      var rmvform = document.getElementById("userName");
      rmvform.remove();
      var rmvheader = document.getElementById("question");
      rmvheader.remove();
      var rmvimg = document.getElementById("firstQuePic");
      rmvimg.remove();


              var newDivTwo = document.createElement("div");
              var newQueStyle = document.createElement("H1");
              var secQuestion = document.createTextNode("What is your gender?");
              newQueStyle.appendChild(secQuestion);
              newQueStyle.setAttribute("id", "question");
              var femDiv = document.createElement("div");
              var summerGen = document.createElement("IMG");
              summerGen.setAttribute("id","summerGender");
              summerGen.setAttribute("src", "http://www.aveleyman.com/Gallery/ActorsG/tve146453-3731-20131209-0.jpg");
              var fem = document.createElement("INPUT");
              fem.setAttribute("id", "female");
              fem.setAttribute("type", "radio");
              var ans1 = document.createTextNode("Female");
              femDiv.setAttribute("id","femaleDiv");
              femDiv.appendChild(summerGen);
              femDiv.appendChild(ans1);
              femDiv.appendChild(fem);

              var malDiv = document.createElement("div");
              var mortyGen = document.createElement("IMG");
              mortyGen.setAttribute("id","mortyGender");
              mortyGen.setAttribute("src","https://pbs.twimg.com/profile_images/710449830489890816/ef8uZJqk.jpg");
              var male = document.createElement("INPUT");
              male.setAttribute("id", "maLe");
              male.setAttribute("type", "radio");
              var ans2 = document.createTextNode("Male");
              malDiv.setAttribute("id","maleDiv");
              malDiv.appendChild(mortyGen);
              malDiv.appendChild(ans2);
              malDiv.appendChild(male);

              var hzDiv = document.createElement("div");
              var meeseksGen = document.createElement("IMG");
              meeseksGen.setAttribute("id", "msGen");
              meeseksGen.setAttribute("src", "https://pbs.twimg.com/profile_images/647129820745199616/Yh4fqebK.png");
              var hz = document.createElement("INPUT");
              hz.setAttribute("id", "hZ");
              hz.setAttribute("type", "radio");
              var ans3 = document.createTextNode("I don't know");
              hzDiv.setAttribute("id","hezeDiv");
              hzDiv.appendChild(meeseksGen);
              hzDiv.appendChild(ans3);
              hzDiv.appendChild(hz);

              document.body.appendChild(newDivTwo);
              newDivTwo.appendChild(newQueStyle);
              newDivTwo.appendChild(femDiv);
              newDivTwo.appendChild(malDiv);
              newDivTwo.appendChild(hzDiv);

              if (fem.checked) {
                debugger;
              alert("FEMALE");
            } else if (male.checked) {
              alert("male");
            } else if (hz.checked) {
              alert("LOOK AT ME!");
            }



      }; //gender stuff appears
  }); //eventListener for gender


}

}); //eventListener for first click
