
function updateTime() {
//los angeles

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = moment().format(`MMMM Do, YYYY`);
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} 
<small>${losAngelesTime.format("A")}</small>`;

//rio de janeiro
let rjElement = document.querySelector("#rj");
let rjDateElement = rjElement.querySelector(".date");
let rjTimeElement = rjElement.querySelector(".time");
let rjTime = moment().tz("Brazil/East");

rjDateElement.innerHTML = moment().format(`MMMM Do, YYYY`);
rjTimeElement.innerHTML = `${rjTime.format("h:mm:ss")} 
<small>${rjTime.format("A")}</small>`;

};

updateTime();
setInterval(updateTime, 1000);


