
function updateTime() {
//los angeles

let losAngelesElement = document.querySelector("#los-angeles");

if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = moment().format(`MMMM Do, YYYY`);
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} 
<small>${losAngelesTime.format("A")}</small>`
};

//rio de janeiro
let rjElement = document.querySelector("#rj");

if (rjElement) {
let rjDateElement = rjElement.querySelector(".date");
let rjTimeElement = rjElement.querySelector(".time");
let rjTime = moment().tz("Brazil/East");

rjDateElement.innerHTML = moment().format(`MMMM Do, YYYY`);
rjTimeElement.innerHTML = `${rjTime.format("h:mm:ss")} 
<small>${rjTime.format("A")}</small>`;

}};

updateTime();
setInterval(updateTime, 1000);


function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
</div>
<div>
    <div class="time">${cityTime.format("h:mm:ss")} 
    <small>${cityTime.format("A")}</small></div>
</div>
</div>`


}


let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);