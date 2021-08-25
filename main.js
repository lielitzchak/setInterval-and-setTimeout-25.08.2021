// exeresie 1
function doSomething() {
  window.setInterval(() => {
    console.log("liel");
  }, 4000);
}
// doSomething()

// exeresie 2

function exe2() {
  window.setInterval(() => {
    alert("itzchak");
  }, 3000);
}
// exe2()

// exeresie 3
function fullName() {
  window.setInterval(() => {
    document.write("liel itzchak");
  }, 2000);
}
// fullName();

// exeresie 4

function addMone() {
  var counter = 0;
  window.setInterval(() => {
    document.write(counter);
    counter++;
  }, 1000);
}
// addMone()
var divHTML = document.getElementById("divHTML");

//! exeresie 5
function AddToP() {
  window.setInterval(() => {
    divHTML.innerHTML = "<p><P>";
  }, 2000);
}
// AddToP();

//! exeresie 6
function addPWithId() {
  var counter = 0;
  window.setInterval(() => {
    // document.write(<P id="paragraph"> exeresie 6</P>);
    counter++;
  }, 2000);
}

// exeresie 10

function exe10() {
  console.log(
    setTimeout(() => {
      console.log("liel");
    }, 4000)
  );
}
exe10();

// exeresie 10
var internalId;

var myDiv = document.getElementById("myDiv");
var btnPlay = document.getElementById("btnPlay");
var btn = document.getElementById("btnStop");
var size = 0;

btnPlay.onclick = () => {
  internalId = window.setInterval(() => {
    myDiv.style.left = `${size++}px`;
  }, 50);
};

btn.onclick = () => {
  window.clearInterval(internalId);
};
