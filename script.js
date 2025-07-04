const ham = document.getElementById("hamm");
const menu = document.getElementById("menuu");
console.log(ham)


ham.addEventListener("click", openMenu)

function openMenu(){
menu.classList.toggle("show");


}