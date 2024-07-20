document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');
const header = document.querySelector('h1');

hamButton.addEventListener('click',() => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    header.classList.toggle('hide-header');
});

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
    {
        templeName: "Bountiful, UT",
        location: "Bountiful, UT",
        dedicated: "1983, December, 2",
        area: 104000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x400/bountiful-utah-temple-83074.jpg"
    },
    {
        templeName: "San Diego, CA",
        location: "San Diego, CA",
        dedicated: "1993, April, 30",
        area: 72000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"     
    },
  ];

displayGallery(temples);

const home = document.querySelector('#home');
const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const largeTemples = document.querySelector('#large');
const smallTemples = document.querySelector('#small');
const heading = document.querySelector('#heading');

home.addEventListener('click', () => {
    displayGallery(temples);
    heading.innerHTML = `<h2>Home</h2>`;
})

// oldTemples.addEventListener('click', () => {
//     displayGallery(temples.filter(temple => new Date(temples.dedicated) > new Date(2000, 0, 1)));
// })

largeTemples.addEventListener('click', () => {
    displayGallery(temples.filter(temple => temple.area >= 90000));
    heading.innerHTML = '<h2>Large Temples</h2>';
})

function displayGallery(crd) {
    document.querySelector('#temples').innerHTML = '';
    crd.forEach(temple => {
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const location = document.createElement('p');
        const date = document.createElement('p');
        const area = document.createElement('p');
        const image = document.createElement('img');

        name.innerHTML = temple.templeName;
        location.innerHTML = `<span>Location: </span> ${temple.location}`;
        date.innerHTML = `<span>Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span>Floor Area: </span> ${temple.area}<span> sq ft</span>`;
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `${temple.templeName} Temple`);
        image.setAttribute('loading', 'lazy');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(date);
        card.appendChild(area);

        document.querySelector('#temples').appendChild(card);
    })

}



