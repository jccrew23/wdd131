//button navigation
const aboutButton = document.querySelector('#about-me');
const priceButton = document.querySelector('#prices');
const contactButton = document.querySelector('#contacts');

aboutButton.addEventListener ('click', () => {
    window.location.href = 'about.html'
})

priceButton.addEventListener ('click', () => {
    window.location.href = 'pricing.html'
})

contactButton.addEventListener ('click', () => {
    window.location.href = 'contact.html'
})

//email prompt 
let numVisits = Number(window.localStorage.getItem('numVisits-Is')) || 0;

if (numVisits !== 0) {
    window.prompt('Welcome Back! Want to join my Newsletter? ', 'john@gmail.com');
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);



// footer copyright and modified date
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

