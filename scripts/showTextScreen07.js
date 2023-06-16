let btn1 = document.getElementById("btn-date-form-01");
let btn2 = document.getElementById("btn-date-form-02");
let label = document.getElementById("text-screen_07");
let form = document.getElementById("date-form");

const opt01 = "Realmente, conhecer você foi muito bom.<br>E aquele <text id='highlight-screen_07'>beijo</text> em...";
const opt02 = "SIM!!! Foi nesse encontro que eu me <text id='highlight-screen_07'>apaixonei</text> por você";

btn1.addEventListener("click", () => {
  applyText(opt01)
})

btn2.addEventListener("click", () => {
  applyText(opt02)

})

function applyText(text){
  setTimeout(() => {
    label.innerHTML = text;
    form.innerHTML = ""
  }, 400)
}


