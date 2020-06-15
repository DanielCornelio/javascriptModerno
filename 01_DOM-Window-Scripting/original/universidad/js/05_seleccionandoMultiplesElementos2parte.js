const enlaces = document.querySelectorAll("#principal .enlace");

enlaces[1].style.background = "red";
enlaces[1].textContent = "nuevo enlace";
console.log(enlaces)

const enlace = document.querySelectorAll("#principal a:nth-child(odd)");

enlace.forEach(impares => {
    impares.style.background = 'purple';
    impares.style.color = 'white';
});

console.log(enlace);