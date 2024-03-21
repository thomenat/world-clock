
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

}

//Reykjavík
let reykjavikElement = document.querySelector("#reykjavik");

if (reykjavikElement) {
let reykjavikDateElement = reykjavikElement.querySelector(".date");
let reykjavikTimeElement = reykjavikElement.querySelector(".time");
let reykjavikTime = moment().tz("Atlantic/Reykjavik");

reykjavikDateElement.innerHTML = moment().format(`MMMM Do, YYYY`);
reykjavikTimeElement.innerHTML = `${reykjavikTime.format("h:mm:ss")} 
<small>${reykjavikTime.format("A")}</small>`;

}


};

updateTime();
setInterval(updateTime, 1000);


function updateCity(event) {
    let cityTimeZone = event.target.value;

    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
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
</div>
<div class="all-cities-div">
    <button class="all-cities-button"> <a href="/">Back to all cities</a></button>
</div>`


}

let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);
