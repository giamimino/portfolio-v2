const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

const slideBar = document.querySelector('.slidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videoList = [video1, video2, video3];

videoList.forEach((video) => {
  video.addEventListener('mouseover', ()=> {
    video.play();
    hoverSign.classList.add("active");
  });

  video.addEventListener('mouseout', ()=> {
    video.pause();
    hoverSign.classList.remove("active");
  })
})

menu.addEventListener("click", ()=> {
  slideBar.classList.add("open-slidebar");
  slideBar.classList.remove("close-slidebar");
})

close.addEventListener("click", ()=> {
  slideBar.classList.add("close-slidebar");
  slideBar.classList.remove("open-slidebar");
})