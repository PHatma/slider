var imgList = Array.from(document.querySelectorAll(".item img"));
var div = document.querySelector(".large");
var close = document.getElementById("close");
var img = document.querySelector(".medium");
var next = document.getElementById("right");
var prev = document.getElementById("left");
var newIndex;
//event delegation
document.querySelector('.parent').addEventListener('click',function(e){
    if(e.target.tagName == "IMG"){
        newIndex = imgList.indexOf(e.target);
        div.classList.replace("d-none", "d-flex");
        var source = e.target.getAttribute("src");
        img.style=` background-position: center;
  background-size: cover;`
        img.style.backgroundImage = `url(${source})`;
    }
})
// for (var i = 0; i < imgList.length; i++) {
//   imgList[i].addEventListener("click", function (e) {
//     newIndex = imgList.indexOf(e.target);
//     div.classList.replace("d-none", "d-flex");
//     var source = e.target.getAttribute("src");
//     img.style.backgroundImage = `url(${source})`;
//   });
// }
document.addEventListener("keyup", function (e) {
  if (e.key == "ArrowRight") {
    slider(1);
  } else if (e.key == "ArrowLeft") {
    slider(-1);
  } else if (e.key == "Escape") {
    close();
  }
});
document.addEventListener('click', function(e){
    if(e.target == div){
        closeslide() 
    }
})
close.addEventListener("click", function () {
    closeslide() 
});
next.addEventListener("click", function () {
  // next()
  slider(1);
});
prev.addEventListener("click", function () {
  //prev()
  slider(-1);
});
  // advanced function of both next  and prev
function slider(step) {
  newIndex = newIndex + step;
  if (newIndex > imgList.length) {
    newIndex = 0;
  }
  if (newIndex < 0) {
    newIndex = imgList.length - 1;
  }
  var source = imgList[newIndex].getAttribute("src");
  img.style.backgroundImage = `url(${source})`;
}
function prev() {
  newIndex--;
  if (newIndex < 0) {
    newIndex = imgList.length - 1;
  }
  var source = imgList[newIndex].getAttribute("src");
  img.style.backgroundImage = `url(${source})`;
}
function next() {
  newIndex++;
  if (newIndex > imgList.length) {
    newIndex = 0;
  }
  var source = imgList[newIndex].getAttribute("src");
  img.style.backgroundImage = `url(${source})`;
}
function closeslide() {
  div.classList.replace("d-flex", "d-none");
}

