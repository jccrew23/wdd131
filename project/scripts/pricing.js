const oneStudio = document.querySelector('#oneStudio');
const oneTravel = document.querySelector('#oneTravel');
const twoStudio = document.querySelector('#twoStudio');
const twoTravel = document.querySelector('#twoTravel');
const threeStudio = document.querySelector('#threeStudio');
const threeTravel = document.querySelector('#threeTravel');

const priceStudio = 25
const priceTravel = 29

oneStudio.addEventListener('click', () => {
    let price = priceStudio;
    tuition = (1 * price) * 4 ;
    let sPrice = document.querySelector('#sPrice');
    sPrice.innerHTML = tuition;
})

twoStudio.addEventListener('click', () => {
    let price = priceStudio;
    tuition = (2 * price) * 4;
    let sPrice = document.querySelector('#sPrice');
    sPrice.innerHTML = tuition;
})

threeStudio.addEventListener('click', () => {
    let price = priceStudio;
    tuition = (3 * price) * 4;
    let sPrice = document.querySelector('#sPrice');
    sPrice.innerHTML = tuition;
})

oneTravel.addEventListener('click', () => {
    let price = priceTravel;
    tuition = (1 * price) * 4;
    let sPrice = document.querySelector('#tPrice');
    tPrice.innerHTML = tuition;
})

twoTravel.addEventListener('click', () => {
    let price = priceTravel;
    tuition = (2 * price) *4;
    let sPrice = document.querySelector('#tPrice');
    tPrice.innerHTML = tuition;
})

threeTravel.addEventListener('click', () => {
    let price = priceTravel;
    tuition = (3 * price) * 4;
    let sPrice = document.querySelector('#tPrice');
    tPrice.innerHTML = tuition;
})

// footer copyright and modified date
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);