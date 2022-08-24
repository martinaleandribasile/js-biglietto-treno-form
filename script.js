console.log("ok js")

const inputName = document.getElementById("inputName");
console.log(inputName.value);
const inputSurname = document.getElementById("inputSurname");
const inputAge = document.getElementById("inputAge");
const inputData = document.getElementById("inputDate");
const inputKm = document.getElementById("inputKm");
const ticketData = document.getElementById("dateTicket");
const ticketKm = document.getElementById("kmTicket");
const ticketPrice = document.getElementById("PriceTicket");
const ticketDiscounttext = document.getElementById("DiscountTickettext");
const ticketDiscount = document.getElementById("DiscountTicket");
const identificativo = document.getElementById("identificativo");
const inviodati = document.getElementById("button");
const ticket = document.getElementById("blockticket");



inviodati.addEventListener("click", function () {
    ticket.classList.remove("schermo");
    identificativo.innerHTML = `${inputName.value}  ${inputSurname.value}`;
    ticketKm.innerHTML = inputKm.value;
    ticketData.innerHTML = inputData.value
    const price = inputKm.value * 0.21;
    ticketPrice.innerHTML = price.toFixed(2) + " &#8364;";
    if (inputAge.value < 18) {
        ticketPrice.classList.add("styleprice")
        const sconto20 = price - (price * 20 / 100);
        ticketDiscounttext.innerHTML += "Sconto del 20% ";
        ticketDiscount.innerHTML += sconto20.toFixed(2) + " &#8364;";
    }
    else if (inputAge.value >= 65) {
        ticketPrice.classList.add("styleprice")
        const sconto40 = price - (price * 40 / 100);
        ticketDiscounttext.innerHTML += "Sconto del 40% ";
        ticketDiscount.innerHTML += sconto40.toFixed(2) + " &#8364;";
    }

})
