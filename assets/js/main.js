const clock = document.getElementById("clock");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

const date = new Date();
day.innerHTML = date.getUTCDate();
month.innerHTML = `${months[date.getUTCMonth()]}, `;
year.innerHTML = date.getUTCFullYear();

function theme(){
  let theme = document.getElementById('container');
  let themeIcon = document.getElementById('theme');

  

  if(!theme.classList.contains('dark')){
    theme.classList.add('dark')
    themeIcon.innerHTML = '<i class="ri-sun-line" id="theme__img"></i>'
  }else{
    theme.classList.remove('dark')
    themeIcon.innerHTML = '<i class="ri-moon-line" id="theme__img"></i>'
  }
}