const locationBtn = document.querySelector(".location");
let locationPopup = document.querySelector(".location-popup");
let locationOverlay = document.querySelector(".location-overlay");
locationBtn.addEventListener("click", function () {
  locationPopup.classList.toggle("show");
  locationOverlay.classList.toggle("show");
});

let backBtn = document.querySelector(".location-overlay");
let backPopup = document.querySelector(".location-popup");
backBtn.addEventListener("click", function () {
  backPopup.classList.remove("show");
  backBtn.classList.remove("show");
  optionPop.classList.remove("show");
});

let handburgerBtn = document.querySelector(".hand-burger");
let optionPop = document.querySelector(".option");
handburgerBtn.addEventListener("click", function () {
  optionPop.classList.toggle("show");
  locationOverlay.classList.toggle("show");
});

const root = document.getElementById("root");
function homepage() {
  root.innerHTML = `
        <section class="home">
        <div class="previous">&lt</div>
        <div class="slider-content">
            <div class="slider">
            <img src="" alt="">
            </div>
            <div class="slider">
            <img src="" alt="">
            </div>
            <div class="slider">
            <img src="" alt="">
            </div>
    </div> 
    <div class="forward">&gt</div>

        <!-- recommmended movies -->
    <div class="home1">
    <div class="recommed-movies">
    <div class="left101"><</div>
        <div class = heading101>
        <h1>Recommended Movies</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="movies-content">
    
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        </div>
        <div class="right101">></div>
    </div>

    <!-- banned -->

    <div class="banner">
        <img src="./picture/stream-leadin-web-collection-202210241242.png" alt=""> 
    </div>

    <div class="live-event">
         <div class="left101"><</div>
            <div class = heading101>
        <h1>The Best Of Live Events</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="event-content">
            <div class="event-list">
                 <img src="" alt="">
               
            </div>
            <div class="event-list">
                 <img src="" alt="">
                
            </div>
            <div class="event-list">
                 <img src="" alt="">
               
            </div>
            <div class="event-list">
                 <img src="" alt="">
               
            </div>
            <div class="event-list">
                 <img src="" alt="">
              
            </div>
            <div class="event-list">
                 <img src="" alt="">
                
            </div>
            <div class="event-list">
                 <img src="" alt="">
              
            </div>
            <div class="event-list">
                 <img src="" alt="">
              
            </div>
            <div class="event-list">
                 <img src="" alt="">
                
            </div>
            <div class="event-list">
                 <img src="" alt="">
               
            </div>
        </div>
        <div class="right101">></div>
    </div>

    <!-- premiere -->
     <div class="premiere">
     <div class="premier">
        <div class="head">
       
            <img src="./picture/logo.avif" alt="">
            </div>
            <div class="premiere-content">
                <h1>premieres</h1>
                <p>Brand new releases every Friday</p>
                <div class="primi-list">
                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                </div>
        </div>
        </div>
     </div>

     <!-- popular events -->
      <div class="popular-content">
       <div class="left101"><</div>
            <div class = heading101>
        <h1>Popular Events</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="popular-list">
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
        </div>
         <div class="right101">></div>
      </div>

      <!-- Top Games & Sport Events -->
       <div class="sport-events">
       <div class="left101">></div>
            <div class = heading101>
        <h1>Top Game & Sport Events</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="sport-conent">
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
        </div>
        <div class="right101">></div>
       </div>

       <!-- fun activities -->

       <div class="fun-activites">
       <div class="left101">></div>
            <div class = heading101>
        <h1>Explore Fun Activities</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="fun-content">
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
        </div>
        <div class="right101">></div>
       </div>
       
       </div>

        </section>
    `;
}
homepage();

let sliderContainer = document.querySelector(".slider-content");
let sliders = document.querySelectorAll(".slider");
let previousBtn = document.querySelector(".previous");
let forwardBtn = document.querySelector(".forward");

async function sliderimage() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const sliderimages = await API_URL.json();

    const images = [];

    sliderimages.forEach((item) => {
      if (item.category === "slider") {
        images.push(item.image);
      }
    });

    return images;
  } catch (error) {
    console.log("Slider error:", error.message);
  }
}
// sliderimage()

async function loadSliderImages() {
  try {
    const images = await sliderimage();

    images.forEach((image, index) => {
      sliders[index].style.backgroundImage =
        `url("http://127.0.0.1:8000${image}")`;
    });
  } catch (error) {
    console.log("Load slider error:", error.message);
  }
}

loadSliderImages();

let recommended = document.querySelectorAll(".movies-list");

async function recommendedimage() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const recommendedimages = await API_URL.json();

    const images = [];
    recommendedimages.forEach((item) => {
      if (item.category === "recommended") {
        images.push(item);
      }
    });
    // console.log(images)
    return images;
  } catch (error) {
    console.log("Slider error:", error.message);
  }
}
// recommendedimage()

async function loadSliderImagesrec() {
  try {
    const imagesrecommen = await recommendedimage();

    imagesrecommen.forEach((movie, index) => {
      const card = recommended[index];
      card.querySelector("img").src = `http://127.0.0.1:8000${movie.image}`;
      card.querySelector("h2").textContent = movie.title;
      card.querySelector("p").textContent = movie.genre;
    });
  } catch (error) {
    console.log("Load slider error:", error.message);
  }
}

loadSliderImagesrec();

let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= sliders.length) {
    currentIndex = 0;
  }
  sliderContainer.scrollTo({
    left: currentIndex * sliderContainer.clientWidth,
    behavior: "smooth",
  });
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliders.length - 1;
  }
  sliderContainer.scrollTo({
    left: currentIndex * sliderContainer.clientWidth,
    behavior: "smooth",
  });
}

forwardBtn.addEventListener("click", function () {
  nextSlide();
});

previousBtn.addEventListener("click", function () {
  previousSlide();
});

setInterval(function () {
  nextSlide();
}, 5000);

const movieContent = document.querySelector(".movies-content");
const eventContent = document.querySelector(".event-content");
const popularContent = document.querySelector(".popular-list");
const sportContent = document.querySelector(".sport-conent");
const funContent = document.querySelector(".fun-content");
const leftBtn = document.querySelector(".left101");
const rightBtn = document.querySelector(".right101");
const popularleftBtn = document.querySelector(".popular-content .left101");
const popularrightBtn = document.querySelector(".popular-content .right101");
const eventleftBtn = document.querySelector(".live-event .left101");
const eventrightBtn = document.querySelector(".live-event .right101");
const sportleftBtn = document.querySelector(".sport-events .left101");
const sportrightBtn = document.querySelector(".sport-events .right101");
const funleftBtn = document.querySelector(".fun-activites .left101");
const funrightBtn = document.querySelector(".fun-activites .right101");

function leftScroll() {
  movieContent.scrollBy({
    left: -1500,
    behavior: "smooth",
  });
}

leftBtn.addEventListener("click", function () {
  leftBtn.classList.add("notshow");
  rightBtn.classList.remove("notshow");
  leftScroll();
});

function rightScroll() {
  movieContent.scrollBy({
    left: 1500,
    behavior: "smooth",
  });
}

rightBtn.addEventListener("click", function () {
  leftBtn.classList.remove("notshow");
  rightBtn.classList.add("notshow");
  rightScroll();
});

function popularleftScroll() {
  popularContent.scrollBy({
    left: -1500,
    behavior: "smooth",
  });
}

popularleftBtn.addEventListener("click", function () {
  popularleftBtn.classList.add("notshow");
  popularrightBtn.classList.remove("notshow");
  popularleftScroll();
});

function popularrightScroll() {
  popularContent.scrollBy({
    left: 1500,
    behavior: "smooth",
  });
}

popularrightBtn.addEventListener("click", function () {
  popularleftBtn.classList.remove("notshow");
  popularrightBtn.classList.add("notshow");
  popularrightScroll();
});

function eventleftScroll() {
  eventContent.scrollBy({
    left: -1500,
    behavior: "smooth",
  });
}

eventleftBtn.addEventListener("click", function () {
  eventleftBtn.classList.add("notshow");
  eventrightBtn.classList.remove("notshow");
  eventleftScroll();
});

function eventrightScroll() {
  eventContent.scrollBy({
    left: 1500,
    behavior: "smooth",
  });
}

eventrightBtn.addEventListener("click", function () {
  eventleftBtn.classList.remove("notshow");
  eventrightBtn.classList.add("notshow");
  eventrightScroll();
});

function sportleftScroll() {
  sportContent.scrollBy({
    left: -1500,
    behavior: "smooth",
  });
}

sportleftBtn.addEventListener("click", function () {
  sportleftBtn.classList.add("notshow");
  sportrightBtn.classList.remove("notshow");
  sportleftScroll();
});

function sportrightScroll() {
  sportContent.scrollBy({
    left: 1500,
    behavior: "smooth",
  });
}

sportrightBtn.addEventListener("click", function () {
  sportleftBtn.classList.remove("notshow");
  sportrightBtn.classList.add("notshow");
  sportrightScroll();
});

function funleftScroll() {
  funContent.scrollBy({
    left: -1500,
    behavior: "smooth",
  });
}

funleftBtn.addEventListener("click", function () {
  funleftBtn.classList.add("notshow");
  funrightBtn.classList.remove("notshow");
  funleftScroll();
});

function funrightScroll() {
  funContent.scrollBy({
    left: 1500,
    behavior: "smooth",
  });
}

funrightBtn.addEventListener("click", function () {
  funleftBtn.classList.remove("notshow");
  funrightBtn.classList.add("notshow");
  funrightScroll();
});

let eventlist = document.querySelectorAll(".event-list");
async function event() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const events = await API_URL.json();
    const eventdetail = [];
    events.forEach((item) => {
      if (item.category === "event") {
        eventdetail.push(item);
      }
    });
    return eventdetail;
  } catch (error) {
    console.log("event error:", error.message);
  }
}

async function eventload() {
  try {
    const eventimg = await event();
    eventimg.forEach((event, index) => {
      const eventitem = eventlist[index];
      eventitem.querySelector("img").src =
        `http://127.0.0.1:8000${event.image}`;
    });
  } catch (error) {
    console.log("Load slider error:", error.message);
  }
}

eventload();

let premierContent = document.querySelectorAll(".pre-list");
async function premier() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const premi = await API_URL.json();

    const premiarray = [];
    premi.forEach((item) => {
      if (item.category === "premier") {
        premiarray.push(item);
      }
    });
    return premiarray;
  } catch (error) {
    console.log("premiererror:", error.message);
  }
}

async function premierload() {
  try {
    const premierdetail = await premier();
    premierdetail.forEach((premier, index) => {
      const premierimg = premierContent[index];
      premierimg.querySelector("img").src =
        `http://127.0.0.1:8000${premier.image}`;
      premierimg.querySelector("h2").textContent = premier.title;
      premierimg.querySelector("p").textContent = premier.genre;
    });
  } catch (error) {
    console.log("Load preimer error:", error.message);
  }
}
premierload();

function showMovieDetail(movie) {
  root.innerHTML = `
    <div class="movie-detail-page">
       <div class="hero-banner">
        <div class="hero-bg-image">
        </div>

        <button class="share-btn">
            <span class="share-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                </svg>
            </span>
            Share
        </button>

        <div class="hero-content">
            <div class="movie-poster">
                <div class="poster-image"></div>
                <div class="trailer-badge">
                    <div class="play-icon"></div>
                    Trailers
                </div>
                <div class="release-date-badge">Releasing on ${movie.date}</div>
            </div>

            <div class="movie-info">
                <h1 class="movie-title">${movie.title}</h1>

                <div class="movie-meta">
                    ${movie.time} <span class="dot">•</span> ${movie.genre} <span class="dot">•</span> ${movie.certificate} <span class="dot">•</span> ${movie.date}
                </div>

                <div class="movie-tags">
                    <span class="movie-tag">${movie.format}</span>
                </div>

                <div class="book-tickets-btn" style=cursor:pointer;width:250px;padding:20px;text-align:center>${movie.default}</div>
            </div>
        </div>
    </div>

    <div class="main-content">

        <div class="section">
            <h2 class="section-title">About the movie</h2>
            <p class="about-text">
                ${movie.description}
            </p>
        </div>

        <div class="section-divider"></div>

        <div class="section" style="margin-top: 40px;">
            <h2 class="section-title">Top offers for you</h2>
            <div class="offers-wrapper">
            <div class="offers-container">
                <div class="offer-card">
                    <div class="offer-card-content">
                        <div class="offer-icon red">
                            <img src="../picture/bandhan-bank-avni-debit-card-offer-bandhan824.avif" alt="">
                        </div>
                        <div class="offer-details">
                            <h4>Enjoy B1G1 Ticket Free!* with Bandhan Bank...</h4>
                            <p>Tap to view details</p>
                        </div>
                    </div>
                </div>
                <div class="offer-card">
                    <div class="offer-card-content">
                        <div class="offer-icon blue">
                            <img src="../picture/yes-private-debit-card-offer-yespvt124.avif" alt="">
                        </div>
                        <div class="offer-details">
                            <h4>Buy 1 get 1 movie ticket free + 50% off on non...</h4>
                            <p>Tap to view details</p>
                        </div>
                    </div>
                </div>
                <div class="offer-card">
                    <div class="offer-card-content">
                        <div class="offer-icon blue">
                            <img src="../picture/yes-private-debit-card-offer-yespvt124.avif" alt="">
                        </div>
                        <div class="offer-details">
                            <h4>Buy 1 get 1 movie ticket free + 50% off on non...</h4>
                            <p>Tap to view details</p>
                        </div>
                    </div>
                </div>
                 <div class="offer-card">
                    <div class="offer-card-content">
                        <div class="offer-icon red">
                            <img src="../picture/bandhan-bank-avni-debit-card-offer-bandhan824.avif" alt="">
                        </div>
                        <div class="offer-details">
                            <h4>Enjoy B1G1 Ticket Free!* with Bandhan Bank...</h4>
                            <p>Tap to view details</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <button class="offers-nav-btn">›</button>
            </div>
        </div>

        <div class="section-divider"></div>


        <div class="cast-crew-section" style="margin-top: 40px;">
            <h2 class="section-title-line">Cast</h2>
            <div class="cast-grid">
                <div class="cast-card">
                    <div class="cast-image"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Actor</div>
                </div>
                <div class="cast-card">
                    <div class="cast-image"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Actor</div>
                </div>
                <div class="cast-card">
                    <div class="cast-image"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Actor</div>
                </div>
                <div class="cast-card">
                    <div class="cast-image"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Actor</div>
                </div>
            </div>
        </div>

        <div class="cast-crew-section">
            <h2 class="section-title-line">Crew</h2>
            <div class="cast-grid">
                <div class="cast-card">
                    <div class="cast-image square"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Director</div>
                </div>
                <div class="cast-card">
                    <div class="cast-image square"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Producer</div>
                </div>
                <div class="cast-card">
                    <div class="cast-image square"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Musician</div>
                </div>
                <div class="cast-card">
                    <div class="cast-image square"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Cinematographer</div>
                </div>
                <div class="cast-card">
                    <div class="cast-image square"></div>
                    <div class="cast-name"></div>
                    <div class="cast-role">Editor</div>
                </div>
            </div>
        </div>

        <div class="section-divider"></div>


        <div class="section" style="margin-top: 40px;">
            <div class="also-like-header">
                <h2 class="section-title" style="margin-bottom: 0;">You might also like</h2>
                <a href="#" class="view-all-link">View All ›</a>
            </div>
            <div class="movies-carousel-wrapper">
                <button class="carousel-btn left">‹</button> 
                <button class="carousel-btn right">›</button>
                <div class="movies-carousel">
                    <div class="movie-card">
                        <div class="movie-card-poster">
                        <img src="../picture/magudam-et00504560-1782305182.avif" alt="">
                        </div>
                        <div class="movie-card-rating">
                            <span class="star-icon">★</span>  
                            <span class="rating-value">8.7</span>
                            <span class="rating-votes">24.7K+ <a href="#">votes</a></span>
                        </div>
                        <div class="movie-card-title">Magudam</div>
                    </div>
                    <div class="movie-card">
                        <div class="movie-card-poster">
                        <img src="../picture/vishwanath-and-sons-et00489815-1772610917.avif">
                        </div>
                        <div class="movie-card-rating">
                            <span class="star-icon">★</span>
                            <span class="rating-value">9.3</span>
                            <span class="rating-votes">55.1K+ <a href="#">votes</a></span>
                        </div>
                        <div class="movie-card-title">Vishwanath and Sons</div>
                    </div>
                    <div class="movie-card">
                        <div class="movie-card-poster">
                        <img src="../picture/photographer-et00509751-1785333981.avif">
                        </div>
                        <div class="movie-card-rating">
                            <span class="star-icon">★</span>
                            <span class="rating-value">9.2</span>
                            <span class="rating-votes">4.7K+ <a href="#">votes</a></span>
                        </div>
                        <div class="movie-card-title">Photographer</div>
                    </div>
                    <div class="movie-card">
                        <div class="movie-card-poster">
                        <img src="../picture/dc-et00508106-1784289361.avif">
                        </div>
                        <div class="movie-card-rating">
                            <span class="thumbs-icon">★</span>
                            <span class="rating-value">7.8</span>
                            <span class="rating-votes">3.2K+ <a href="#">votes</a></span>
                        </div>
                        <div class="movie-card-title">Dc</div>
                    </div>
                    <div class="movie-card">
                        <div class="movie-card-poster">
                        <img src="../picture/jana-nayagan-et00430817-1784548204.avif">
                        </div>
                        <div class="movie-card-rating">
                            <span class="star-icon">★</span>
                            <span class="rating-value">8.5</span>
                            <span class="rating-votes">12K+ <a href="#">votes</a></span>
                        </div>
                        <div class="movie-card-title">Jana-Nayagan</div>
                    </div>
                    <div class="movie-card">
                        <div class="movie-card-poster">
                        <img src="../picture/the-odyssey-et00452034-1778421685.avif">
                        </div>
                        <div class="movie-card-rating">
                            <span class="star-icon">★</span>
                            <span class="rating-value">8.1</span>
                            <span class="rating-votes">9.5K+ <a href="#">votes</a></span>
                        </div>
                        <div class="movie-card-title">The Odyssey</div>
                    </div>
                     <div class="movie-card">
                        <div class="movie-card-poster">
                        <img src="../picture/anbe-diana-et00504562-1782287373.avif">
                        </div>
                        <div class="movie-card-rating">
                            <span class="star-icon">★</span>
                            <span class="rating-value">8.1</span>
                            <span class="rating-votes">9.5K+ <a href="#">votes</a></span>
                        </div>
                        <div class="movie-card-title">Anbe-Diana</div>
                    </div>
                </div>
            </div>
        </div>


        <div class="report-section">
            <a href="#" class="report-link">Report content ›</a>
        </div>

    </div>
    </div>

    `;

  const carouselscroll = document.querySelector(".movies-carousel");
  const carouselleft = document.querySelector(".carousel-btn.left");
  const carouselright = document.querySelector(".carousel-btn.right");

  carouselleft.addEventListener("click", () => {
    carouselscroll.scrollBy({
      left: -1500,
      behavior: "smooth",
    });
    carouselright.classList.remove("notshow");
    carouselleft.classList.add("notshow");
  });

  carouselright.addEventListener("click", () => {
    carouselscroll.scrollBy({
      left: 1200,
      behavior: "smooth",
    });
    carouselright.classList.add("notshow");
    carouselleft.classList.remove("notshow");
  });

  const offerscroll = document.querySelector(".offers-container");
  const offerbtn = document.querySelector(".offers-nav-btn");

  offerbtn.addEventListener("click", () => {
    console.log("click");
    offerscroll.scrollBy({
      left: 1600,
      behavior: "smooth",
    });
  });

  const poster = document.querySelector(".poster-image");

  poster.style.backgroundImage = `url("http://127.0.0.1:8000${movie.image}")`;

  const bgPost = document.querySelector(".hero-bg-image");
  bgPost.style.backgroundImage = `url("http://127.0.0.1:8000${movie.image}")`;

  // function showMovieDetail(movie) {
  //   localStorage.setItem("selectedMovie", JSON.stringify(movie));

  //   window.location.href = "ticketbooking.html";
  // }

  const ticketbooking = document.querySelector(".book-tickets-btn");
  ticketbooking.addEventListener("click", () => {
    if (movie.category == "recommended") {
      threaterlist(movie);
    } else if (
      movie.category == "premier" ||
      movie.category == "Premiere of the week" ||
      movie.category == "Exclusives" ||
      movie.category == "New on Stream" ||
      movie.category == "Spidey All The Way!" ||
      movie.category == "Movies On Discount"
    ) {
      payment(null, movie, null, null, null, null, null);
    } else {
      threaterlist(movie);
    }
  });
}
let moviecard = document.querySelectorAll(".movies-list");
let premierdetails101 = document.querySelectorAll(".pre-list");

