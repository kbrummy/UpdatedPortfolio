var i = 0;
var image = new Array();
// LIST OF IMAGES
image[0] =
  "/Users/kristinbrumfield/Desktop/Homework/UpdatedPortfolio/assets/images/Screen Shot 2020-08-25 at 9.57.55 PM.png";
image[1] =
  "/Users/kristinbrumfield/Desktop/Homework/UpdatedPortfolio/assets/images/Screen Shot 2020-08-25 at 9.58.35 PM.png";
image[2] =
  "/Users/kristinbrumfield/Desktop/Homework/UpdatedPortfolio/assets/images/Screen Shot 2020-08-25 at 9.58.56 PM.png";
var k = image.length - 1;

var link = new Array();
// LIST OF LINKS
link[0] = "https://brianpraseuth.github.io/Group-Project-1-Insta-Date/";
link[1] = "https://kbrummy.github.io/Homework5/";
link[2] = "https://kbrummy.github.io/Homework4/";

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
  setTimeout("swapImage()", 5000);
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
