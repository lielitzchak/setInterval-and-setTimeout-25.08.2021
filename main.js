// exeresie 1
// function print4Sec() {
//   window.setInterval(() => {
//     console.log("liel");
//   }, 4000);
// }
// print4Sec()

// exeresie 2

// function exe2() {
//   window.setInterval(() => {
//     alert("itzchak");
//   }, 3000);
// }
// exe2()

// exeresie 3
// function fullName() {
//   window.setInterval(() => {
//     document.write("liel itzchak");
//   }, 2000);
// }
// fullName();

// exeresie 4

// function addMone() {
//   var counter = 0;
//   window.setInterval(() => {
//     document.write(counter);
//     counter++;
//   }, 1000);
// }
// addMone()
// var divHTML = document.getElementById("divHTML");

// exeresie 5
// function AddToP() {
//   window.setInterval(() => {
//     parg.innerHTML += "<p><P>";
//   }, 2000);
// }
//  AddToP();

// exeresie 6
// function printPWithId() {
//   counter = 0;
//   window.setInterval(() => {
//     document.getElementById("parg").innerHTML += `<p id="${counter++}"></p>`;
//   }, 2000);
// }
// printPWithId();

// exeresie 7

// function printDivEvery2sec() {
//   window.setInterval(() => {
//     document.getElementById("parg").innerHTML += `<div></div>`;
//   }, 2000);
// }
// printDivEvery2sec();

// exeresie 8








// exeresie 10

// function exe10() {
//   console.log(
//     setTimeout(() => {
//       console.log("liel");
//     }, 4000)
//   );
// }
// exe10();

// exeresie 10
// var internalId;

// var myDiv = document.getElementById("myDiv"),
//   btnPlay = document.getElementById("btnPlay"),
//   btnStop = document.getElementById("btnStop"),
//   bigDiv = document.getElementById("bigDiv"),
//   myDiv = document.getElementById("myDiv"),
//   size = 0,
//   width = 0,
//   hight = 0;

// function stopButton() {
//   btnStop.onclick = () => {
//     window.clearInterval(internalId);
//   };
// }

// btnPlay.onclick = () => {
//   internalId = window.setInterval(() => {
//     myDiv.style.left = `${size++}px`;
//     if (size > 200) {
//       window.clearInterval(internalId);
//     }
//     if (size > 200) {
//       internalId = window.setInterval(() => {
//         if (size > 200) {
//           myDiv.style.top = `${hight++}px`;

//           window.clearInterval(internalId);
//         }
//       }, 7);
//     }
//   }, 5);
// };

// window.setInterval(() => {
//   var dateObject = new Date();
//   document.getElementById("divTimer").innerHTML = `${dateObject.getHours()}:
//   ${dateObject.getMinutes()}:${dateObject.getSeconds()} `;
// }, 1000);
