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

//welcome prompt 
const welcome = document.querySelector('#welcome');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    const welcomeBack = document.createElement('h2');
    welcomeBack.textContent = `Welcome back to Creative Keys`;
    welcome.appendChild(welcomeBack);
} else {
    const welcomeFirst = document.createElement('h2');
    welcomeFirst.textContent = `Welcome to Creative Keys`;
    welcome.appendChild(welcomeFirst);
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);



// footer copyright and modified date
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

