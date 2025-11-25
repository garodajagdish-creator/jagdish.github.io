
const menuE1 = document.querySelector('.menu');
window.addEventListener('scroll', () => { if (window.scrollY > 50) { menuE1.classlist.add('menu-scrolled');
} 
else if(window.scrollY <= 50) { menuE1.classList.remove('menu-scrolled');}});


// ......//





// ...////


// let count = document.querySelectorAll(".count");
// let arr = Array.from(count);

// arr.map(function (number) {
//   let startnumber = 0;

//   function counterup() {
//     startnumber++;
//     number.innerHTML = startnumber;

//     if (startnumber == number.dataset.number) {
//       clearInterval(stop);
//     }
//   }

//   let stop = setInterval(function () {
//     counterup();
//   }, 50);
// });

let countElements = document.querySelectorAll(".count");

countElements.forEach(function (element) {
  let start = 0;
  let end = parseInt(element.dataset.number);
  let duration = 10; // milliseconds between updates

  let counter = setInterval(function () {
    start++;
    element.innerText = start;

    if (start >= end) {
      clearInterval(counter);
    }
  }, duration);
});

