document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified)

const temp = 78;
const wind = 3.73;

function calculateWindChill(T,W) {
     return 35.74 + (0.6215*T)-(35.75*(W**0.16)) + ((0.4275*T)*(W**0.16));
}

document.querySelector("#temp").innerHTML = temp;
document.querySelector("#wind").innerHTML= wind;
windChill= calculateWindChill(temp,wind);
document.querySelector("#chill").innerHTML = windChill.toFixed(2);