async function moviedetail() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");

    const movieobject = await API_URL.json();

    return movieobject;
  } catch (error) {
    console.log("movie detail error:", error.message);
  }
}

async function loadmoviedetail() {
  try {
    const movies = await moviedetail();
    movies
      .filter((item) => item.category === "recommended")
      .forEach((movie, index) => {
        const carddetail = moviecard[index];
        carddetail.addEventListener("click", () => {
          showMovieDetail(movie);
        });
      });
    movies
      .filter((item) => item.category === "premier")
      .forEach((movie, index) => {
        const prenimerdetails = premierdetails101[index];
        prenimerdetails.addEventListener("click", () => {
          showMovieDetail(movie);
        });
      });
  } catch (error) {
    console.log("Load movie detail error:", error.message);
  }
}
loadmoviedetail();

let popularContentt = document.querySelectorAll(".popular");
async function populardetail() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const popular101 = await API_URL.json();
    // console.log(popular101)
    const popularstore = [];
    popular101.forEach((item) => {
      if (item.category === "popular") {
        popularstore.push(item);
      }
    });
    return popularstore;
  } catch (error) {
    console.log("popularcontent is not loaded :", error.message);
  }
}

async function popularload() {
  try {
    const popular102 = await populardetail();
    popular102.forEach((popular, index) => {
      const popular103 = popularContentt[index];
      popular103.querySelector("img").src =
        `http://127.0.0.1:8000${popular.image}`;
      popular103.querySelector("h2").textContent = `${popular.title}`;
      popular103.querySelector("p").textContent = `${popular.genre}`;
    });
  } catch (error) {
    console.log("error in loading popular content:", error.message);
  }
}
popularload();

let gamelist = document.querySelectorAll(".sport-list");
// console.log(gamelist)
async function gamescontent() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const games101 = await API_URL.json();
    // console.log(games101)
    const gamesArray = [];
    games101.forEach((item) => {
      if (item.category === "games") {
        gamesArray.push(item);
      }
    });

    return gamesArray;
  } catch (error) {
    console.log("error in games content", error.message);
  }
}

async function gamesload() {
  try {
    const gamescontent102 = await gamescontent();

    gamescontent102.forEach((games, index) => {
      const gamesindex = gamelist[index];
      gamesindex.querySelector("img").src =
        `http://127.0.0.1:8000${games.image}`;
      gamesindex.querySelector("h2").textContent = `${games.title}`;
      gamesindex.querySelector("p").textContent = `${games.genre}`;
    });
  } catch (error) {
    console.log("error in the games load content", error.message);
  }
}
gamesload();

let fundetail = document.querySelectorAll(".fun-list");

async function funcontent() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const fun102 = await API_URL.json();
    const funarray = [];
    fun102.forEach((item) => {
      if (item.category === "fun") {
        funarray.push(item);
      }
    });
    return funarray;
  } catch (error) {
    console.log("error in content of fun", error.message);
  }
}

async function funload() {
  try {
    const fun102 = await funcontent();
    fun102.forEach((fun, index) => {
      const fun103 = fundetail[index];
      fun103.querySelector("img").src = `http://127.0.0.1:8000${fun.image}`;
      fun103.querySelector("h2").textContent = `${fun.title}`;
      fun103.querySelector("p").textContent = `${fun.genre}`;
    });
  } catch (error) {
    console.log("error in load ", error.message);
  }
}
funload();

function detailpage101(movie) {
  root.innerHTML = `
  <div class="sticky-header">
    <h1>${movie.title}</h1>
    <button class="share-btn">

    </button>
  </div>
  <div class="page-wrapper">
    <div class="left-content">
      <div class="slider-wrapper">
         <img class="slider-img" src="" alt="">
      </div>
      <div class="tags-interest">
        <div class="tags">
          <span class="tag">${movie.genre}</span>
        </div>
        <div class="interest-group">
          <button class="interested-btn">I'm Interested</button>
        </div>
      </div>
      <div class="section-title">About The Event</div>
      <p class="about-text">
        ${movie.description}
      </p>

      <div class="section-title">Artists</div>
      <div class="artist-card">
        <div class="artist-img-box"></div>
        <div class="artist-name">Artists Name</div>
        <div class="artist-role">Roles</div>
      </div>


      <div class="section-title">Gallery</div>
      <div class="gallery-grid">
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item">
        </div>
      </div>

      <div class="terms-link">
        Terms &amp; Conditions <span>&#8250;</span>
      </div>


      <div class="section-title" style="margin-top: 32px;">You May Also Like</div>
      <p class="also-like-sub">Events around you, book now</p>

      <div class="also-like-container">
        <div class="also-like-row" id="alsoLikeRow">

          <div class="event-card">
            <div class="event-card-img-box">
              <img src="../picture/et00512280-eafxjekdaq-portrait.webp" alt="">
            </div>
            <div class="event-card-title">VGP VELOCITY</div>
            <div class ="event-card-paragraph">VGP Velocity: Chennai</div>
          </div>

          <div class="event-card">
            <div class="event-card-img-box">
              <img src="../picture/et00358311-bveulktkus-portrait.webp" alt="">
            </div>
            <div class="event-card-title">Chess - Chai - Connect</div>
            <div class ="event-card-paragraph">One paramount: Chennai</div>
          </div>

          <div class="event-card">
            <div class="event-card-img-box">
              <img src="../picture/et00146630-duqqchkefz-portrait.webp" alt="">
            </div>
            <div class="event-card-title">Oru Naal - Tester shows by "Vikkals" Vikram</div>
            <div class ="event-card-paragraph">Nehru Stadinum: Chennai </div>
          </div>

          <div class="event-card">
            <div class="event-card-img-box">
              <img src="../picture/et00505524-pwlfmwlcvm-portrait.webp" alt="">
            </div>
            <div class="event-card-title">Oru Naal - Tester Shows</div>
            <div class ="event-card-paragraph">Trinity Studio:Kodambakkam</div>
          </div>

          <div class="event-card">
            <div class="event-card-img-box">
              <img src="../picture/et00401271-umvwfnplqd-portrait.webp" alt="">
            </div>
            <div class="event-card-title">Long Walks</div>
            <div class ="event-card-paragraph">Third Wave Coffee, Besant Nagar</div>
          </div>

          <div class="event-card">
            <div class="event-card-img-box">
              <img src="../picture/et00493878-cnqslpksgt-portrait.webp" alt="">
            </div>
            <div class="event-card-title">Wonderla Amusement Park</div>
            <div class ="event-card-paragraph">Woderla Amusement:Chennai</div>
          </div>

        </div>
        <button class="also-like-arrow" id="scrollRightBtn">&#8250;</button>
      </div>

    </div>

    <div class="right-card">

      <div class="info-row">
        <span class="info-icon">
          <i class="fa-regular fa-calendar"></i>
        </span>
        <span class="info-text">${movie.date}</span>
      </div>

      <div class="info-row">
        <span class="info-icon">
          <i class="fa-regular fa-clock"></i>
        </span>
        <span class="info-text">${movie.time}</span>
      </div>

      <div class="info-row">
        <span class="info-icon">
          <i class="fa-regular fa-hourglass"></i>
        </span>
        <span class="info-text">${movie.hour}</span>
      </div>

      <div class="info-row">
        <span class="info-icon">
          <i class="fa-solid fa-users"></i>
        </span>
        <span class="info-text">Age Limit - ${movie.certificate}</span>
      </div>

      <div class="info-row">
        <span class="info-icon">
          <i class="fa-solid fa-language"></i>
        </span>
        <span class="info-text">${movie.language}</span>
      </div>

      <div class="info-row">
        <span class="info-icon">
          <i class="fa-regular fa-face-smile"></i>
        </span>
        <span class="info-text">${movie.concert_type}</span>
      </div>

      <div class="location-row">
        <div class="location-left">
          <span class="info-icon">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          <span class="info-text">${movie.location}<br/>Concert Hall: Chennai</span>
        </div>
        <span class="location-nav">&#10148;</span>
      </div>

      <hr class="divider"/>

      <div class="price-book">
        <div class="price-info">
          <div class="price">${movie.price} onwards</div>
          <div class="filling">Filling Fast</div>
        </div>
        <div class="book-btn-event">Book Now</div>
      </div>

    </div>
<div class="overlay-term">
    <div class="terms">
      <div class="headingterms">
        Terms & Conditions
      </div>
      <div class="paraterms">
<div class="paraterms">

    <p>By accepting, holding or using a ticket, you acknowledge that you have read, understood, accepted and agreed to the full terms and conditions.</p><br>

    <p>• Age Limit: 5+ years</p><br>

    <p>• Rights of admission reserved with the organizer.</p><br>

    <p>• The organiser reserves the right to alter the schedule of the event without prior intimation.</p><br>

    <p>• Entry will be permitted after thorough security check and through specified entrances only.</p><br>

    <p>• Re-entry is not permitted.</p><br>

    <p>• No eatables, drinks, liquids, bottles, cans, tins, bags, lighters, match-box and flammable items are allowed inside the venue and seating area.</p><br>

    <p>• Ticket holders' belongings will be searched on entry to the Event.</p><br>

    <p>• The Event is a drug-free event. Any ticket holder found using, procuring, possessing, supplying or partaking in drugs or narcotics will be evicted immediately.</p><br>

    <p>• Organizer has the right to refuse admission or eject a ticket holder appearing to be intoxicated or behaving dangerously or inappropriately.</p><br>

    <p>• The organiser and the venue shall not be liable for difficulties caused by an unauthorised copy or reproduction of this ticket.</p><br>

    <p>• The ticket is non-refundable and cannot be exchanged, cancelled or returned once bought.</p><br>

    <p>• The ticket fee is refundable if the performance is cancelled by the organiser.</p><br>

    <p>• The ticket is not valid for entry if the security features affixed on the ticket are tampered with.</p><br>

    <p>• You agree to assume all risks, hazards and dangers arising from or relating to communicable diseases or illnesses.</p><br>

    <p>• The event is subject to force majeure conditions.</p><br>

    <p>• Your co-operation is solicited.</p><br>

    <p>• Any dispute or claim to be settled shall be subject to the exclusive jurisdiction of courts at Mumbai.</p><br>

    <p>• These terms and conditions are subject to change from time to time at the discretion of the organiser.</p><br>

    <p>• All secondary performances and line-up are subject to Artist's discretion.</p><br>

    <p>• The organiser may collect certain information such as name, e-mail address or telephone number at the time of booking, registration or payment.</p><br>

</div>
</div>
      </div>
    </div>

  </div>

    `;
  const scrollBtn = document.getElementById("scrollRightBtn");
  const row = document.getElementById("alsoLikeRow");

  scrollBtn.addEventListener("click", function () {
    row.scrollBy({ left: 400, behavior: "smooth" });
  });
  const sliderimg = document.querySelector(".slider-img");
  sliderimg.src = `http://127.0.0.1:8000${movie.image2}`;

  const termslink = document.querySelector(".terms-link");
  const overlay = document.querySelector(".overlay-term");
  termslink.addEventListener("click", () => {
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  const eventdetail = document.querySelector(".book-btn-event");
  console.log(eventdetail);
  eventdetail.addEventListener("click", () => {
    eventticket(movie);
  });
}

// let popularContentt = document.querySelectorAll(".popular");

async function detailpage2() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
    const detail2page = await API_URL.json();
    return detail2page;
  } catch (error) {
    console.log("error in the page load", error.message);
  }
}
async function detailpage2go() {
  try {
    const detail2content = await detailpage2();
    detail2content
      .filter((item) => item.category == "popular")
      .forEach((movie, index) => {
        const detail2pages = popularContentt[index];
        detail2pages.addEventListener("click", () => {
          detailpage101(movie);
        });
      });

    detail2content
      .filter((item) => item.category == "fun")
      .forEach((movie, index) => {
        const detail2pages = fundetail[index];
        detail2pages.addEventListener("click", () => {
          detailpage101(movie);
        });
      });

    detail2content
      .filter((item) => item.category == "games")
      .forEach((movie, index) => {
        const detail2page = gamelist[index];
        detail2page.addEventListener("click", () => {
          detailpage101(movie);
        });
      });
  } catch (error) {
    console.log("error in the page load", error.message);
  }
}
detailpage2go();

