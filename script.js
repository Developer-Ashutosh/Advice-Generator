const adviceId = document.querySelector("#adviceId");
const advice = document.querySelector(".advice");
const adviceBtn = document.querySelector('.adviceBtn')

const generate = function () {
    adviceBtn.addEventListener("click", async function () {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        adviceId.innerText = data.slip.id;
        advice.innerText = '"' + data.slip.advice + '"';
    })
}

generate();