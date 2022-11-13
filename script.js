const body = document.body;
const theme = localStorage.getItem("theme");
const lightButton = document.getElementById("light");

//Navbar ids/////////////////////////////////////////////////////////
const home = document.getElementById("home");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
////////////////////////////////////////////////////////////////////

//check local storage theme
if (localStorage.getItem("theme", "light")) {
  turnDark();
} else {
  turnLight();
}

function turnDark() {
  localStorage.setItem("theme", "light");
  body.classList.replace("dark", "light");
  lightButton.firstChild.nodeValue = "Light"; //change naming convention to "Dark"

  if (document.getElementById("dark-icon") != null) {
    (document.getElementById("dark-icon").src = "assets/Sun.png") &&
      (document.getElementById("dark-icon").id = "light-icon"); //change the icon to Moon for dark mode
    document.getElementById("dark").id = "light";
  }

  myUrl = window.location.href; // get the url
  lastWordInUrl = myUrl.substring(myUrl.lastIndexOf("/") + 1, myUrl.length); // get last word of url

  if (
    document.getElementById(
      "linkedin" || document.getElementById("github") != null
    )
  ) {
    document.getElementById("linkedin").style.fill = "black";
    document.getElementById("github").style.fill = "black";
  }
} //end turnDark

function turnLight() {
  {
    localStorage.setItem("theme", "dark");
    body.classList.replace("light", "dark");
    lightButton.firstChild.nodeValue = "Dark"; //change naming convention to "Dark"
    document.getElementById("light-icon").id = "dark-icon";
    document.getElementById("dark-icon").src = "assets/Moon.png"; //change the icon to Moon for dark mode
    document.getElementById("light").id = "dark";

    myUrl = window.location.href; // get the url

    if (
      document.getElementById(
        "linkedin" || document.getElementById("github") != null
      )
    ) {
      document.getElementById("linkedin").style.fill = "white";
      document.getElementById("github").style.fill = "white";
    }
  }
} // end turnlight

lightButton.onclick = () => {
  if (lightButton.innerHTML == "Dark") {
    turnDark();
  } else {
    turnLight();
  }
}; // end lightButton
