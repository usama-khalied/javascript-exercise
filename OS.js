let checkOpertingSystem = document.querySelector('#checkOs');
checkOpertingSystem.addEventListener("click",function() {
document.querySelector('#para').innerHTML = navigator.appVersion;
// document.querySelector('#para').innerHTML = navigator.appVersion.indexOf("Win")
 if (navigator.appVersion.indexOf("Windows")) document.querySelector('#para').innerHTML="Windows";
 if (navigator.appVersion.indexOf("Mac")) document.querySelector('#para').innerHTML="Windows";

   console.log(navigator.appVersion);
   console.log(navigator.appVersion);
})