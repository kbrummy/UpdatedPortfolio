var i = 0;
var image = new Array();
// LIST OF IMAGES
image[0] = "./assets/images/Insta-Date.png";
image[1] = "./assets/images/Culinate.png";
image[2] = "./assets/images/Code-Quiz.png";
image[3] = "./assets/images/Work-Day-Scheduler.png";
var k = image.length - 1;

var link = new Array();
// LIST OF LINKS
link[0] = "https://brianpraseuth.github.io/Group-Project-1-Insta-Date/";
link[1] = "#";
link[2] = "https://kbrummy.github.io/Homework4/";
link[3] = "https://kbrummy.github.io/Homework5/";

function swapImage() {
  var img = document.getElementById("slide");
  img.src = image[i];
  var a = document.getElementById("link");
  a.href = link[i];

  if (i < k) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("swapImage()", 4000);
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}
addLoadEvent(function () {
  swapImage();
});
