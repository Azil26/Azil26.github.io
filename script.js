window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  const leftGate = document.querySelector(".left-gate");
  const rightGate = document.querySelector(".right-gate");

  if(scrollY > 1){

    leftGate.style.transform = "translateX(-100%)";
    rightGate.style.transform = "translateX(100%)";

  } else {

    leftGate.style.transform = "translateX(0)";
    rightGate.style.transform = "translateX(0)";

  }

});

/* MAP SLIDER */

const maps = [

  {
    title: "3D Nusikalstamumo žemėlapis",

    description:
    "3D vizualizacija leidžianti įvertinti pavojingiausias miesto teritorijas.",

    image: "img/map_1.png",

    link: "pages/map1.html"
  },

  {
    title: "Laiko analizės žemėlapis",

    description:
    "Animuotas žemėlapis rodantis nusikalstamumo pokyčius laike.",

    image: "img/map_2.png",

    link: "pages/map2.html"
  },

  {
    title: "2 rodiklių žemėlapis",

    description:
    "Animuotas žemėlapis rodantis nusikalstamumo pokyčius laike.",

    image: "img/map_3.png",

    link: "pages/map3.html"
  },

  {
    title: "Saugumo poreikių žemėlapis",

    description:
    "Žemėlapyje žymimos tam tikros saugumo poreikio klasės.",

    image: "img/map_4.png",

    link: "pages/map4.html"
  }

];

let currentMap = 0;


function updateMap(){

  document.getElementById("mapTitle").innerText =
    maps[currentMap].title;

  document.getElementById("mapDescription").innerText =
    maps[currentMap].description;

  document.getElementById("mapImage").src =
    maps[currentMap].image;

  document.getElementById("mapButton").href =
    maps[currentMap].link;
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
  dot.classList.remove("active");
});

dots[currentMap].classList.add("active");
}

function nextMap(){

  currentMap++;

  if(currentMap >= maps.length){
    currentMap = 0;
  }

  updateMap();
}

function prevMap(){

  currentMap--;

  if(currentMap < 0){
    currentMap = maps.length - 1;
  }

  updateMap();
}

function goToMap(index){

  currentMap = index;

  updateMap();
}