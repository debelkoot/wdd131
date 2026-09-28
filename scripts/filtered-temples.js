// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Three additional temple objects added per requirements
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-250x400.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Italy-Temple-2160331.jpg"
  }
];

// Select DOM Elements
const gallery = document.querySelector(".res-grid");
const pageHeading = document.querySelector("main h2");
const mainNav = document.querySelector("nav");
const menuButton = document.querySelector("#menu");

// Dynamic Footer Info
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Mobile Navigation Toggle
menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuButton.classList.toggle("open");
});

// Function to Create and Render Temple Cards
function createTempleCard(filteredTemples) {
  gallery.innerHTML = ""; // Clear existing content

  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("temple-card");

    let name = document.createElement("h3");
    name.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    let area = document.createElement("p");
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy"); // Native Lazy Loading
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    gallery.appendChild(card);
  });
}

// Render initial view with all temples
createTempleCard(temples);

// Filtering Event Listeners
document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Home";
  createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Old Temples";
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  createTempleCard(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "New Temples";
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  createTempleCard(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Large Temples";
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  createTempleCard(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Small Temples";
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  createTempleCard(smallTemples);
});
