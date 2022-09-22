let navBar = document.getElementById("hamburger");
let navBox = document.getElementById("nav-itmes-ul");

navBar.addEventListener("click", function(){
    navBox.classList.toggle("cross");
    navBar.classList.toggle("cross-hamburg")
})