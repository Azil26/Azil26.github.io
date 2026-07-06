const BASE = document.body.dataset.base || "";

/* ---- shared HEADER ---------------------------------------- */

const headerHTML = `
  <header class="header">
    <div class="logo">SAUGUS KAUNAS</div>
    <button class="nav-toggle" aria-label="Meniu" aria-expanded="false">☰</button>
    <nav>
      <ul class="nav-links">
        <li><a href="${BASE}index.html#about">Apie</a></li>
        <li><a href="${BASE}index.html#maps">Žemėlapiai</a></li>
        <li><a href="${BASE}index.html#community">Pasiūlymai</a></li>
        <li><a href="${BASE}index.html#contacts">Kontaktai</a></li>
      </ul>
    </nav>
  </header>`;

/* ---- shared FOOTER ---------------------------------------- */

const footerHTML = `
  <footer class="site-footer" id="contacts">
    <div class="footer-inner">
      <div class="footer-col">
        <h3>Kauno GIS portalas</h3>
        <p>Vilniaus universiteto IT ir GIS studijų projektas.
        Interaktyvūs žemėlapiai skirti Kauno miesto ir rajono
        erdvinių duomenų vizualizavimui ir analizei.</p>
      </div>
      <div class="footer-col">
        <h3>Žemėlapiai</h3>
        <ul>
          <li><a href="${BASE}pages/map1.html">3D Nusikalstamumas</a></li>
          <li><a href="${BASE}pages/map2.html">Laiko analizės žemėlapis</a></li>
          <li><a href="${BASE}pages/map3.html">2 rodiklių žemėlapis</a></li>
          <li><a href="${BASE}pages/map4.html">Saugumo poreikių žemėlapis</a></li>
          <li><a href="${BASE}pages/map5.html">Jūsų indėlis</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Nuorodos</h3>
        <div class="footer-tags">
          <a href="http://geoportal.lt">geoportal.lt</a>
          <a href="https://www.vu.lt">VU</a>
          <a href="https://www.kaunas.lt/">Kauno miesto savivaldybė</a>
          <a href="https://www.tvorumeistras.lt/">tvorų meistras (Vilnius)</a>
          <a href="https://www.manotvora.lt/">mano tvora (Kaunas)</a>
        </div>
      </div>
      <div class="footer-col">
        <h3>Kontaktai</h3>
        <a class="footer-contact-btn" href="${BASE}pages/contacts.html">Susisiekite su mumis</a>
      </div>
    </div>
    <div class="footer-bottom">© 2026 Saugus Kaunas · Vilniaus universitetas, Kartografija ir GIS · Jelizaveta Voitolovič </div>
  </footer>`;

document.body.insertAdjacentHTML("afterbegin", headerHTML);
document.body.insertAdjacentHTML("beforeend", footerHTML);

/* ---- mobile hamburger ------------------------------------- */

const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

/* close the menu after tapping a link (mobile) */
header.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => header.classList.remove("open"));
});

/* ============================================================
   HERO GATES — open on scroll (only present on index.html)
   ============================================================ */

const leftGate = document.querySelector(".left-gate");
const rightGate = document.querySelector(".right-gate");

if (leftGate && rightGate) {
  window.addEventListener("scroll", () => {
    const opened = window.scrollY > 1;
    leftGate.style.transform = opened ? "translateX(-100%)" : "translateX(0)";
    rightGate.style.transform = opened ? "translateX(100%)" : "translateX(0)";
  });
}

/* ============================================================
   MAP SLIDER (only present on index.html)
   ============================================================ */

const maps = [
  {
    title: "3D Nusikalstamumo žemėlapis",
    description: "3D vizualizacija leidžianti įvertinti pavojingiausias miesto teritorijas.",
    image: "img/map_1.png",
    link: "pages/map1.html"
  },
  {
    title: "Laiko analizės žemėlapis",
    description: "Animuotas žemėlapis rodantis nusikalstamumo pokyčius laike.",
    image: "img/map_2.png",
    link: "pages/map2.html"
  },
  {
    title: "2 rodiklių žemėlapis",
    description: "Žemėlapis, lyginantis turto vagystes ir viešuosius nusikaltimus.",
    image: "img/map_3.png",
    link: "pages/map3.html"
  },
  {
    title: "Saugumo poreikių žemėlapis",
    description: "Žemėlapyje žymimos tam tikros saugumo poreikio klasės.",
    image: "img/map_4.png",
    link: "pages/map4.html"
  }
];

const mapTitle = document.getElementById("mapTitle");

if (mapTitle) {
  const mapDescription = document.getElementById("mapDescription");
  const mapButton = document.getElementById("mapButton");
  const mapImage = document.getElementById("mapImage");
  const dots = document.querySelectorAll(".dot");

  let currentMap = 0;

  function updateMap() {
    const m = maps[currentMap];
    mapTitle.innerText = m.title;
    mapDescription.innerText = m.description;
    mapImage.src = m.image;
    mapButton.href = m.link;

    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentMap));
  }

  window.goToMap = index => { currentMap = index; updateMap(); };
  window.nextMap = () => { currentMap = (currentMap + 1) % maps.length; updateMap(); };
  window.prevMap = () => { currentMap = (currentMap - 1 + maps.length) % maps.length; updateMap(); };
}
