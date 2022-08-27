// let l = document.querySelectorAll('li');
//
// console.log(l.length);
//
// for (let i = 0; i<l.length; i++) {
//   console.log(l[i].textContent);
// }

document.querySelector('.elements').style.display = "none";

document.getElementById("carbon").addEventListener('click', () => {
  document.querySelector('.elements').style.display = "flex";
})

document.getElementById("carbon").addEventListener('dblclick', () => {
  document.querySelector('.elements').style.display = "none";
})
