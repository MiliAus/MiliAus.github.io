const body = document.body;
const themebutton = document.getElementById('light');
const themetext = document.getElementById('light-button');
const theme = localStorage.getItem("theme");
let count = 1;
let counter = localStorage.getItem('count');


function darkMode() {
   localStorage.setItem('theme','dark');
   body.classList.replace('light','dark');
   
    if (document.getElementById("linkedin" || document.getElementById("github") != null)) {
        document.getElementById("linkedin").style.fill = "white";
        document.getElementById("github").style.fill = "white";
    }
    document.getElementById('light-icon').src = 'assets/Moon.png';

    themetext.innerText = 'Dark';
  
  
}
function lightMode() {
    localStorage.setItem('theme','light');
    body.classList.replace('dark','light');
    if (document.getElementById("linkedin" || document.getElementById("github") != null)) {
        document.getElementById("linkedin").style.fill = "black";
        document.getElementById("github").style.fill = "black";
    }
    document.getElementById('light-icon').src = 'assets/Sun.png';
    
    themetext.innerText = 'Light';
 }


themebutton.onclick = function(){
    count++; 
    localStorage.setItem('count',count);
    if(count % 2){
        lightMode();
    }
    else{
        darkMode();
    }
  }
 


 window.addEventListener('DOMContentLoaded', () => {
     let theme = localStorage.getItem('theme');
     if (theme == 'dark'){
         darkMode();
     }
     else{
         lightMode();
     }
 });