function moviepage2() {
  root.innerHTML = `
       <div class="movie-listing-page">
        <section class="home">
        <div class="maincontenter">
          <div class="previous">&lt</div>
        <div class="slider-contentfilter">
          
            <div class="sliderfilter">
            <img src="" alt="">
            </div>
            <div class="sliderfilter">
            <img src="" alt="">
            </div>
            <div class="sliderfilter">
            <img src="" alt="">
            </div>
    </div> 
    <div class="forward">&gt</div>
  </div>
  


  <div class="wrapper">

    <div class="filter-panel">
      <h2 class="filter-title">Filters</h2>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-first">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <span class="filter-name">Languages</span>
          <span class="filter-clear-language">Clear</span>
        </div>
        <div class="filter-tags-language">
          <button class="filter-tag">Tamil</button>
          <button class="filter-tag">English</button>
          <button class="filter-tag">Telugu</button>
          <button class="filter-tag">Hindi</button>
          <button class="filter-tag">Malayalam</button>
          <button class="filter-tag">Hinglish</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-second"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">Genres</span>
          <span class="filter-clear-genre">Clear</span>
        </div>
         <div class="filter-tags-genre">
          <button class="filter-tag">Drama</button>
          <button class="filter-tag">Action</button>
          <button class="filter-tag">Romantic</button>
          <button class="filter-tag">Thriller</button>
          <button class="filter-tag">Comdey</button>
          <button class="filter-tag">Advanture</button>
          <button class="filter-tag">Crime</button>
          <button class="filter-tag">Mystery</button>
          <button class="filter-tag">Family</button>
          <button class="filter-tag">Fantasy</button>
          <button class="filter-tag">Horror</button>
          <button class="filter-tag">Sci-Fi</button>
          <button class="filter-tag">Animation</button>
          <button class="filter-tag">Biography</button>
          <button class="filter-tag">kids</button>
          <button class="filter-tag">Period</button>
          <button class="filter-tag">Political</button>
          <button class="filter-tag">Sports</button>
          <button class="filter-tag">Supernatural</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-third"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">Format</span>
          <span class="filter-clear-format">Clear</span>
        </div>
         <div class="filter-tags-format">
          <button class="filter-tag">2D</button>
          <button class="filter-tag">EPIQ</button>
          <button class="filter-tag">3D</button>
          <button class="filter-tag">4DX</button>
          <button class="filter-tag">IMAX 2D</button>
          <button class="filter-tag">MX 4D</button>
          <button class="filter-tag">DOLBY CINEMA 2D</button>
          <button class="filter-tag">EPIQ 3D</button>
          <button class="filter-tag">HDR By Barco</button>
        </div>
      </div>

      <button class="cinema-btn">Browse by Cinemas</button>
    </div>

    <div class="main-content">
      <h1 class="page-title">Movies In Chennai</h1>

      <div class="lang-pills">
        <button class="pill">Tamil</button>
        <button class="pill">English</button>
        <button class="pill">Telugu</button>
        <button class="pill">Hindi</button>
        <button class="pill">Malayalam</button>
        <button class="pill">Hinglish</button>
      </div>

      <div class="coming-soon-bar">
      </div>

      <div class="movie-grid">

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
        <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

`;
  moviefilterload();
  const filterfirst = document.querySelector(".filter-arrow-first");
  const filtersecond = document.querySelector(".filter-arrow-second");
  const filterthird = document.querySelector(".filter-arrow-third");
  const language = document.querySelector(".filter-tags-language");
  const genre = document.querySelector(".filter-tags-genre");
  const format = document.querySelector(".filter-tags-format");

  filterfirst.addEventListener("click", () => {
    language.classList.toggle("showlist");
  });
  filtersecond.addEventListener("click", () => {
    genre.classList.toggle("showlist");
  });
  filterthird.addEventListener("click", () => {
    format.classList.toggle("showlist");
  });

  let selectedfilter = [];
  const filtercontent = document.querySelectorAll(".filter-panel .filter-tag");
  filtercontent.forEach((filter) => {
    filter.addEventListener("click", () => {
      ((filter.style.backgroundColor = "#e8476a"),
        (filter.style.color = "white"));
      const arrayy = filter.textContent.trim();
      selectedfilter.push(arrayy);
      sectionfilter();
    });
  });
  const moviefillter = document.querySelectorAll(".movie-card");
  async function sectionfilter() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/Moviefilter/");
      const filter001 = await API_URL.json();

      filter001.forEach((movie, index) => {
        const filter002 = moviefillter[index];
        // console.log(selectedfilter)
        const match = selectedfilter.every(
          (filter) =>
            movie.language.includes(filter) ||
            movie.genre.includes(filter) ||
            movie.format.includes(filter),
        );
        console.log(
          movie.title,
          movie.language,
          movie.genre,
          movie.format,
          selectedfilter,
          match,
        );

        if (match) {
          filter002.style.display = "block";
        } else {
          filter002.style.display = "none";
        }
      });
    } catch (error) {
      console.log("loading error", error.message);
    }
  }
  const removebg = document.querySelectorAll(
    ".filter-tags-language .filter-tag",
  );
  const languagetext = document.querySelectorAll(
    ".filter-tags-language .filter-tag",
  );
  const languagearray = [];
  languagetext.forEach((text) => {
    languagearray.push(text.textContent.trim());
  });
  const clearlanguage = document.querySelector(
    ".filter-head .filter-clear-language",
  );
  clearlanguage.addEventListener("click", () => {
    languagearray.forEach((text) => {
      selectedfilter = selectedfilter.filter((item) => item !== text);
    });
    removebg.forEach((filter) => {
      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });
    sectionfilter();
  });

  const removebggenre = document.querySelectorAll(
    ".filter-tags-genre .filter-tag",
  );
  const genretext = document.querySelectorAll(".filter-tags-genre .filter-tag");
  const genrearray = [];
  genretext.forEach((text) => {
    genrearray.push(text.textContent.trim());
  });
  const cleargenre = document.querySelector(".filter-head .filter-clear-genre");
  cleargenre.addEventListener("click", () => {
    genrearray.forEach((text) => {
      selectedfilter = selectedfilter.filter((item) => item !== text);
    });
    removebggenre.forEach((filter) => {
      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });
    sectionfilter();
  });

  const removebgformat = document.querySelectorAll(
    ".filter-tags-format .filter-tag",
  );
  const formattext = document.querySelectorAll(
    ".filter-tags-format .filter-tag",
  );
  const formatarray = [];
  formattext.forEach((text) => {
    formatarray.push(text.textContent.trim());
  });
  const clearformat = document.querySelector(
    ".filter-head .filter-clear-format",
  );
  clearformat.addEventListener("click", () => {
    formatarray.forEach((text) => {
      selectedfilter = selectedfilter.filter((item) => item !== text);
    });
    removebgformat.forEach((filter) => {
      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });
    sectionfilter();
  });

  const moveleft = document.querySelector(".maincontenter .previous");
  const moveright = document.querySelector(".maincontenter .forward");
  const moveslider = document.querySelector(".slider-contentfilter");
  const moveing = document.querySelectorAll(".sliderfilter");
  console.log(moveing.length);
  let currentindex = 0;
  moveleft.addEventListener("click", () => {
    currentindex--;

    if (currentindex < 0) {
      currentindex = moveing.length;
    }

    moveslider.scrollTo({
      left: currentindex * moveslider.clientWidth,
      behavior: "smooth",
    });
  });

  function movieingright() {
    currentindex++;

    if (currentindex >= moveing.length) {
      currentindex = 0;
    }

    moveslider.scrollTo({
      left: currentindex * moveslider.clientWidth,
      behavior: "smooth",
    });
  }

  setInterval(() => {
    movieingright();
  }, 3000);

  moveright.addEventListener("click", () => {
    movieingright();
  });

  const sliderfliterpage = document.querySelectorAll(".sliderfilter");
  const sliderarray = [];
  async function slidercontent() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/homepage/");
      const slider = await API_URL.json();
      slider.forEach((items) => {
        if (items.category == "slider2") {
          sliderarray.push(items);
        }
      });
      sliderarray.forEach((slider, index) => {
        const slidercontent = sliderfliterpage[index];
        slidercontent.querySelector("img").src =
          `http://127.0.0.1:8000${slider.image}`;
      });
    } catch (error) {
      console.log("error loading in slider image ", error.message);
    }
  }
  slidercontent();
}
let moviepageview = document.querySelector(".moviespage");
moviepageview.addEventListener("click", () => {
  moviepage2();
});

async function moviefilter() {
  try {
    const API_URL = await fetch("http://127.0.0.1:8000/api/Moviefilter/");
    const moviedetailfilter = await API_URL.json();
    // console.log(moviedetailfilter)
    return moviedetailfilter;
  } catch (error) {
    console.log("error in filter detail loading", error.message);
  }
}

async function moviefilterload() {
  try {
    const movies = await moviefilter();
    let moviecard101 = document.querySelectorAll(".movie-card");
    // console.log(moviecard101)
    movies.forEach((movie, index) => {
      const movieloaded = moviecard101[index];
      movieloaded.querySelector("img").src =
        `http://127.0.0.1:8000${movie.image}`;
      movieloaded.querySelector(".movie-title").textContent = movie.title;
      movieloaded.querySelector(".movie-cert").textContent = movie.certificate;
      movieloaded.querySelector(".movie-lang").textContent = movie.language;
      movieloaded.addEventListener("click", () => {
        showMovieDetail(movie);
      });
    });
  } catch (error) {
    console.log("error is the loading data", error.message);
  }
}

const backhome = document.querySelector(".logo");
backhome.addEventListener("click", function () {
  homepage();
  sliders = document.querySelectorAll(".slider");
  sliderContainer = document.querySelector(".slider-content");
  previousBtn = document.querySelector(".previous");
  forwardBtn = document.querySelector(".forward");
  recommended = document.querySelectorAll(".movies-list");
  eventlist = document.querySelectorAll(".event-list");
  premierContent = document.querySelectorAll(".pre-list");
  popularContentt = document.querySelectorAll(".popular");
  gamelist = document.querySelectorAll(".sport-list");
  fundetail = document.querySelectorAll(".fun-list");
  moviecard = document.querySelectorAll(".movies-list");
  premierdetails101 = document.querySelectorAll(".pre-list");
  loadSliderImages();
  loadSliderImagesrec();
  eventload();
  premierload();
  loadmoviedetail();
  popularload();
  gamesload();
  funload();
  detailpage2go();
});

function streamingmovies() {
  root.innerHTML = `
      <!-- Hero Slider Section -->
    <div class="slider-wrapper">

        <!-- Video Library Button -->
        <div class="video-library">
            <span class="library-icon">&#9654;</span>
            <span class="library-text">Video Library</span>
            <span class="library-arrow">&#8250;</span>
        </div>

        <!-- Left Arrow -->
        <button class="arrow left-arrow">&#8249;</button>

        <!-- Slides -->
        <div class="slides-container">

            <div class="slide active">
                <div class="slide-bg">
                    <img src="" alt="bg" class="bg-image">
                    <div class="bg-overlay"></div>
                </div>
                <div class="slide-content">
                    <div class="poster-area">
                        <img src="" alt="Minions and Monsters" class="movie-poster">
                    </div>
                    <div class="text-area">
                        <div class="premiere-badge">
                            <span class="play-icon">&#9654;</span>
                            <span class="badge-text">PREMIERE</span>
                        </div>
                        <p class="release-info">Brand new releases every Friday</p>
                        <h1 class="movie-title"></h1>
                        <p class="movie-meta"><span class="time"> 2h </span><span><span> • </span><span class="genre"> adventure </span><span> • </span><span class="certificate"> english </span></p>
                        <p class="movie-language"></p>
                        <p class="movie-desc">
                          
                        </p>
                    </div>
                </div>
            </div>


            <div class="slide">
                <div class="slide-bg">
                    <img src="" alt="bg" class="bg-image">
                    <div class="bg-overlay"></div>
                </div>
                <div class="slide-content">
                    <div class="poster-area">
                        <img src="" alt="Movie 2" class="movie-poster">
                    </div>
                    <div class="text-area">
                        <div class="premiere-badge">
                            <span class="play-icon">&#9654;</span>
                            <span class="badge-text">PREMIERE</span>
                        </div>
                        <p class="release-info">Brand new releases every Friday</p>
                        <h1 class="movie-title"></h1>
                        <p class="movie-meta"><span class="time"> 2h </span><span><span> • </span><span class="genre"> adventure </span><span> • </span><span class="certificate"> english </span></p>
                        <p class="movie-language"></p>
                        <p class="movie-desc">
                          
                        </p>
                    </div>
                </div>
            </div>


            <div class="slide">
                <div class="slide-bg">
                    <img src="" alt="bg" class="bg-image">
                    <div class="bg-overlay"></div>
                </div>
                <div class="slide-content">
                    <div class="poster-area">
                        <img src="" alt="Movie 3" class="movie-poster">
                    </div>
                    <div class="text-area">
                        <div class="premiere-badge">
                            <span class="play-icon">&#9654;</span>
                            <span class="badge-text">PREMIERE</span>
                        </div>
                        <p class="release-info">Brand new releases every Friday</p>
                        <h1 class="movie-title"></h1>
                        <p class="movie-meta"><span class="time"> 2h </span><span><span> • </span><span class="genre"> adventure </span><span> • </span><span class="certificate"> english </span></p>
                        <p class="movie-language"></p>
                        <p class="movie-desc">
                          
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <!-- Right Arrow -->
        <button class="arrow right-arrow">&#8250;</button>

    </div>

<div class="home1">
    <div class="recommed-movies">
    <div class="left101"><</div>
        <div class = heading101>
        <h1>Premiere of the week</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="movies-content">
    
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="movies-list">
            <img src="" alt="">
            <div class="hp">
                <h2></h2>
                <p></p>
            </div>
        </div>
        </div>
        <div class="right101">></div>
    </div>

    <!-- premiere -->
     <div class="premiere">
     <div class="premier">
        <div class="head">
       
            <img src="./picture/logo.avif" alt="">
            </div>
            <div class="premiere-content">
                <h1>Exclusives</h1>
                <p>Brand new releases every Friday</p>
                <div class="primi-list">
                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>

                <div class="pre-list">
                    <img src="" alt="">
                    <div class="hp">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                </div>
        </div>
        </div>
     </div>

     <!-- popular events -->
      <div class="popular-content">
       <div class="left101"><</div>
            <div class = heading101>
        <h1>New on Stream</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="popular-list">
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="popular">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
        </div>
         <div class="right101">></div>
      </div>

      <!-- Top Games & Sport Events -->
       <div class="sport-events">
       <div class="left101">></div>
            <div class = heading101>
        <h1>Spidey All The Way</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="sport-conent">
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="sport-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
        </div>
        <div class="right101">></div>
       </div>

       <!-- fun activities -->

       <div class="fun-activites">
       <div class="left101">></div>
            <div class = heading101>
        <h1>Movies On Discount</h1>
        <p>
         <a href="movie.html">See All ></a>
        </p>
        </div>
        <div class="fun-content">
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
            <div class="fun-list">
                 <img src="" alt="">
                 <div class="hp">
                <h2></h2>
                <p></p>
                </div>
            </div>
        </div>
        <div class="right101">></div>
       </div>
       </div>`;

  const slider = document.querySelectorAll(".slide");
  async function sliderimage() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/StreamingMovies/");
      const slider01 = await API_URL.json();
      // console.log(slider01)
      const imagearray = [];
      slider01.forEach((item) => {
        if (item.category === "slider") imagearray.push(item);
      });
      imagearray.forEach((movie, index) => {
        const slidercontent = slider[index];
        const bgimage = slidercontent.querySelector(".bg-image");
        const poster = slidercontent.querySelector(".movie-poster");
        poster.src = `http://127.0.0.1:8000${movie.image}`;
        bgimage.src = `http://127.0.0.1:8000${movie.backgroundimage}`;
        slidercontent.querySelector(".certificate").textContent =
          movie.certificate;
        slidercontent.querySelector(".time").textContent = movie.time;
        slidercontent.querySelector(".genre").textContent = movie.genre;
        slidercontent.querySelector(".movie-language").textContent =
          movie.language;
        slidercontent.querySelector(".movie-desc").textContent =
          movie.description;
      });
    } catch (error) {
      console.log("error in the load of the image", error.message);
    }
  }
  sliderimage();

  const slidercontiner = document.querySelector(".slides-container");
  const slidercontent = document.querySelectorAll(".slide-content");
  const leftmove = document.querySelector(".left-arrow");
  const rightmove = document.querySelector(".right-arrow");

  rightmove.addEventListener("click", () => {
    movingright();
  });

  currentindex = 0;
  function movingright() {
    currentindex++;
    if (currentindex >= slidercontent.length) {
      currentindex = 0;
    }
    slidercontiner.scrollTo({
      left: currentindex * slidercontiner.clientWidth,
      behavior: "smooth",
    });
  }

  leftmove.addEventListener("click", () => {
    currentindex--;
    if (currentindex < 0) {
      currentindex = slidercontent.length - 1;
    }
    slidercontiner.scrollTo({
      left: currentindex * slidercontiner.clientWidth,
      behavior: "smooth",
    });
  });

  setInterval(() => {
    movingright();
  }, 3000);

  const premiermovies = document.querySelectorAll(".movies-list");

  async function perimer() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/StreamingMovies/");
      const permiercontent = await API_URL.json();
      permierarray = [];
      permiercontent.forEach((item) => {
        if (item.category == "Premiere of the week") permierarray.push(item);
      });
      permierarray.forEach((movie, index) => {
        const perimermovies01 = premiermovies[index];
        perimermovies01.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        perimermovies01.querySelector("h2").textContent = movie.title;
        perimermovies01.querySelector("p").textContent = movie.genre;
        perimermovies01.addEventListener("click", () => {
          showMovieDetail(movie);
        });
      });
    } catch (error) {
      console.log("error in loading perimer content", error.message);
    }
  }
  perimer();

  const exclusive = document.querySelectorAll(".pre-list");

  async function exclusives() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/StreamingMovies/");
      const exclusivecontent = await API_URL.json();
      exclusivearray = [];
      exclusivecontent.forEach((item) => {
        if (item.category == "Exclusives") exclusivearray.push(item);
      });
      exclusivearray.forEach((movie, index) => {
        const exclusivemovies01 = exclusive[index];
        exclusivemovies01.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        exclusivemovies01.querySelector("h2").textContent = movie.title;
        exclusivemovies01.querySelector("p").textContent = movie.genre;
        exclusivemovies01.addEventListener("click", () => {
          showMovieDetail(movie);
        });
      });
    } catch (error) {
      console.log("error in loading excluxive content", error.message);
    }
  }
  exclusives();

  const stream = document.querySelectorAll(".popular");

  async function onstream() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/StreamingMovies/");
      const streamcontent = await API_URL.json();
      streamarray = [];
      streamcontent.forEach((item) => {
        if (item.category == "New on Stream") streamarray.push(item);
      });
      streamarray.forEach((movie, index) => {
        const streammovies01 = stream[index];
        streammovies01.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        streammovies01.querySelector("h2").textContent = movie.title;
        streammovies01.querySelector("p").textContent = movie.genre;
        streammovies01.addEventListener("click", () => {
          showMovieDetail(movie);
        });
      });
    } catch (error) {
      console.log("error in loading excluxive content", error.message);
    }
  }
  onstream();

  const spidey = document.querySelectorAll(".sport-list");

  async function spideyall() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/StreamingMovies/");
      const spideycontent = await API_URL.json();
      spideyarray = [];
      spideycontent.forEach((item) => {
        if (item.category == "Spidey All The Way!") spideyarray.push(item);
      });
      spideyarray.forEach((movie, index) => {
        const spideymovies01 = spidey[index];
        spideymovies01.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        spideymovies01.querySelector("h2").textContent = movie.title;
        spideymovies01.querySelector("p").textContent = movie.genre;
        spideymovies01.addEventListener("click", () => {
          showMovieDetail(movie);
        });
      });
    } catch (error) {
      console.log("error in loading excluxive content", error.message);
    }
  }
  spideyall();

  const discount = document.querySelectorAll(".fun-list");

  async function discountall() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/StreamingMovies/");
      const discountcontent = await API_URL.json();
      discountarray = [];
      discountcontent.forEach((item) => {
        if (item.category == "Movies On Discount") discountarray.push(item);
      });
      discountarray.forEach((movie, index) => {
        const discountmovies01 = discount[index];
        discountmovies01.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        discountmovies01.querySelector("h2").textContent = movie.title;
        discountmovies01.querySelector("p").textContent = movie.genre;
        discountmovies01.addEventListener("click", () => {
          showMovieDetail(movie);
        });
      });
    } catch (error) {
      console.log("error in loading excluxive content", error.message);
    }
  }
  discountall();

  const movieContent = document.querySelector(".movies-content");
  const eventContent = document.querySelector(".event-content");
  const popularContent = document.querySelector(".popular-list");
  const sportContent = document.querySelector(".sport-conent");
  const funContent = document.querySelector(".fun-content");
  const leftBtn = document.querySelector(".left101");
  const rightBtn = document.querySelector(".right101");
  const popularleftBtn = document.querySelector(".popular-content .left101");
  const popularrightBtn = document.querySelector(".popular-content .right101");
  const eventleftBtn = document.querySelector(".live-event .left101");
  const eventrightBtn = document.querySelector(".live-event .right101");
  const sportleftBtn = document.querySelector(".sport-events .left101");
  const sportrightBtn = document.querySelector(".sport-events .right101");
  const funleftBtn = document.querySelector(".fun-activites .left101");
  const funrightBtn = document.querySelector(".fun-activites .right101");

  function leftScroll() {
    movieContent.scrollBy({
      left: -1500,
      behavior: "smooth",
    });
  }

  leftBtn.addEventListener("click", function () {
    leftBtn.classList.add("notshow");
    rightBtn.classList.remove("notshow");
    leftScroll();
  });

  function rightScroll() {
    movieContent.scrollBy({
      left: 1500,
      behavior: "smooth",
    });
  }

  rightBtn.addEventListener("click", function () {
    leftBtn.classList.remove("notshow");
    rightBtn.classList.add("notshow");
    rightScroll();
  });

  function popularleftScroll() {
    popularContent.scrollBy({
      left: -1500,
      behavior: "smooth",
    });
  }

  popularleftBtn.addEventListener("click", function () {
    popularleftBtn.classList.add("notshow");
    popularrightBtn.classList.remove("notshow");
    popularleftScroll();
  });

  function popularrightScroll() {
    popularContent.scrollBy({
      left: 1500,
      behavior: "smooth",
    });
  }

  popularrightBtn.addEventListener("click", function () {
    popularleftBtn.classList.remove("notshow");
    popularrightBtn.classList.add("notshow");
    popularrightScroll();
  });

  function eventleftScroll() {
    eventContent.scrollBy({
      left: -1500,
      behavior: "smooth",
    });
  }

  eventleftBtn.addEventListener("click", function () {
    eventleftBtn.classList.add("notshow");
    eventrightBtn.classList.remove("notshow");
    eventleftScroll();
  });

  function eventrightScroll() {
    eventContent.scrollBy({
      left: 1500,
      behavior: "smooth",
    });
  }

  eventrightBtn.addEventListener("click", function () {
    eventleftBtn.classList.remove("notshow");
    eventrightBtn.classList.add("notshow");
    eventrightScroll();
  });

  function sportleftScroll() {
    sportContent.scrollBy({
      left: -1500,
      behavior: "smooth",
    });
  }

  sportleftBtn.addEventListener("click", function () {
    sportleftBtn.classList.add("notshow");
    sportrightBtn.classList.remove("notshow");
    sportleftScroll();
  });

  function sportrightScroll() {
    sportContent.scrollBy({
      left: 1500,
      behavior: "smooth",
    });
  }

  sportrightBtn.addEventListener("click", function () {
    sportleftBtn.classList.remove("notshow");
    sportrightBtn.classList.add("notshow");
    sportrightScroll();
  });

  function funleftScroll() {
    funContent.scrollBy({
      left: -1500,
      behavior: "smooth",
    });
  }

  funleftBtn.addEventListener("click", function () {
    funleftBtn.classList.add("notshow");
    funrightBtn.classList.remove("notshow");
    funleftScroll();
  });

  function funrightScroll() {
    funContent.scrollBy({
      left: 1500,
      behavior: "smooth",
    });
  }

  funrightBtn.addEventListener("click", function () {
    funleftBtn.classList.remove("notshow");
    funrightBtn.classList.add("notshow");
    funrightScroll();
  });
}
// end of streamingmovies
const streampage = document.querySelector(".streampage");
streampage.addEventListener("click", () => {
  streamingmovies();
});

