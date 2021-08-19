let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let item = document.querySelectorAll('.item');


menu.onclick = () =>{
  menu.classList.toggle('uil-times');
  navbar.classList.toggle('active');
}

function linkAction (){
    menu.classList.remove('uil-times');
    navbar.classList.remove('active');
}

item.forEach(n => n.addEventListener('click' , linkAction));

window.onscroll = () =>{
  menu.classList.remove('uil-times');
  navbar.classList.remove('active');
}

let AudioBtn = document.querySelector('#AudioBtn');
let audio = document.getElementById('audio');
AudioBtn.onclick = () =>{
  let name = AudioBtn.classList[1]
  if (name == 'uil-play-circle'){
    AudioBtn.classList.remove(name);
    AudioBtn.classList.add('uil-stop-circle');
    AudioBtn.innerHTML = 'Stop';
    audio.play();
  }
  if (name == 'uil-stop-circle'){
    audio.pause();
    AudioBtn.classList.remove('uil-stop-circle');
    AudioBtn.classList.add('uil-play-circle');
    AudioBtn.innerHTML = 'Play';
  }
}

var theme = document.querySelector("#dark");
var darktheme = 'theme-change';

theme.onclick = () => {
  theme.classList.toggle('uil-sun'); 
  document.body.classList.toggle(darktheme); 
}