function events() {
  root.innerHTML = `
  <div class="movie-listing-page">
<div class="wrapper">

    <div class="filter-panel">
      <h2 class="filter-title">Filters</h2>

        <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow filter-arrow-first">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <span class="filter-name">Categories</span>
          <span class="filter-clear filter-clear-categories">Clear</span>
        </div>
        <div class="filter-tags-categories">
          <button class="filter-tag">Workshops</button>
          <button class="filter-tag">Comdey Shows</button>
          <button class="filter-tag">Music Shows</button>
          <button class="filter-tag">Kids</button>
          <button class="filter-tag">Preformances</button>
          <button class="filter-tag">Conferences</button>
          <button class="filter-tag">Meetups</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow filter-arrow-second">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <span class="filter-name">Languages</span>
          <span class="filter-clear filter-clear-language">Clear</span>
        </div>
        <div class="filter-tags-language">
          <button class="filter-tag">Tamil</button>
          <button class="filter-tag">English</button>
          <button class="filter-tag">Telugu</button>
          <button class="filter-tag">Hindi</button>
          <button class="filter-tag">Malayalam</button>
          <button class="filter-tag">Hinglish</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow filter-arrow-third"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">Genres</span>
          <span class="filter-clear filter-clear-genre">Clear</span>
        </div>
         <div class="filter-tags-genre">
          <button class="filter-tag">Outdoor</button>
          <button class="filter-tag">Fast Filling</button>
          <button class="filter-tag">Must Attend</button>
          <button class="filter-tag">Unmissable Events</button>
          <button class="filter-tag">Kids Allowed</button>
          <button class="filter-tag">Online Streaming</button>
          <button class="filter-tag">Kids Activities</button>
          <button class="filter-tag">New Year Parties</button>
          <button class="filter-tag">Family</button>

        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow filter-arrow-four"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">More Filters</span>
          <span class="filter-clear filter-clear-morefilter">Clear</span>
        </div>
         <div class="filter-tags-morefilter">
          <button class="filter-tag">Outdoor Events</button>
          <button class="filter-tag">Fast Filling</button>
          </div>
        </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow filter-arrow-five"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">Price</span>
          <span class="filter-clear-price">Clear</span>
        </div>
         <div class="filter-tags-price">
          <button class="filter-tag">Free</button>
          <button class="filter-tag">0 - 500</button>
          <button class="filter-tag">501 - 2000</button>
          <button class="filter-tag">Above 2000</button>
        </div>
      </div>

      <button class="cinema-btn">Browse by Cinemas</button>
    </div>

    <div class="main-content">
      <h1 class="page-title">Events In Chennai</h1>

      <div class="lang-pills">
        <button class="pill">Workshops</button>
        <button class="pill">Comdey Shows</button>
        <button class="pill">Music Shows</button>
        <button class="pill">Kids</button>
        <button class="pill">Performances</button>
        <button class="pill">Conferences</button>
      </div>

      <div class="coming-soon-bar">
      </div>

      <div class="movie-grid">

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
        <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
  `;
  const moviecard = document.querySelectorAll(".movie-card");

  async function moviecards() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/EventFilter/");
      const moviedata = await API_URL.json();
      moviedata.forEach((movie, index) => {
        const eventcard = moviecard[index];
        eventcard.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        eventcard.querySelector(".movie-title").textContent = movie.title;
        eventcard.querySelector(".movie-cert").textContent = movie.certificate;
        eventcard.querySelector(".movie-lang").textContent = movie.language;
        eventcard.addEventListener("click", () => {
          detailpage101(movie);
        });
      });
    } catch (error) {
      console.log("error in loading event content", error.message);
    }
  }
  moviecards();

  const slidercards = document.querySelectorAll(".sliderfilter");
  async function silder() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/EventFilter/");
      const sliderdata = await API_URL.json();
      sliderarray = [];
      sliderdata.forEach((item) => {
        if (item.category == "slider") sliderarray.push(item);
      });
      sliderarray.forEach((movie, index) => {
        const slidercard = slidercards[index];
        slidercard.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
      });
    } catch (error) {
      console.log("error in loading event content", error.message);
    }
  }
  silder();

  const filterfirst = document.querySelector(".filter-arrow-first");
  const filtersecond = document.querySelector(".filter-arrow-second");
  const filterthird = document.querySelector(".filter-arrow-third");
  const filterfour = document.querySelector(".filter-arrow-four");
  const filterfive = document.querySelector(".filter-arrow-five");
  const category = document.querySelector(".filter-tags-categories");
  const language = document.querySelector(".filter-tags-language");
  const morefilter = document.querySelector(".filter-tags-morefilter");
  const price = document.querySelector(".filter-tags-price");
  const genre = document.querySelector(".filter-tags-genre");

  filterfirst.addEventListener("click", () => {
    category.classList.toggle("showlist");
  });
  filtersecond.addEventListener("click", () => {
    language.classList.toggle("showlist");
  });
  filterthird.addEventListener("click", () => {
    genre.classList.toggle("showlist");
  });
  filterfour.addEventListener("click", () => {
    console.log("click");
    morefilter.classList.toggle("showlist");
  });
  filterfive.addEventListener("click", () => {
    price.classList.toggle("showlist");
  });

  let eventtagarray = [];
  let selectedfilter = document.querySelectorAll(".filter-panel .filter-tag");

  selectedfilter.forEach((filter) => {
    filter.addEventListener("click", () => {
      ((filter.style.backgroundColor = "#e8476a"),
        (filter.style.color = "white"));
      const tag = filter.textContent.trim();
      eventtagarray.push(tag);
      console.log(eventtagarray);
      eventfilter();
    });
    eventfilter();
  });

  async function eventfilter() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/EventFilter/");
      const eventfilcont = await API_URL.json();
      eventfilcont.forEach((movie, index) => {
        const eventtag = moviecard[index];
        const match = eventtagarray.every(
          (filter) =>
            movie.category?.includes(filter) ||
            movie.language?.includes(filter) ||
            movie.genre?.includes(filter) ||
            movie.morefilter?.includes(filter) ||
            movie.price?.includes(filter),
        );

        if (match) {
          eventtag.style.display = "block";
        } else {
          eventtag.style.display = "none";
        }
      });
    } catch (error) {
      console.log("error in selecting the tag", error.message);
    }
  }

  const clearcategory = document.querySelector(
    ".filter-head .filter-clear-categories",
  );

  clearcategory.addEventListener("click", () => {
    const categorytags = document.querySelectorAll(
      ".filter-tags-categories .filter-tag",
    );
    categorytags.forEach((filter) => {
      const tag = filter.textContent.trim();
      eventtagarray = eventtagarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearlanguage = document.querySelector(
    ".filter-head .filter-clear-language",
  );

  clearlanguage.addEventListener("click", () => {
    const languagetags = document.querySelectorAll(
      ".filter-tags-language .filter-tag",
    );
    languagetags.forEach((filter) => {
      const tag = filter.textContent.trim();
      eventtagarray = eventtagarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const cleargenre = document.querySelector(".filter-head .filter-clear-genre");

  cleargenre.addEventListener("click", () => {
    const genretags = document.querySelectorAll(
      ".filter-tags-genre .filter-tag",
    );
    genretags.forEach((filter) => {
      const tag = filter.textContent.trim();
      eventtagarray = eventtagarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearmorefilter = document.querySelector(
    ".filter-head .filter-clear-morefilter",
  );

  clearmorefilter.addEventListener("click", () => {
    const morefiltertags = document.querySelectorAll(
      ".filter-tags-morefilter .filter-tag",
    );
    morefiltertags.forEach((filter) => {
      const tag = filter.textContent.trim();
      eventtagarray = eventtagarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearprice = document.querySelector(".filter-head .filter-clear-price");

  clearprice.addEventListener("click", () => {
    const pricetags = document.querySelectorAll(
      ".filter-tags-price .filter-tag",
    );
    pricetags.forEach((filter) => {
      const tag = filter.textContent.trim();
      eventtagarray = eventtagarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });
}
// end of the events

const eventpage = document.querySelector(".eventspage");
eventpage.addEventListener("click", () => {
  events();
});

function plays() {
  root.innerHTML = `

   <div class="movie-listing-page">
          <div class="wrapper">

    <div class="filter-panel">
      <h2 class="filter-title">Filters</h2>

        <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-first">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <span class="filter-name">Plays Type</span>
          <span class="filter-clear-categories">Clear</span>
        </div>
        <div class="filter-tags-playcategories">
          <button class="filter-tag">Theatre</button>
          <button class="filter-tag">Storytelling</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-second">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <span class="filter-name">Languages</span>
          <span class="filter-clear-language">Clear</span>
        </div>
        <div class="filter-tags-language">
          <button class="filter-tag">Tamil</button>
          <button class="filter-tag">English</button>
          <button class="filter-tag">Telugu</button>
          <button class="filter-tag">Hindi</button>
          <button class="filter-tag">Malayalam</button>
          <button class="filter-tag">Hinglish</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-third"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">Genres</span>
          <span class="filter-clear-genre">Clear</span>
        </div>
         <div class="filter-tags-playgenre">
          <button class="filter-tag">Drama</button>
          <button class="filter-tag">Comdey</button>
          <button class="filter-tag">Adventure</button>
          <button class="filter-tag">Classic</button>
          <button class="filter-tag">Contemporary</button>
          <button class="filter-tag">Musical</button>
          <button class="filter-tag">Adaptation</button>
          <button class="filter-tag">Biograph</button>
          <button class="filter-tag">Fantasy</button>
          <button class="filter-tag">Regional</button>
        </div>
      </div>

        <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-four"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">More Filters</span>
          <span class="filter-clear-morefilter">Clear</span>
        </div>
         <div class="filter-tags-morefilter">
          <button class="filter-tag">Outdoor Events</button>
          <button class="filter-tag">Fast Filling</button>
          </div>
        </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-five"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">price</span>
          <span class="filter-clear-price">Clear</span>
        </div>
         <div class="filter-tags-price">
          <button class="filter-tag">Free</button>
          <button class="filter-tag">0 - 500</button>
          <button class="filter-tag">501 - 2000</button>
          <button class="filter-tag">Above 2000</button>
        </div>
      </div>

      <button class="cinema-btn">Browse by Cinemas</button>
    </div>

    <div class="main-content">
      <h1 class="page-title">Plays In Chennai</h1>

      <div class="lang-pills">
        <button class="pill">Workshops</button>
        <button class="pill">Comdey Shows</button>
        <button class="pill">Music Shows</button>
        <button class="pill">Kids</button>
        <button class="pill">Performances</button>
        <button class="pill">Conferences</button>
      </div>

      <div class="coming-soon-bar">
      </div>

      <div class="movie-grid">

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
        <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

  `;
  const moviecard = document.querySelectorAll(".movie-card");

  async function moviecards() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/PlaysFilter/");
      const moviedata = await API_URL.json();
      moviedata.forEach((movie, index) => {
        const eventcard = moviecard[index];
        eventcard.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        eventcard.querySelector(".movie-title").textContent = movie.title;
        eventcard.querySelector(".movie-cert").textContent = movie.certificate;
        eventcard.querySelector(".movie-lang").textContent = movie.language;
        eventcard.addEventListener("click", () => {
          detailpage101(movie);
        });
      });
    } catch (error) {
      console.log("error in loading event content", error.message);
    }
  }
  moviecards();

  const filterfirst = document.querySelector(".filter-arrow-first");
  const filtersecond = document.querySelector(".filter-arrow-second");
  const filterthird = document.querySelector(".filter-arrow-third");
  const filterfour = document.querySelector(".filter-arrow-four");
  const filterfive = document.querySelector(".filter-arrow-five");
  const category = document.querySelector(".filter-tags-categories");
  const language = document.querySelector(".filter-tags-language");
  const morefilter = document.querySelector(".filter-tags-morefilter");
  const price = document.querySelector(".filter-tags-price");
  const genre2 = document.querySelector(".filter-tags-playgenre");
  const genre1 = document.querySelector(".filter-tags-genre");
  const category2 = document.querySelector(".filter-tags-playcategories");

  filterfirst.addEventListener("click", () => {
    category.classList.toggle("showlist");
  });

  filterfirst.addEventListener("click", () => {
    category2.classList.toggle("showlist");
  });

  filtersecond.addEventListener("click", () => {
    language.classList.toggle("showlist");
  });
  filterthird.addEventListener("click", () => {
    console.log("click");
    genre2.classList.toggle("showlist");
  });

  filterthird.addEventListener("click", () => {
    console.log("click");
    genre1.classList.toggle("showlist");
  });

  filterfour.addEventListener("click", () => {
    console.log("click");
    morefilter.classList.toggle("showlist");
  });
  filterfive.addEventListener("click", () => {
    price.classList.toggle("showlist");
  });

  let playarray = [];
  let selectedfilter = document.querySelectorAll(".filter-panel .filter-tag");

  selectedfilter.forEach((filter) => {
    filter.addEventListener("click", () => {
      ((filter.style.backgroundColor = "#e8476a"),
        (filter.style.color = "white"));
      const tag = filter.textContent.trim();
      playarray.push(tag);
      eventfilter();
    });
  });

  async function eventfilter() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/PlaysFilter/");
      const Playfilcont = await API_URL.json();
      Playfilcont.forEach((movie, index) => {
        const playtag = moviecard[index];
        const match = playarray.every(
          (filter) =>
            movie.category?.includes(filter) ||
            movie.language?.includes(filter) ||
            movie.genre?.includes(filter) ||
            movie.morefilter?.includes(filter) ||
            movie.price?.includes(filter),
        );

        if (match) {
          playtag.style.display = "block";
        } else {
          playtag.style.display = "none";
        }
      });
    } catch (error) {
      console.log("error in selecting the tag", error.message);
    }
  }

  const clearcategory = document.querySelector(
    ".filter-head .filter-clear-categories",
  );

  clearcategory.addEventListener("click", () => {
    const categorytags = document.querySelectorAll(
      ".filter-tags-playcategories .filter-tag",
    );
    categorytags.forEach((filter) => {
      const tag = filter.textContent.trim();
      playarray = playarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearlanguage = document.querySelector(
    ".filter-head .filter-clear-language",
  );

  clearlanguage.addEventListener("click", () => {
    const languagetags = document.querySelectorAll(
      ".filter-tags-language .filter-tag",
    );
    languagetags.forEach((filter) => {
      const tag = filter.textContent.trim();
      playarray = playarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const cleargenre = document.querySelector(".filter-head .filter-clear-genre");

  cleargenre.addEventListener("click", () => {
    const genretags = document.querySelectorAll(
      ".filter-tags-playgenre .filter-tag",
    );
    genretags.forEach((filter) => {
      const tag = filter.textContent.trim();
      playarray = playarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearmorefilter = document.querySelector(
    ".filter-head .filter-clear-morefilter",
  );

  clearmorefilter.addEventListener("click", () => {
    const morefiltertags = document.querySelectorAll(
      ".filter-tags-morefilter .filter-tag",
    );
    morefiltertags.forEach((filter) => {
      const tag = filter.textContent.trim();
      playarray = playarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearprice = document.querySelector(".filter-head .filter-clear-price");

  clearprice.addEventListener("click", () => {
    const pricetags = document.querySelectorAll(
      ".filter-tags-price .filter-tag",
    );
    pricetags.forEach((filter) => {
      const tag = filter.textContent.trim();
      playarray = playarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });
}

const playpage = document.querySelector(".catgorypage");
playpage.addEventListener("click", () => {
  plays();
});

function sportpage() {
  root.innerHTML = `
  <div class="movie-listing-page">
    <div class="wrapper">

    <div class="filter-panel">
      <h2 class="filter-title">Filters</h2>

        <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-first">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <span class="filter-name">Sports Type</span>
          <span class="filter-clear-categories">Clear</span>
        </div>
        <div class="filter-tags-sportcategories">
          <button class="filter-tag">Runing</button>
          <button class="filter-tag">Chess</button>
          <button class="filter-tag">Baddminton</button>

        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-second"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">More Filters</span>
          <span class="filter-clear-morefilter">Clear</span>
        </div>
         <div class="filter-tags-sportmorefilter">
          <button class="filter-tag">Outdoor Events</button>
          <button class="filter-tag">Fast Filling</button>

        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-third"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">Price</span>
          <span class="filter-clear-price">Clear</span>
        </div>
         <div class="filter-tags-sportprice">
          <button class="filter-tag">Free</button>
          <button class="filter-tag">0 - 500</button>
          <button class="filter-tag">501 - 2000</button>
          <button class="filter-tag">Above 2000</button>
        </div>
      </div>

      <button class="cinema-btn">Browse by Cinemas</button>
    </div>

    <div class="main-content">
      <h1 class="page-title">Sports In Chennai</h1>

      <div class="lang-pills">
        <button class="pill">Runing</button>
        <button class="pill">Chess</button>
        <button class="pill">Badminton</button>

      </div>

      <div class="coming-soon-bar">
      </div>

      <div class="movie-grid">

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
        <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>`;
  const moviecard = document.querySelectorAll(".movie-card");

  async function moviecards() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/SportFilter/");
      const moviedata = await API_URL.json();
      moviedata.forEach((movie, index) => {
        const eventcard = moviecard[index];
        eventcard.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        eventcard.querySelector(".movie-title").textContent = movie.title;
        eventcard.querySelector(".movie-cert").textContent = movie.certificate;
        eventcard.querySelector(".movie-lang").textContent = movie.language;
        eventcard.addEventListener("click", () => {
          detailpage101(movie);
        });
      });
    } catch (error) {
      console.log("error in loading event content", error.message);
    }
  }
  moviecards();

  const filterfirst = document.querySelector(".filter-arrow-first");
  const filtersecond = document.querySelector(".filter-arrow-second");
  const filterthird = document.querySelector(".filter-arrow-third");
  const category = document.querySelector(".filter-tags-sportcategories");
  const morefilter = document.querySelector(".filter-tags-sportmorefilter");
  const price = document.querySelector(".filter-tags-sportprice");

  filterfirst.addEventListener("click", () => {
    category.classList.toggle("showlist");
  });

  filtersecond.addEventListener("click", () => {
    console.log("click");
    morefilter.classList.toggle("showlist");
  });
  filterthird.addEventListener("click", () => {
    price.classList.toggle("showlist");
  });

  let sportarray = [];
  let selectedfilter = document.querySelectorAll(".filter-panel .filter-tag");

  selectedfilter.forEach((filter) => {
    filter.addEventListener("click", () => {
      ((filter.style.backgroundColor = "#e8476a"),
        (filter.style.color = "white"));
      const tag = filter.textContent.trim();
      sportarray.push(tag);
      eventfilter();
    });
  });

  async function eventfilter() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/SportFilter/");
      const sportfilcont = await API_URL.json();
      sportfilcont.forEach((movie, index) => {
        const sporttag = moviecard[index];
        const match = sportarray.every(
          (filter) =>
            movie.category?.includes(filter) ||
            movie.language?.includes(filter) ||
            movie.genre?.includes(filter) ||
            movie.morefilter?.includes(filter) ||
            movie.price?.includes(filter),
        );

        if (match) {
          sporttag.style.display = "block";
        } else {
          sporttag.style.display = "none";
        }
      });
    } catch (error) {
      console.log("error in selecting the tag", error.message);
    }
  }

  const clearcategory = document.querySelector(
    ".filter-head .filter-clear-categories",
  );

  clearcategory.addEventListener("click", () => {
    const categorytags = document.querySelectorAll(
      ".filter-tags-sportcategories .filter-tag",
    );
    categorytags.forEach((filter) => {
      const tag = filter.textContent.trim();
      sportarray = sportarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearmorefilter = document.querySelector(
    ".filter-head .filter-clear-morefilter",
  );

  clearmorefilter.addEventListener("click", () => {
    const morefiltertags = document.querySelectorAll(
      ".filter-tags-sportmorefilter .filter-tag",
    );
    morefiltertags.forEach((filter) => {
      const tag = filter.textContent.trim();
      sportarray = sportarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearprice = document.querySelector(".filter-head .filter-clear-price");

  clearprice.addEventListener("click", () => {
    const pricetags = document.querySelectorAll(
      ".filter-tags-sportprice .filter-tag",
    );
    pricetags.forEach((filter) => {
      const tag = filter.textContent.trim();
      sportarray = sportarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });
}
const sport = document.querySelector(".sportpage");
sport.addEventListener("click", () => {
  sportpage();
});

function activitiespage() {
  root.innerHTML = `
   <div class="movie-listing-page">
  <div class="wrapper">

    <div class="filter-panel">
      <h2 class="filter-title">Filters</h2>

        <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-first">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
          <span class="filter-name">Categories</span>
          <span class="filter-clear-categories">Clear</span>
        </div>
        <div class="filter-tags-activitycategories">
          <button class="filter-tag">Tourist Attractions</button>
          <button class="filter-tag">Amusement Parks</button>
          <button class="filter-tag">Unique Tours</button>
          <button class="filter-tag">Gaming</button>
          <button class="filter-tag">Adventure</button>
          <button class="filter-tag">Food and Drinks</button>
          <button class="filter-tag">Antiques,Heritage,Museums</button>
          <button class="filter-tag">Monuments</button>
          <button class="filter-tag">Festivals</button>
          <button class="filter-tag">Navratri Celebrations</button>
          <button class="filter-tag">Parties</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-second"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">More Filters</span>
          <span class="filter-clear-morefilter">Clear</span>
        </div>
         <div class="filter-tags-activitymorefilter">
          <button class="filter-tag">Outdoor</button>
          <button class="filter-tag">Kids Allowed</button>
          <button class="filter-tag">Monsoon Offer</button>
          <button class="filter-tag">Must Attend</button>
          <button class="filter-tag">Kids Activites</button>
          <button class="filter-tag">Fast Filling</button>
          <button class="filter-tag">In-Maill Gaming Zone</button>
          <button class="filter-tag">Onam Celebrations</button>
          <button class="filter-tag">Video Games</button>

        </div>
      </div>

      <div class="filter-section">
        <div class="filter-head">
          <span class="filter-arrow-third"><i class="fa-solid fa-chevron-down"></i></span>
          <span class="filter-name">Price</span>
          <span class="filter-clear-price">Clear</span>
        </div>
         <div class="filter-tags-activityprice">
          <button class="filter-tag">Free</button>
          <button class="filter-tag">0 - 500</button>
          <button class="filter-tag">501 - 2000</button>
          <button class="filter-tag">Above 2000</button>
        </div>
      </div>

      <button class="cinema-btn">Browse by Cinemas</button>
    </div>

    <div class="main-content">
      <h1 class="page-title">Activties In Chennai</h1>

      <div class="lang-pills">
        <button class="pill">Tourist Attractions</button>
        <button class="pill">Amusement Parks</button>
        <button class="pill">Unique Tours</button>
        <button class="pill">Gaming</button>
        <button class="pill">Advanture</button>
        <button class="pill">Antiques,Heritage,Museums</button>
        <button class="pill">Monuments</button>
        <button class="pill">Festivals</button>
        <button class="pill">Navratri Celebration</button>
        <button class="pill">parties</button>
      </div>

      <div class="coming-soon-bar">
      </div>

      <div class="movie-grid">

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
        <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

         <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

        <div class="movie-card">
          <div class="movie-img-box">
            <img src="" alt="">
          </div>
          <div class="movie-info">
            <h3 class="movie-title"></h3>
            <p class="movie-cert"></p>
            <p class="movie-lang"></p>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

  `;
  const moviecard = document.querySelectorAll(".movie-card");

  async function moviecards() {
    try {
      const API_URL = await fetch(
        "http://127.0.0.1:8000/api/ActivitiesFilter/",
      );
      const moviedata = await API_URL.json();
      moviedata.forEach((movie, index) => {
        const eventcard = moviecard[index];
        eventcard.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        eventcard.querySelector(".movie-title").textContent = movie.title;
        eventcard.querySelector(".movie-cert").textContent = movie.certificate;
        eventcard.querySelector(".movie-lang").textContent = movie.language;
        eventcard.addEventListener("click", () => {
          detailpage101(movie);
        });
      });
    } catch (error) {
      console.log("error in loading event content", error.message);
    }
  }
  moviecards();

  const filterfirst = document.querySelector(".filter-arrow-first");
  const filtersecond = document.querySelector(".filter-arrow-second");
  const filterthird = document.querySelector(".filter-arrow-third");
  const category = document.querySelector(".filter-tags-activitycategories");
  const morefilter = document.querySelector(".filter-tags-activitymorefilter");
  const price = document.querySelector(".filter-tags-activityprice");

  filterfirst.addEventListener("click", () => {
    category.classList.toggle("showlist");
  });

  filtersecond.addEventListener("click", () => {
    morefilter.classList.toggle("showlist");
  });
  filterthird.addEventListener("click", () => {
    price.classList.toggle("showlist");
  });

  let activityarray = [];
  let selectedfilter = document.querySelectorAll(".filter-panel .filter-tag");

  selectedfilter.forEach((filter) => {
    filter.addEventListener("click", () => {
      ((filter.style.backgroundColor = "#e8476a"),
        (filter.style.color = "white"));
      const tag = filter.textContent.trim();
      activityarray.push(tag);
      eventfilter();
    });
  });

  async function eventfilter() {
    try {
      const API_URL = await fetch(
        "http://127.0.0.1:8000/api/ActivitiesFilter/",
      );
      const activityfilcont = await API_URL.json();
      activityfilcont.forEach((movie, index) => {
        const activitytag = moviecard[index];
        const match = activityarray.every(
          (filter) =>
            movie.category?.includes(filter) ||
            movie.language?.includes(filter) ||
            movie.genre?.includes(filter) ||
            movie.morefilter?.includes(filter) ||
            movie.price?.includes(filter),
        );

        if (match) {
          activitytag.style.display = "block";
        } else {
          activitytag.style.display = "none";
        }
      });
    } catch (error) {
      console.log("error in selecting the tag", error.message);
    }
  }

  const clearcategory = document.querySelector(
    ".filter-head .filter-clear-categories",
  );

  clearcategory.addEventListener("click", () => {
    const categorytags = document.querySelectorAll(
      ".filter-tags-activitycategories .filter-tag",
    );
    categorytags.forEach((filter) => {
      const tag = filter.textContent.trim();
      activityarray = activityarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearmorefilter = document.querySelector(
    ".filter-head .filter-clear-morefilter",
  );

  clearmorefilter.addEventListener("click", () => {
    const morefiltertags = document.querySelectorAll(
      ".filter-tags-activitymorefilter .filter-tag",
    );
    morefiltertags.forEach((filter) => {
      const tag = filter.textContent.trim();
      activityarray = activityarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });

  const clearprice = document.querySelector(".filter-head .filter-clear-price");

  clearprice.addEventListener("click", () => {
    const pricetags = document.querySelectorAll(
      ".filter-tags-activityprice .filter-tag",
    );
    pricetags.forEach((filter) => {
      const tag = filter.textContent.trim();
      activityarray = activityarray.filter((item) => item !== tag);

      filter.style.backgroundColor = "white";
      filter.style.color = "#e8476a";
    });

    eventfilter();
  });
}

const activity = document.querySelector(".activitiespage");
activity.addEventListener("click", () => {
  activitiespage();
});

function threaterlist(movie) {
  root.innerHTML = `
      <div class="theater-page-wrapper">

        <!-- Movie Header -->
        <div class="movie-header">
            <h1 class="movie-title">${movie.title} - (${movie.language}) </h1>
            <div class="movie-tags">
                <span class="tag">Movie runtime:${movie.time}</span>
                <span class="tag">${movie.certificate}</span>
                <span class="tag">${movie.genre}</span>
            </div>
        </div>

        <!-- Sticky Bar -->
        <div class="sticky-bar">

            <!-- Date Selector -->
            <div class="date-selector">
                <div class="date-item active">
                    <span class="day">MON</span>
                    <span class="date">31</span>
                    <span class="month">AUG</span>
                </div>
                <div class="date-item">
                    <span class="day">TUE</span>
                    <span class="date">01</span>
                    <span class="month">SEP</span>
                </div>
                <div class="date-item">
                    <span class="day">WED</span>
                    <span class="date">02</span>
                    <span class="month">SEP</span>
                </div>
                <div class="date-item">
                    <span class="day">THU</span>
                    <span class="date">03</span>
                    <span class="month">SEP</span>
                </div>
                <div class="date-item">
                    <span class="day">FRI</span>
                    <span class="date">04</span>
                    <span class="month">SEP</span>
                </div>
                <div class="date-item">
                    <span class="day">SAT</span>
                    <span class="date">05</span>
                    <span class="month">SEP</span>
                </div>
                <div class="date-item">
                    <span class="day">SUN</span>
                    <span class="date">06</span>
                    <span class="month">SEP</span>
                </div>
            </div>

            <!-- Filters -->
            <div class="filters">
                <div class="filter-btn lang-btn active-filter">Tamil - 2D</div>
                <div class="filter-btn pricerange">Price Range <span class="arrow01"><i class="fa-solid fa-chevron-down"></i></span>
                    <div class="pricefilter">
                    <div class="price01">$0 - $100 <span><label for="price"><input type="checkbox"></label></span></div>
                    <div class="price01">$100 - $290 <span><label for="price"><input type="checkbox"></label></span></div>
                    </div>
                </div>
                <div class="filter-btn specialformat">Special Formats <span class="arrow01"><i class="fa-solid fa-chevron-down"></i></span>
                     <div class="formatfilter">
                    <div class="format">Dolby Atoms <span><label for="format"><input type="checkbox"></label></span></div>
                    <div class="format">4K <span><label for="format"><input type="checkbox"></label></span></div>
                    <div class="format">Dolby <span><label for="format"><input type="checkbox"></label></span></div>
                    <div class="format">Laser<span><label for="format"><input type="checkbox"></label></span></div>
                    </div>
                </div>
                <div class="filter-btn other">Other Filters <span class="arrow01"><i class="fa-solid fa-chevron-down"></i></span>
                    <div class="otherfilter">
                    <div class="otherch">cancellable <span><label for="format"><input type="checkbox"></label></span></div>
                    </div>
                </div>
                <div class="filter-btn preferred">Preferred Time <span class="arrow01"><i class="fa-solid fa-chevron-down"></i></span>
                     <div class="preferredtime">
                    <div class="time">Moring <span><label for="format"><input type="checkbox"></label></span></div>
                    <div class="time">Afternoon <span><label for="format"><input type="checkbox"></label></span></div>
                    <div class="time">Evening <span><label for="format"><input type="checkbox"></label></span></div>
                    <div class="time">Night<span><label for="format"><input type="checkbox"></label></span></div>
                    </div>
                </div>
                <div class="filter-btn sortby">Sort By <span class="arrow01"><i class="fa-solid fa-chevron-down"></i></span></div>
                <div class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>

        </div>

        <!-- Legend -->
        <div class="legend">
            <span class="legend-item">
                <span class="dot green"></span> AVAILABLE
            </span>
            <span class="legend-item">
                <span class="dot orange"></span> FAST FILLING
            </span>
        </div>

        <!-- Cinema List -->
        <div class="cinema-list">

            <!-- Cinema Card 1 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo rakki">
                            <img src="" alt="Rakki Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                                <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
               
                <div class="showtime-row">
                   
                </div>
            </div>

            <!-- Cinema Card 2 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo rakki">
                            <img src="" alt="Rakki Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                                <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
                
                <div class="showtime-row">
                    
                </div>
            </div>

            <!-- Cinema Card 3 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo rohini">
                            <img src="" alt="Rohini Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                                <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                   
                </div>
            </div>

            <!-- Cinema Card 4 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo vijay">
                            <img src="" alt="Vijay Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                                <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status cancel-available"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                    
                </div>
            </div>

            <!-- Cinema Card 5 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo meenakshi">
                            <img src="" alt="Meenakshi Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                                <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status">Non-cancellable</div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                   
                </div>
            </div>

                        <!-- Cinema Card 5 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo meenakshi">
                            <img src="" alt="Meenakshi Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                                <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                    
                </div>
            </div>

                        <!-- Cinema Card 5 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo meenakshi">
                            <img src="" alt="Meenakshi Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                              <span class = cine-name></span>
                               <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                    
                </div>
            </div>


                                    <!-- Cinema Card 5 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo meenakshi">
                            <img src="" alt="Meenakshi Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                              <span class = cine-name></span>
                               <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                    
                </div>
            </div>


                        <!-- Cinema Card 5 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo meenakshi">
                            <img src="" alt="Meenakshi Logo">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                               <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                    
                </div>
            </div>

            <!-- Cinema Card 6 -->
            <div class="cinema-card">
                <div class="cinema-top">
                    <div class="cinema-left">
                        <div class="cinema-logo cinepolis">
                            <img src="">
                        </div>
                        <div class="cinema-info">
                            <div class="cinema-name">
                                <span class = cine-name></span>
                                <span class = cine-location></span>
                                <span class="info-icon">&#9432;</span>
                            </div>
                            <div class="cancel-status"></div>
                        </div>
                    </div>
                    <div class="heart-icon">&#9825;</div>
                </div>
            
                <div class="showtime-row">
                    
                </div>
            </div>

        </div>
    </div>

  `;
  const pricerange = document.querySelector(".pricerange .arrow01");
  const pricefilter = document.querySelector(".pricefilter");
  pricerange.addEventListener("click", () => {
    console.log("click");
    pricefilter.classList.toggle("show");
  });

  const specialformat = document.querySelector(".specialformat .arrow01");
  const formatfilter = document.querySelector(".formatfilter");
  specialformat.addEventListener("click", () => {
    console.log("click");
    formatfilter.classList.toggle("show");
  });

  const otherformat = document.querySelector(".other .arrow01");
  const otherfilter = document.querySelector(".otherfilter");
  otherformat.addEventListener("click", () => {
    console.log("click");
    otherfilter.classList.toggle("show");
  });

  const preferredformat = document.querySelector(".preferred .arrow01");
  const preferredtime = document.querySelector(".preferredtime");
  preferredformat.addEventListener("click", () => {
    console.log("click");
    preferredtime.classList.toggle("show");
  });

  const thearter = document.querySelectorAll(".cinema-card");

  async function theaterdetail() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/TheaterList/");
      const show_api = await fetch("http://127.0.0.1:8000/api/ShowTime/");
      const jsonformat = await API_URL.json();
      const showjson = await show_api.json();
      jsonformat.forEach((movie, index) => {
        const cenimacard = thearter[index];
        cenimacard.querySelector("img").src =
          `http://127.0.0.1:8000${movie.image}`;
        cenimacard.querySelector(".cine-name").textContent = movie.name;
        cenimacard.querySelector(".cine-location").textContent = movie.location;
        cenimacard.querySelector(".cancel-status").textContent = movie.cancel;
        const showtimeRow = cenimacard.querySelector(".showtime-row");
        showtimeRow.innerHTML = "";
        showjson.forEach((show) => {
          if (show.theatre == movie.id) {
            showtimeRow.innerHTML += `
              <div class="showtime-btn">
                <span class="show-time">${show.time}</span>
                <span class="show-screen">${show.specialformat}</span></div>
                    `;
          }
        });
      });
    } catch (error) {
      console.log("error in loading in theaterlist", error.message);
    }
  }

  theaterdetail();

  const showfilter = [];

  function updateFilter(type, value, checkbox) {
    if (checkbox.checked) {
      showfilter.push({
        type: type,
        value: value,
      });
    } else {
      const index = showfilter.findIndex((filter) => {
        return filter.type === type && filter.value === value;
      });

      if (index !== -1) {
        showfilter.splice(index, 1);
      }
    }

    console.log(showfilter);

    showsfilter();
  }

  const pricefil = document.querySelectorAll(".pricefilter .price01");

  pricefil.forEach((price) => {
    price.addEventListener("click", () => {
      const checkbox = price.querySelector("input");

      updateFilter("price", price.textContent.trim(), checkbox);
    });
  });
  const formatfil = document.querySelectorAll(".formatfilter .format");

  formatfil.forEach((format) => {
    format.addEventListener("click", () => {
      const checkbox = format.querySelector("input");

      updateFilter("format", format.textContent.trim(), checkbox);
    });
  });

  const timefil = document.querySelectorAll(".preferredtime .time");

  timefil.forEach((time) => {
    time.addEventListener("click", () => {
      const checkbox = time.querySelector("input");

      updateFilter("time", time.textContent.trim(), checkbox);
    });
  });
  function applyFilter(showjson) {
    const filteredShows = showjson.filter((show) => {
      // PRICE FILTER
      const priceFilters = showfilter.filter(
        (filter) => filter.type === "price",
      );

      let priceMatch = true;

      if (priceFilters.length > 0) {
        const showPrice = Number(show.price);

        priceMatch = priceFilters.some((filter) => {
          const numbers = filter.value.match(/\d+/g);

          const min = Number(numbers[0]);
          const max = Number(numbers[1]);

          return showPrice >= min && showPrice <= max;
        });
      }

      // FORMAT FILTER
      const formatFilters = showfilter.filter(
        (filter) => filter.type === "format",
      );

      let formatMatch = true;

      if (formatFilters.length > 0) {
        formatMatch = formatFilters.some((filter) => {
          return show.specialformat.includes(filter.value);
        });
      }

      // TIME FILTER
      const timeFilters = showfilter.filter((filter) => filter.type === "time");

      let timeMatch = true;

      if (timeFilters.length > 0) {
        const showTime = show.time;

        const hour = Number(showTime.match(/\d+/)[0]);

        const isPM = showTime.includes("PM");

        let showHour = hour;

        if (isPM && hour !== 12) {
          showHour += 12;
        }

        if (!isPM && hour === 12) {
          showHour = 0;
        }

        timeMatch = timeFilters.some((filter) => {
          if (filter.value === "Morning") {
            return showHour >= 6 && showHour < 12;
          }

          if (filter.value === "Afternoon") {
            return showHour >= 12 && showHour < 17;
          }

          if (filter.value === "Evening") {
            return showHour >= 17 && showHour < 21;
          }

          if (filter.value === "Night") {
            return showHour >= 21 || showHour < 6;
          }
        });
      }

      // ALL CATEGORY FILTERS
      return priceMatch && formatMatch && timeMatch;
    });

    return filteredShows;
  }

  async function showsfilter() {
    try {
      const API_URL = await fetch("http://127.0.0.1:8000/api/TheaterList/");
      const show_api = await fetch("http://127.0.0.1:8000/api/ShowTime/");

      const jsonformat = await API_URL.json();
      const showjson = await show_api.json();

      const filteredShows = applyFilter(showjson);

      jsonformat.forEach((theater, index) => {
        const cenimacard = thearter[index];

        const showtimeRow = cenimacard.querySelector(".showtime-row");

        // old showtimes clear
        showtimeRow.innerHTML = "";

        // theatre-ku matching filtered shows
        const theatreShows = filteredShows.filter((show) => {
          return show.theatre == theater.id;
        });

        // showtimes display
        theatreShows.forEach((show) => {
          const button = document.createElement("div");

          button.className = "showtime-btn";

          button.innerHTML = `
        <span class="show-time">${show.time}</span>
        <span class="show-screen">${show.specialformat}</span>
    `;

          button.addEventListener("click", () => {
            seatbook(show, movie, theater, theatreShows);
          });

          showtimeRow.appendChild(button);
        });

        // theatre show/hide
        if (theatreShows.length > 0) {
          cenimacard.style.display = "block";
        } else {
          cenimacard.style.display = "none";
        }
      });
    } catch (error) {
      console.log("loading in the showtime", error.message);
    }
  }

  showsfilter();

  const cancelable = document.querySelector(".otherch");
  const cancelfil = document.querySelectorAll(".cinema-card");
  async function cancel() {
    const API_URL = await fetch("http://127.0.0.1:8000/api/TheaterList/");
    const theaterjson = await API_URL.json();
    cancelable.addEventListener("click", () => {
      const checked = cancelable.querySelector("input");
      theaterjson.forEach((item, index) => {
        const card = cancelfil[index];
        if (checked.checked) {
          if (item.cancel == "Cancellation available") {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        } else {
          card.style.display = "block";
        }
      });
    });
  }

  cancel();
}

function seatbook(show, movie, theater, theatreShows) {
  root.innerHTML = `
  <div class= "seatbook-page">
    <!-- Header -->
    <div class="header">
        <div class="header-left">
            <span class="back-arrow"><i class="fa-solid fa-arrow-left"></i></span>
            <div class="header-info">
                <h2 class="header-title">${movie.title}-${movie.language}</h2>
                <p class=" ">${theater.name}, ${theater.location} &nbsp;|&nbsp; ${show.date} &nbsp;|&nbsp; ${show.time}</p>
            </div>
        </div>
        <div class="header-right">
            <span class="access-icon"><i class="fa-solid fa-circle-user"></i></span>
            <button class="tickets-btn"><span><i class="fa-solid fa-pen"></i></span> &nbsp; <span class="tc-count">0</span> Tickets</button>
        </div>
    </div>

    <!-- Showtime Selector -->
    <div class="showtime-bar">

    </div>

    <!-- Main Content -->
    <div class="main-content">

        <!-- Left Row Labels -->
        <div class="row-labels">
            <div class="row-label-spacer"></div>
            <div class="row-label">A</div>
            <div class="row-label">B</div>
            <div class="row-label">C</div>
            <div class="row-label">D</div>
            <div class="row-label">E</div>
            <div class="row-label">F</div>
            <div class="row-label">G</div>
            <div class="row-label-spacer"></div>
            <div class="row-label">H</div>
        </div>

        <!-- Seat Area -->
        <div class="seat-area">

            <!-- Club Section -->
            <div class="section-label">&#8377;${show.price}</div>

            <!-- Row A -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat sold">A01</div>
                    <div class="seat sold">A02</div>
                    <div class="seat sold">A03</div>
                    <div class="seat sold">A04</div>
                    <div class="seat sold">A05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat sold">A07</div>
                    <div class="seat sold">A08</div>
                    <div class="seat sold">A09</div>
                    <div class="seat sold">A10</div>
                    <div class="seat sold">A11</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat sold">19</div>
                    <div class="seat available">A20</div>
                    <div class="seat available">A21</div>
                    <div class="seat available">A22</div>
                    <div class="seat available">A23</div>
                </div>
            </div>

            <!-- Row B -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat available">B01</div>
                    <div class="seat available">B02</div>
                    <div class="seat available">B03</div>
                    <div class="seat available">B04</div>
                    <div class="seat available">B05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat sold">B06</div>
                    <div class="seat sold">B07</div>
                    <div class="seat sold">B08</div>
                    <div class="seat sold">B09</div>
                    <div class="seat sold">B10</div>
                    <div class="seat sold">B11</div>
                    <div class="seat sold">B12</div>
                    <div class="seat sold">B13</div>
                    <div class="seat sold">B14</div>
                    <div class="seat sold">B15</div>
                    <div class="seat available">B16</div>
                    <div class="seat available">B17</div>
                    <div class="seat available">B18</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat sold">B19</div>
                    <div class="seat sold">B20</div>
                    <div class="seat available">B21</div>
                    <div class="seat sold">B22</div>
                    <div class="seat sold">B23</div>
                </div>
            </div>

            <!-- Row C -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat available">C01</div>
                    <div class="seat available">C02</div>
                    <div class="seat available">C03</div>
                    <div class="seat available">C04</div>
                    <div class="seat available">C05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat sold">C06</div>
                    <div class="seat sold">C07</div>
                    <div class="seat sold">C08</div>
                    <div class="seat sold">C09</div>
                    <div class="seat sold">C10</div>
                    <div class="seat sold">C11</div>
                    <div class="seat available">C12</div>
                    <div class="seat available">C13</div>
                    <div class="seat available">C14</div>
                    <div class="seat available">C15</div>
                    <div class="seat available">C16</div>
                    <div class="seat available">C17</div>
                    <div class="seat available">C18</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat sold">C19</div>
                    <div class="seat sold">C20</div>
                    <div class="seat available">C21</div>
                    <div class="seat available">C22</div>
                    <div class="seat available">C23</div>
                </div>
            </div>

            <!-- Row D -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat available">D01</div>
                    <div class="seat available">D02</div>
                    <div class="seat available">D03</div>
                    <div class="seat available">D04</div>
                    <div class="seat available">D05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat available">D06</div>
                    <div class="seat available">D07</div>
                    <div class="seat available">D08</div>
                    <div class="seat available">D09</div>
                    <div class="seat available">D10</div>
                    <div class="seat sold">D11</div>
                    <div class="seat sold">D12</div>
                    <div class="seat sold">D13</div>
                    <div class="seat sold">D14</div>
                    <div class="seat sold">D15</div>
                    <div class="seat sold">D16</div>
                    <div class="seat sold">D17</div>
                    <div class="seat sold">D18</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat available">D19</div>
                    <div class="seat available">D20</div>
                    <div class="seat available">D21</div>
                    <div class="seat available">D22</div>
                    <div class="seat available">D23</div>
                </div>
            </div>

            <!-- Row E -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat available">E01</div>
                    <div class="seat available">E02</div>
                    <div class="seat available">E03</div>
                    <div class="seat available">E04</div>
                    <div class="seat available">E05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat available">E06</div>
                    <div class="seat available">E07</div>
                    <div class="seat available">E08</div>
                    <div class="seat available">E09</div>
                    <div class="seat available">E10</div>
                    <div class="seat available">E11</div>
                    <div class="seat available">E12</div>
                    <div class="seat available">E13</div>
                    <div class="seat available">E14</div>
                    <div class="seat available">E15</div>
                    <div class="seat available">E16</div>
                    <div class="seat available">E17</div>
                    <div class="seat available">E18</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat available">E19</div>
                    <div class="seat available">E20</div>
                    <div class="seat available">E21</div>
                    <div class="seat available">E22</div>
                    <div class="seat available">E23</div>
                </div>
            </div>

            <!-- Row F -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat available">F01</div>
                    <div class="seat available">F02</div>
                    <div class="seat available">F03</div>
                    <div class="seat available">F04</div>
                    <div class="seat available">F05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat available">F06</div>
                    <div class="seat available">F07</div>
                    <div class="seat available">F08</div>
                    <div class="seat available">F09</div>
                    <div class="seat available">F10</div>
                    <div class="seat available">F11</div>
                    <div class="seat available">F12</div>
                    <div class="seat available">F13</div>
                    <div class="seat available">F14</div>
                    <div class="seat available">F15</div>
                    <div class="seat available">F16</div>
                    <div class="seat available">F17</div>
                    <div class="seat available">F18</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat available">F19</div>
                    <div class="seat available">F20</div>
                    <div class="seat available">F21</div>
                    <div class="seat available">F22</div>
                    <div class="seat available">F23</div>
                </div>
            </div>

            <!-- Row G -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat available">G01</div>
                    <div class="seat available">G02</div>
                    <div class="seat available">G03</div>
                    <div class="seat available">G04</div>
                    <div class="seat available">G05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat available">G06</div>
                    <div class="seat available">G07</div>
                    <div class="seat available">G08</div>
                    <div class="seat available">G09</div>
                    <div class="seat available">G10</div>
                    <div class="seat available">G11</div>
                    <div class="seat available">G12</div>
                    <div class="seat available">G13</div>
                    <div class="seat available">G14</div>
                    <div class="seat available">G15</div>
                    <div class="seat available">G16</div>
                    <div class="seat available">G17</div>
                    <div class="seat available">G18</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat available">G19</div>
                    <div class="seat available">G20</div>
                    <div class="seat available">G21</div>
                    <div class="seat available">G22</div>
                    <div class="seat available">G23</div>
                </div>
            </div>

            <!-- Executive Section -->
            <div class="section-label exec-label">&#8377;54.35 Executive</div>

            <!-- Row H -->
            <div class="seat-row">
                <div class="seat-group left">
                    <div class="seat sold">H01</div>
                    <div class="seat sold">H02</div>
                    <div class="seat available">H03</div>
                    <div class="seat available">H04</div>
                    <div class="seat available">H05</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group middle">
                    <div class="seat sold">H06</div>
                    <div class="seat sold">H07</div>
                    <div class="seat sold">H08</div>
                    <div class="seat sold">H09</div>
                    <div class="seat sold">H10</div>
                    <div class="seat sold">H11</div>
                    <div class="seat sold">H12</div>
                    <div class="seat sold">H13</div>
                    <div class="seat sold">H14</div>
                    <div class="seat sold">H15</div>
                    <div class="seat sold">H16</div>
                    <div class="seat sold">H17</div>
                    <div class="seat selected">H18</div>
                </div>
                <div class="seat-gap"></div>
                <div class="seat-group right">
                    <div class="seat sold">H19</div>
                    <div class="seat sold">H20</div>
                    <div class="seat sold">H21</div>
                    <div class="seat sold">H22</div>
                    <div class="seat sold">H23</div>
                </div>
            </div>

            <!-- Screen -->
            <div class="screen-wrapper">
                <div class="screen-shape"></div>
                <p class="screen-text">All eyes this way please</p>
            </div>

        </div>

        <!-- Zoom Controls
        <div class="zoom-controls">
            <button class="zoom-btn">&#43;</button>
            <button class="zoom-btn">&#8722;</button>
        </div> -->

    </div>

    <!-- Legend -->
    <div class="legend-bar">
        <div class="legend-item">
            <span class="legend-box available-box"></span>
            <span class="legend-text">Available</span>
        </div>
        <div class="legend-item">
            <span class="legend-box sold-box"></span>
            <span class="legend-text">Sold</span>
        </div>
        <div class="legend-item">
            <span class="legend-box best-box"></span>
            <span class="legend-text">Bestseller &#9432;</span>
        </div>
        <div class="legend-item">
            <span class="legend-box selected-box"></span>
            <span class="legend-text">Selected</span>
        </div>
    </div>

    <!-- Bottom Offer Bar -->
    <div class="offer-bar">
        <div class="price-btn">
        &#8377;
        </div>
        <div class="offer-right">
            <span class="pagination">1/3</span>
            <div class="pagination-dots">
                <span class="dot active-dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    </div>
    </div>

    <div class="overlay-page">
        <div class="seat-count">
            <div class="heading">How many seats?</div>
            <div class="dinamic-image">
                <div class="image"></div>
            </div>
            <div class="mem-count">
                <div class="seat-member one">1</div>
                <div class="seat-member two">2</div>
                <div class="seat-member three">3</div>
                <div class="seat-member four">4</div>
                <div class="seat-member five">5</div>
                <div class="seat-member six">6</div>
                <div class="seat-member seven">7</div>
                <div class="seat-member eight">8</div>
                <div class="seat-member nine">9</div>
                <div class="seat-member ten">10</div>
            </div>
            <hr>
            <div class="price">
                <div class="price-content">
                <div class="price-heading">PREMIUM</div>
                <div class="price-amount">&#8377;${show.price}</div>
                </div>
            </div>
            <div class="seat-btn1">
            <div class="notes">
                <p>Book the <span><i class="fa-regular fa-square" style="color: rgb(231, 193, 54);"></i> </span> BestSeller Seats in this cinema at no extra cost!</p>
            </div>
                <div class="seat-btn">
                <p>Select Seats</p>
                </div>
            </div>
        </div>
    </div>


  `;
  const seatmember = document.querySelectorAll(".seat-member");
  const image = document.querySelector(".image");
  const tccount = document.querySelector(".tc-count");
  const seatbtn = document.querySelector(".seat-btn");
  const overlaypage = document.querySelector(".overlay-page");
  seatmember.forEach((seat) => {
    seat.addEventListener("click", () => {
      seatmember.forEach((item) => {
        item.style.color = "black";
        item.style.backgroundColor = "white";
      });
      seat.style.backgroundColor = "#ed1a41af";
      seat.style.color = "white";
      if (seat.textContent.trim() == 1) {
        image.style.backgroundImage = "url('./image/cycle.jpg')";
      }
      if (seat.textContent.trim() == 2) {
        image.style.backgroundImage = "url('./image/scotoor.jpg')";
      }
      if (seat.textContent.trim() == 3) {
        image.style.backgroundImage = "url('./image/auto.jpg')";
      }
      if (seat.textContent.trim() == 4) {
        image.style.backgroundImage = "url('./image/card.jpg')";
      }
      if (seat.textContent.trim() == 5) {
        image.style.backgroundImage = "url('./image/car 2.jpg')";
      }
      if (seat.textContent.trim() == 6) {
        image.style.backgroundImage = "url('./image/car3.jpg')";
      }
      if (seat.textContent.trim() == "7" || seat.textContent.trim() == "8") {
        image.style.backgroundImage = "url('./image/van.jpg')";
      }

      if (seat.textContent.trim() == "9" || seat.textContent.trim() == "10") {
        image.style.backgroundImage = "url('./image/bus.jpg')";
      }

      tccount.textContent = seat.textContent.trim();
    });
  });

  seatbtn.addEventListener("click", () => {
    if (tccount.textContent > 0) {
      overlaypage.style.display = "none";
    } else {
      overlaypage.style.display = "flex";
    }
  });

  const showtimebar = document.querySelector(".showtime-bar");

  theatreShows.forEach((item) => {
    showtimebar.innerHTML += `
        <div class="time-btn ${item.id == show.id ? "selected" : ""}">
            <span class="show-time">${item.time}</span>
            <span class="show-screen">${item.specialformat}</span>
        </div>
    `;
  });

  const avaiableseat = document.querySelectorAll(".seat.available");
  const selectedseat = [];
  avaiableseat.forEach((seat, index) => {
    seat.addEventListener("click", () => {
      selectedseat.length = 0;
      avaiableseat.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "green";
      });
      const maxSeats = Number(tccount.textContent);
      for (i = index; i < index + maxSeats; i++) {
        const currentSeat = avaiableseat[i];
        selectedseat.push(currentSeat.textContent.trim());
        currentSeat.style.backgroundColor = "green";
        currentSeat.style.color = "white";
      }
      const pricebtn = document.querySelector(".offer-bar .price-btn");
      const price = show.price * maxSeats;
      pricebtn.style.display = "flex";
      pricebtn.textContent = `₹${price}`;

      const paymentpage = document.querySelector(".price-btn");
      paymentpage.addEventListener("click", () => {
        payment(
          show,
          movie,
          theater,
          selectedseat,
          price,
          maxSeats,
          theatreShows,
        );
      });
    });
  });
}

function payment(
  show,
  movie,
  theater,
  selectedseat,
  price,
  maxSeats,
  theatreShows,
) {
  root.innerHTML = `
 <div class="paymentpage">
    <!-- Header -->
    <div class="header">
      <div class="header-left">
        <span class="back-arrow"><i class="fa-solid fa-arrow-left"></i></span>
        <div class="header-info">
          <h2 class="header-title">${movie.title} (${movie.certificate})</h2>
          <p class="header-sub">
            ${theater ? theater.name + "," + theater.location : ""} &nbsp;|&nbsp; ${show ? " | " + show.date + " | " + show.time : ""}
          </p>
        </div>
      </div>
    </div>

    <!-- Page Body -->
    <div class="page-body">
      <!-- Left: Payment Options -->
      <div class="payment-panel">
        <h3 class="payment-title">Payment options</h3>

       
        <div class="payment-layout">
          <!-- Payment Sidebar -->
          <div class="payment-sidebar">
            <div class="sidebar-item active upi">
              <span class="sidebar-icon upi-icon"
                ><i class="fa-solid fa-mobile-screen-button"></i
              ></span>
              <span class="sidebar-text">Pay by any UPI App</span>
            </div>

            <div class="sidebar-item debit-card">
              <span class="sidebar-icon card-icon"
                ><i class="fa-solid fa-credit-card"></i
              ></span>
              <span class="sidebar-text">Debit/Credit Card</span>
            </div>

            <div class="sidebar-item wallet">
              <span class="sidebar-icon wallet-icon"
                ><i class="fa-solid fa-wallet"></i
              ></span>
              <span class="sidebar-text">Mobile Wallets</span>
            </div>

            <div class="sidebar-item gift">
              <span class="sidebar-icon gift-icon"
                ><i class="fa-solid fa-gift"></i
              ></span>
              <span class="sidebar-text">Gift Voucher</span>
            </div>

            <div class="sidebar-item net">
              <span class="sidebar-icon net-icon"
                ><i class="fa-solid fa-building-columns"></i
              ></span>
              <span class="sidebar-text">Net Banking</span>
            </div>

            <div class="sidebar-item later">
              <span class="sidebar-icon later-icon"
                ><i class="fa-regular fa-clock"></i
              ></span>
              <span class="sidebar-text">Pay Later</span>
            </div>

            <div class="sidebar-item redeem">
              <span class="sidebar-icon redeem-icon"
                ><i class="fa-solid fa-ticket"></i
              ></span>
              <span class="sidebar-text">Redeem Points</span>
            </div>
          </div>

          <!-- Payment Content Area -->
          <div class="payment-content">

      </div>

      <!-- Right: Order Summary -->
      <div class="order-summary">
        <!-- Movie Details -->
        <div class="order-movie">
          <div class="order-movie-top">
            <div class="order-left">
              <h3 class="order-movie-name">${movie.title}</h3>
              <p class="order-date"> ${show ? show.date : ""}| ${show ? show.time : ""} PM</p>
              <p class="order-detail">${movie.language}</p>
              <p class="order-detail">Elite - ${selectedseat}</p>
              <p class="order-detail">
                ${theater ? theater.name : ""}: ${theater ? theater.location : ""}
              </p>
            </div>
            <div class="order-right">
              <span class="ticket-count">${maxSeats}</span>
              <a href="#" class="m-ticket"><i class="fa-solid fa-pen"></i> M-Ticket</a>
            </div>
          </div>
        </div>

        <!-- Cancellation Notice -->
        <div class="cancel-notice">
          <p class="cancel-title">${theater ? theater.cancel : ""}</p>
          <p class="cancel-sub">
            This venue does not support booking cancellation.
          </p>
        </div>

        <!-- Price Breakdown -->
        <div class="price-section">
          <div class="price-row">
            <span class="price-label">Ticket(s) price</span>
            <span class="price-value">&#8377;${price}</span>
          </div>
          <div class="price-row">
            <span class="price-label"
              >Convenience fees <span class="drop-arrow"><i class="fa-solid fa-angle-down"></i></span></span
            >
            <span class="price-value1">&#8377;70.80</span>
          </div>
          <div class="price-row musicians-row">
            <div class="musicians-left">
              <span class="price-label">Give to Underprivileged Musicians</span>
              <span class="musicians-sub"
                >(&#8377;1 per ticket) &nbsp;<a href="#" class="view-link"
                  >VIEW T&C</a
                ></span
              >
            </div>
            <div class="musicians-right">
              <span class="price-value zero">&#8377;0.00</span>
              <span class="add-link">Add &#8377;2.00</span>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Order Total -->
        <div class="order-total-row">
          <span class="total-label">Order total</span>
          <span class="total-value">&#8377;370.80</span>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Booking Details -->
        <div class="booking-details">
          <div class="booking-top">
            <span class="booking-title">For Sending Booking Details</span>
            <p class="edit-link"><i class="fa-solid fa-pen"></i> Edit</p>

          </div>
          <p class="booking-info">
          <span class="phone">  </span> <span> | </span> <span class="email-id">  </span> 
          </p>
          <p class="booking-info">Tamil Nadu (for GST purposes)</p>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Apply Offers -->
        <div class="apply-offers-row">
          <div class="offers-left">
            <span class="offers-icon"><i class="fa-solid fa-tag"></i></span>
            <span class="offers-text">Apply Offers</span>
          </div>
          <span class="offers-arrow"> <i class="fa-solid fa-chevron-right"></i></span>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Consent -->
        <div class="consent-text">
          <p>
            By proceeding, I express my consent to complete this transaction.
          </p>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Amount Payable -->
        <div class="amount-payable-row">
          <span class="amount-label">Amount Payable</span>
          <span class="amount-value">&#8377;370.80</span>
        </div>
      </div>
    </div>


      <!-- Dark Overlay -->
    <div class="overlay101"></div>

    <!-- Modal: Contact Details -->
    <div class="modal">
      <!-- Modal Header -->
      <div class="modal-header">
        <span class="modal-back">&#8592;</span>
        <h3 class="modal-title">Contact Details</h3>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <!-- Email Field -->
        <div class="form-group">
          <label class="form-label"
            ><span class="required">*</span> Your email</label
          >
          <input type="email" class="form-input" id="email" />
          <p class="form-hint">
            To access the ticket(s) on other devices, Login with this E-mail
          </p>
        </div>

        <!-- Mobile Number Field -->
        <div class="form-group">
          <label class="form-label"
            ><span class="required">*</span> Mobile Number</label
          >
          <div class="phone-input">
            <input type="tel" class="phone-number" id="phone" />
          </div>
          <p class="form-hint">
            This Number will only be used for sending ticket(s)
          </p>
        </div>

        <!-- State Dropdown -->
        <div class="form-group">
          <label class="form-label"
            ><span class="required">*</span> State</label
          >
          <select class="form-select">
            <option value="tamil-nadu" selected>Tamil Nadu</option>
            <option value="andhra">Andhra Pradesh</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">Karnataka</option>
            <option value="andhra-pradesh">Andhra Pradesh</option>
            <option value="arunachal-pradesh">Arunachal Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="chhattisgarh">Chhattisgarh</option>
            <option value="goa">Goa</option>
            <option value="gujarat">Gujarat</option>
            <option value="haryana">Haryana</option>
            <option value="himachal-pradesh">Himachal Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="madhya-pradesh">Madhya Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="manipur">Manipur</option>
            <option value="meghalaya">Meghalaya</option>
            <option value="mizoram">Mizoram</option>
            <option value="nagaland">Nagaland</option>
            <option value="odisha">Odisha</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="sikkim">Sikkim</option>
            <option value="tamil-nadu" selected>Tamil Nadu</option>
            <option value="telangana">Telangana</option>
            <option value="tripura">Tripura</option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="uttarakhand">Uttarakhand</option>
            <option value="west-bengal">West Bengal</option>
          </select>
        </div>

        <!-- GST Info Box -->
        <div class="gst-info">
          <span class="gst-info-icon">&#9432;</span>
          <p class="gst-info-text">
            Please select state based on your current location for GST purposes.
          </p>
        </div>

        <!-- Terms -->
        <div class="terms-row">
          <a href="#" class="terms-link">*Terms &amp; Conditions</a>
        </div>

        <!-- Submit Button -->
        <button class="submit-btn">Submit</button>
      </div>
    </div>

  `;

  const mticket = document.querySelector(".m-ticket");
  mticket.addEventListener("click", () => {
    seatbook(show, movie, theater, theatreShows);
  });

  const pricevalue = document.querySelector(".price-value1");
  const price2 = Number(pricevalue.textContent.replace("₹", "").trim()) + price;

  const total = document.querySelector(".total-value");
  total.textContent = `₹ ${price2}`;

  const amount = document.querySelector(".amount-value");
  amount.textContent = `₹ ${price2}`;

  const input = document.querySelector("#phone");
  const iti = window.intlTelInput(input, {
    initialCountry: "in",
    separateDialCode: true,
    loadUtils: () =>
      import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"),
  });

  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const submitbtn = document.querySelector(".submit-btn");

  submitbtn.addEventListener("click", () => {
    const emailvalue = email.value.trim();

    if (emailvalue === "") {
      alert("Please enter your email");
      return;
    }

    if (!email.checkValidity()) {
      alert("Please enter a valid email");
      return;
    }

    const phoneNo = phone.value.trim();

    if (phoneNo === "") {
      alert("Please enter your phone number");
      return;
    }

    if (!iti.isValidNumber()) {
      alert("Please enter a valid phone number");
      return;
    }

    const emailplce = document.querySelector(".email-id");
    emailplce.textContent = emailvalue;

    const phoneno = document.querySelector(".phone");
    phoneno.textContent = iti.getNumber();

    const overlay101 = document.querySelector(".overlay101");
    const modal = document.querySelector(".modal");

    overlay101.style.display = "none";
    modal.style.display = "none";
  });

  const edit = document.querySelector(".edit-link");
  console.log(edit);
  edit.addEventListener("click", () => {
    console.log("click");
    const overlay101 = document.querySelector(".overlay101");
    const modal = document.querySelector(".modal");
    overlay101.style.display = "flex";
    modal.style.display = "block";
  });

  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      sidebarItems.forEach((sidebar) => {
        sidebar.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  const paymentcontent = document.querySelector(".payment-content");
  const debit = document.querySelector(".debit-card");
  debit.addEventListener("click", () => {
    paymentcontent.innerHTML = `
            <div class="debit-wrapper">

        <!-- Title -->
        <h2 class="section-title">Debit/Credit Card</h2>

        <!-- Card Form Container -->
        <div class="card-form">

            <!-- Card Number -->
            <div class="form-row">
                <div class="input-group full-width">
                    <input
                        type="text"
                        class="card-input"
                        placeholder="CARD NUMBER"
                        maxlength="19"
                    />
                </div>
            </div>

            <!-- Expiry + CVV Row -->
            <div class="form-row split-row">
                <div class="input-group half-width">
                    <input
                        type="text"
                        class="card-input"
                        placeholder="EXPIRY (MMYY)"
                        maxlength="4"
                    />
                </div>
                <div class="input-group half-width cvv-group">
                    <input
                        type="password"
                        class="card-input"
                        placeholder="CVV"
                        maxlength="3"
                    />
                    <span class="eye-icon">&#128065;</span>
                </div>
            </div>

            <!-- Card Holder Name -->
            <div class="form-row">
                <div class="input-group full-width">
                    <input
                        type="text"
                        class="card-input"
                        placeholder="CARD HOLDER NAME"
                    />
                </div>
            </div>

        </div>

        <!-- Pay Now Button -->
        <button class="pay-btn">Pay Now</button>

    </div>

        `;
  });
  const upi1 = document.querySelector(".upi");
  upi1.addEventListener("click", () => {
    upi();
  });

  function upi() {
    paymentcontent.innerHTML = `
        <h4 class="content-title">Pay by any UPI App</h4>

            <div class="qr-option">
              <div class="qr-left">
                <div class="qr-icon">
                     <i class="fa-solid fa-qrcode"></i>
                </div>
                <div class="qr-text">
                  <p class="qr-main">Scan QR code</p>
                  <p class="qr-sub">You need to have a registered UPI ID</p>
                </div>
              </div>
              <span class="qr-arrow"><i class="fa-solid fa-angle-right"></i></span>
            </div>
          </div>
        </div>
        `;
  }
  upi();

  const wallet = document.querySelector(".wallet");
  wallet.addEventListener("click", () => {
    paymentcontent.innerHTML = `
         <div class="wallet-wrapper">

        <!-- Title -->
        <h2 class="section-title">Mobile Wallets</h2>

        <!-- Wallet List -->
        <div class="wallet-list">

            <!-- Amazon Pay -->
            <div class="wallet-card">
                <div class="wallet-left">
                    <div class="wallet-logo amazon-logo">
                      <img src="./image/amazon.webp" alt="">
                    </div>
                    <div class="wallet-info">
                        <p class="wallet-name">Amazon Pay Balance</p>
                        <p class="wallet-sub">
                            Pay using Amazon Pay Balance and get upto &#8377;100* back. *T&amp;C Apply
                        </p>
                    </div>
                </div>
            </div>

            <!-- Mobikwik -->
            <div class="wallet-card active-card">
                <div class="wallet-left">
                    <div class="wallet-logo mobikwik-logo">
                        <img src="./image/mobilewik.webp" alt=""/>
                    </div>
                    <div class="wallet-info">
                        <p class="wallet-name">Mobikwik</p>
                        <p class="wallet-sub">
                            Pay Using Mobikwik &amp; Get upto 30%* Cashback. *T&amp;C Apply.
                        </p>
                    </div>
                </div>
                <div class="wallet-right">
                    <span class="link-account">LINK ACCOUNT</span>
                </div>
            </div>

            <!-- Paytm -->
            <div class="wallet-card">
                <div class="wallet-left">
                    <div class="wallet-logo paytm-logo">
                        <img src="./image/paytm.png" alt=""/>
                    </div>
                    <div class="wallet-info">
                        <p class="wallet-name">Paytm (Wallet | UPI | Saved Cards)</p>
                    </div>
                </div>
            </div>

            <!-- PayZapp -->
            <div class="wallet-card">
                <div class="wallet-left">
                    <div class="wallet-logo payzapp-logo">
                        <img src="./image/payzapp.png" alt=""/>
                    </div>
                    <div class="wallet-info">
                        <p class="wallet-name">PayZapp (Wallet | Saved Cards)</p>
                    </div>
                </div>
            </div>

        </div>

    </div>

        `;
  });

  const gift = document.querySelector(".gift");
  gift.addEventListener("click", () => {
    paymentcontent.innerHTML = `
  
    <div class="gift-wrapper">

        <!-- Title -->
        <h2 class="section-title">Gift Voucher</h2>

        <!-- GV Code Form -->
        <div class="form-group">
            <label class="form-label">
                <span class="required">*</span> Enter your GV code
            </label>
            <input
                type="text"
                class="gv-input"
                placeholder="Please enter a gift voucher code"
            />
        </div>

        <!-- Pay Now Button -->
        <button class="pay-btn">Pay Now</button>

    </div>

  `;
  });

  const net = document.querySelector(".net");
  net.addEventListener("click", () => {
    paymentcontent.innerHTML = `
  
    <div class="net-wrapper">

        <!-- Title -->
        <h2 class="section-title">Net Banking</h2>

        <!-- Search Bar -->
        <div class="search-bar">
            <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
            <input
                type="text"
                class="search-input"
                placeholder="Search by Bank Name"
            />
        </div>

        <!-- Popular Banks -->
        <h3 class="sub-title">Popular Banks</h3>

        <div class="bank-list">

            <!-- SBI Bank -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo sbi-logo">
                        <img src="./image/sbi.png" alt=""/>
                    </div>
                    <span class="bank-name">SBI Bank</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- HDFC Bank -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo hdfc-logo">
                       <img src="./image/hdfc.webp" alt=""/>
                    </div>
                    <span class="bank-name">HDFC Bank</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- ICICI Bank -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo icici-logo">
                      <img src="./image/icici.webp" alt=""/>
                    </div>
                    <span class="bank-name">ICICI Bank</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- AXIS Bank -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo axis-logo">
                      <img src="./image/axis.png" alt=""/>
                    </div>
                    <span class="bank-name">AXIS Bank</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

        </div>

        <!-- Other Banks -->
        <h3 class="sub-title other-title">Other Banks</h3>

        <div class="bank-list">

            <!-- Kotak Bank -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo kotak-logo">
                      <img src="./image/kotak.png" alt =""/>
                    </div>
                    <span class="bank-name">Kotak Bank</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- Bank of India -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo boi-logo">
                        <img src="./image/boi.webp" alt=""/>
                    </div>
                    <span class="bank-name">Bank of India</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- Bank of Maharashtra -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo bom-logo">
                      <img src="./image/bom.jpg" alt=""/>
                    </div>
                    <span class="bank-name">Bank of Maharashtra</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

        </div>

    </div>
  `;
  });

  const later = document.querySelector(".later");
  later.addEventListener("click", () => {
    paymentcontent.innerHTML = `
  
    <div class="later-wrapper">

        <!-- Title -->
        <h2 class="section-title">Pay Later</h2>

        <!-- Pay Later List -->
        <div class="paylater-list">

            <!-- LazyPay Card -->
            <div class="paylater-card">
                <div class="card-left">
                    <div class="lazypay-logo">
                      <img src="./image/lazy.avif" alt=""/>
                    </div>
                    <span class="card-name">LazyPay Credit</span>
                </div>
                <div class="card-right">
                    <span class="link-account">LINK ACCOUNT</span>
                    <span class="card-arrow">&#8250;</span>
                </div>
            </div>

        </div>

    </div>

  `;
  });

  const redeem = document.querySelector(".redeem");
  redeem.addEventListener("click", () => {
    paymentcontent.innerHTML = `
  
    <div class="redeem-wrapper">

        <!-- Title -->
        <h2 class="section-title">Redeem Points</h2>

        <!-- Search Bar -->
        <div class="search-bar">
            <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
            <input
                type="text"
                class="search-input"
                placeholder="Search by Bank Name"
            />
        </div>

        <!-- Pay with Rewards Section -->
        <h3 class="sub-title">Pay with Rewards</h3>

        <div class="rewards-list">

            <!-- Pay with Rewards Card -->
            <div class="rewards-card">
                <div class="card-left">
                    <div class="reward-logo pwr-logo">
                      <img src="./image/paw.png" alt=""/>
                    </div>
                    <div class="card-info">
                        <p class="card-name">Pay with Rewards</p>
                        <p class="card-sub">Unlock rewards up to Rs.500 *T&amp;C Apply</p>
                    </div>
                </div>
                <div class="card-right">
                    <span class="link-account">LINK ACCOUNT</span>
                    <span class="card-arrow red-arrow">&#8250;</span>
                </div>
            </div>

        </div>

        <!-- Banking Partners Section -->
        <h3 class="sub-title partners-title">Banking Partners</h3>

        <div class="bank-list">

            <!-- Xchange Rewards -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo xchange-logo">
                        <span class="xchange-icon">&#xe;</span>
                        <img src="./image/xchange.webp" alt=""/>
                    </div>
                    <span class="bank-name">Xchange Rewards</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- YES Bank Rewardz -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo yes-logo">
                        <img src="./image/yes.png" alt=""/>
                    </div>
                    <span class="bank-name">YES Bank Rewardz</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- SBI Debit Card (active) -->
            <div class="bank-card active-card">
                <div class="bank-left">
                    <div class="bank-logo sbi-logo">
                        <img src="./image/sbi.png" alt=""/>
                    </div>
                    <span class="bank-name">SBI Debit Card</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- Bandhan Bank -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo bandhan-logo">
                        <img src="./image/bandhan.webp" alt=""/>
                    </div>
                    <span class="bank-name">Bandhan Bank</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- Bank of India Debit Card -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo boi-logo">
                        <img src="./image/india.png" alt=""/>
                    </div>
                    <span class="bank-name boi-name">Bank of India Debit Card</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

            <!-- Canara Bank Credit Card -->
            <div class="bank-card">
                <div class="bank-left">
                    <div class="bank-logo canara-logo">
                        <img src="./image/canara.webp" alt="" />
                    </div>
                    <span class="bank-name">Canara Bank Credit Card</span>
                </div>
                <span class="bank-arrow">&#8250;</span>
            </div>

        </div>

    </div>

  `;
  });

  if (
    movie.category == "premier" ||
    movie.category == "Premiere of the week" ||
    movie.category == "Exclusives" ||
    movie.category == "New on Stream" ||
    movie.category == "Spidey All The Way" ||
    movie.category == "Movies On Discount"
  ) {
    const order = document.querySelector(".order-summary");
    const header = document.querySelector(".header");
    header.innerHTML = `
  <div class="header-left">
        <span class="back-arrow"><i class="fa-solid fa-arrow-left"></i></span>
        <div class="header-info">
          <h2 class="header-title">${movie.title} (${movie.certificate})</h2>
          <p class="header-sub">
           ${movie ? movie.language + "   (" + movie.format + ")" : ""}
          </p>
        </div>
      </div>
  `;

    order.innerHTML = `

       <div class="order-summary">
        <!-- Movie Details -->
        <div class="order-movie">
          <div class="order-movie-top">
            <div class="order-left">
              <h3 class="order-movie-name">${movie.title}</h3>
              <p class="order-detail">${movie.language}</p>
            </div>
       
          </div>
        </div>


        <!-- Price Breakdown -->
        <div class="price-section">
          <div class="price-row">
            <span class="price-label">Ticket(s) price</span>
            <span class="price-value">&#8377;${movie.price}</span>
          </div>
          <div class="price-row">
            <span class="price-label"
              >Convenience fees <span class="drop-arrow"><i class="fa-solid fa-angle-down"></i></span></span
            >
            <span class="price-value1">&#8377;70.80</span>
          </div>
          <div class="price-row musicians-row">
            <div class="musicians-left">
              <span class="price-label">Give to Underprivileged Musicians</span>
              <span class="musicians-sub"
                >(&#8377;1 per ticket) &nbsp;<a href="#" class="view-link"
                  >VIEW T&C</a
                ></span
              >
            </div>
            <div class="musicians-right">
              <span class="price-value zero">&#8377;0.00</span>
              <span class="add-link">Add &#8377;2.00</span>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Order Total -->
        <div class="order-total-row">
          <span class="total-label">Order total</span>
          <span class="total-value">&#8377;000.00</span>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Booking Details -->
        <div class="booking-details">
          <div class="booking-top">
            <span class="booking-title">For Sending Booking Details</span>
            <p class="edit-link"><i class="fa-solid fa-pen"></i> Edit</p>

          </div>
          <p class="booking-info">
          <span class="phone">  </span> <span> | </span> <span class="email-id">  </span> 
          </p>
          <p class="booking-info">Tamil Nadu (for GST purposes)</p>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Apply Offers -->
        <div class="apply-offers-row">
          <div class="offers-left">
            <span class="offers-icon"><i class="fa-solid fa-tag"></i></span>
            <span class="offers-text">Apply Offers</span>
          </div>
          <span class="offers-arrow"> <i class="fa-solid fa-chevron-right"></i></span>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Consent -->
        <div class="consent-text">
          <p>
            By proceeding, I express my consent to complete this transaction.
          </p>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Amount Payable -->
        <div class="amount-payable-row">
          <span class="amount-label">Amount Payable</span>
          <span class="amount-value">&#8377;000.00</span>
        </div>
      </div>
    </div>

  `;

    const pricevalue = document.querySelector(".price-value1");
    const price2 =
      Number(pricevalue.textContent.replace("₹", "").trim()) + movie.price;
    console.log(price2);
    console.log(price);

    const total = document.querySelector(".total-value");
    total.textContent = `₹ ${price2}`;

    const amount = document.querySelector(".amount-value");
    amount.textContent = `₹ ${price2}`;

    const edit = document.querySelector(".edit-link");
    edit.addEventListener("click", () => {
      console.log("click");
      const overlay101 = document.querySelector(".overlay101");
      const modal = document.querySelector(".modal");
      overlay101.style.display = "flex";
      modal.style.display = "block";
    });
  }
}

function eventticket(movie) {
  root.innerHTML = `
    <div class="eventticket">
    <!-- Top Navbar -->
    <div class="navbar">
        <div class="navbar-center">
            <span class="nav-back">&#8249;</span>
            <h1 class="nav-title">${movie.title}</h1>
        </div>
    </div>

    <!-- Stepper -->
    <div class="stepper">
        <div class="step active-step step1">
            <span class="step-circle active-circle">1</span>
            <span class="step-label active-label">Venue</span>
        </div>
        <span class="step-arrow"><i class="fa-solid fa-chevron-right"></i></span>

        <div class="step step2">
            <span class="step-circle">2</span>
            <span class="step-label">Date &amp; Time</span>
        </div>
        <span class="step-arrow"><i class="fa-solid fa-chevron-right"></i></span>

        <div class="step step3">
            <span class="step-circle">3</span>
            <span class="step-label">Ticket</span>
        </div>
        <span class="step-arrow"><i class="fa-solid fa-chevron-right"></i></span>

        <div class="step step4">
            <span class="step-circle">4</span>
            <span class="step-label">Registration &amp; Payment</span>
        </div>
    </div>

    <div class="venue-subheader">
        <div class="details">
        
         </div>
    </div>


    <!-- Main Content -->
    <div class="main-content">
        <!-- Venue Card 1 -->
        <div class="venue-card">
            <div class="venue-info">
                <h3 class="venue-name">${movie.location}</h3>
                <p class="venue-date" style= "margin-bottom:10px";>
                    ${movie.date} | <span class="fast-filling">Fast Filling</span>
                </p>
                <hr style="margin:auto;width:100%">
                <p class=event-location style= "margin-top:10px">
                  ${movie.location}
                </p>
            </div>
            <button class="know-more-btn">Know more</button>
        </div>
      </div>

    <div class="bottom-bar">
        <button class="proceed-btn">Proceed</button>
    </div>

    </div>
  `;

  const knowbtn = document.querySelector(".know-more-btn");
  const venuinfo = document.querySelector(".venue-info");
  knowbtn.addEventListener("click", () => {
    if (venuinfo.style.height === "100px") {
      venuinfo.style.height = "60px";
    } else {
      venuinfo.style.height = "100px";
    }
  });

  const venu = document.querySelector(".venue-card");
  const main = document.querySelector(".main-content");
  venu.addEventListener("click", () => {
    main.innerHTML = `
   <div class="datetime-card">

            <!-- Legend -->
            <div class="legend">
                <div class="legend-item">
                    <span class="legend-dot green-dot"></span>
                    <span class="legend-text">Available</span>
                </div>
                <div class="legend-item">
                    <span class="legend-dot orange-dot"></span>
                    <span class="legend-text">Fast Filling</span>
                </div>
                <div class="legend-item">
                    <span class="legend-dot gray-dot"></span>
                    <span class="legend-text">Sold out</span>
                </div>
            </div>

            <!-- Select Date -->
            <div class="select-section">
                <p class="select-label">Select Date</p>
                <div class="options-row">
                    <div class="option-btn selected-btn-date">${movie.date}</div>
                </div>
            </div>

            <!-- Select Time -->
            <div class="select-section">
                <p class="select-label">Select Time</p>
                <div class="options-row">
                    <div class="option-btn selected-btn-time">${movie.time}</div>
                </div>
            </div>

        </div>
  `;
    const details = document.querySelector(".details");
    const venu = document.createElement("p");
    venu.textContent = movie.date;
    details.appendChild(venu);
    const step2 = document.querySelector(".step2");
    const step2circle = document.querySelector(".step2 .step-circle");
    const step2label = document.querySelector(".step2 .step-label");
    step2.classList.add(".active-step");
    step2circle.classList.add("active-circle");
    step2label.classList.add("active-label");

    const selecteddate = document.querySelector(".selected-btn-date");
    const selectedtime = document.querySelector(".selected-btn-time");
    const button = document.querySelector(".bottom-bar");
    selecteddate.addEventListener("click", () => {
      console.log("click");
      selecteddate.style.backgroundColor = "#e07a50";
      selecteddate.style.color = "white";
      selectedtime.style.backgroundColor = "#e07a50";
      selectedtime.style.color = "white";
      button.style.display = "block";
    });
  });

  const processbutton = document.querySelector(".proceed-btn");
  // const main = document.querySelector(".main-content")
  processbutton.addEventListener("click", () => {
    main.innerHTML = `

        <div class="selecttickes">
            <div class="selecting">
                <h2>Select Tickets</h2>
                <p>You can add up to 10 tickets only</p>
            </div>
        </div>

        <div class="venue-card-1">
            <div class="venue-info-1">
                <h3 class="venue-name">Entry Ticket</h3>

                <p class="venue-date" style="margin-bottom:10px;">
                    ${movie.price} | 
                    <span class="fast-filling">Fast Filling</span>
                </p>
            </div>

            <div class="addcart">
            <div class="addcart-1">
                <div class="addmines"><i class="fa-solid fa-minus"></i></div>
                <div class="adding">Add</div>
                <div class="addplus"><i class="fa-solid fa-plus"></i></div>
            </div>
        </div>
        </div>
        <div class="bottom-bar">
            <button class="proceed-btn">Proceed</button>
        </div>
    `;
    const details = document.querySelector(".details");
    const venu = document.createElement("p");
    venu.textContent = movie.time + "  |  " + movie.date;
    details.appendChild(venu);

    const step3 = document.querySelector(".step2");
    const step3circle = document.querySelector(".step3 .step-circle");
    const step3label = document.querySelector(".step3 .step-label");
    step3.classList.add(".active-step");
    step3circle.classList.add("active-circle");
    step3label.classList.add("active-label");

    const btn = document.querySelector(".adding");
    const flex = document.querySelectorAll(".addplus, .addmines");
    
    btn.addEventListener("click", () => {
    
      flex.forEach((item) => {
        item.style.display = "flex";
      });

      
      const ani = document.querySelectorAll(".addmines, .addplus");
      const btn = document.querySelector(".adding");

      let count = 0;
      ani.forEach((items) => {
        items.addEventListener("click", () => {
          items.style.transform = "scale(0.8)";
          setTimeout(() => {
            items.style.transform = "scale(1)";
          }, 100);
          if (items.classList.contains("addplus")) {
            if (count < 10) {
              count++;
            }
          } else if (items.classList.contains("addmines")) {
            if (count > 0) {
              count--;
            }
          }

          if (count <= 0) {
            btn.textContent = "Add";
          } else {
            btn.textContent = count;
          }
          updateBottomBar(count);
        });
      });
    });
  });
const process = document.querySelector(".bottom-bar");
const price = Number(movie.price);
  function updateBottomBar(count) {

    if (count > 0) {

        process.innerHTML = `
            <div class="ticket">

                <div class="ticket-count">
                    <p class="count">${count} Ticket</p>
                    <p class="amount">₹ ${count * price}</p>
                </div>

                <div class="process">
                    <div class="process-btn">
                        Process
                    </div>
                </div>

            </div>
        `;

        const resgistion = document.querySelector(".process-btn")
        const priceamount = document.querySelector(".amount")
        const price1 =  Number(priceamount.textContent.replace("₹", "").trim());
        resgistion.addEventListener("click",()=>{
          console.log("click")
          payment(null, movie, null, null, price1,count, null);
        })

    } else if(count<=0){

        process.innerHTML =`
            <button class="proceed-btn">Proceed</button>
        `;

    }
}

}
