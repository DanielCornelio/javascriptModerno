//objetos
const persona = {
    nombre : "daniel",
    apellido : "cornelio",
    profesion : "developer",
    email : "jdcornelio89@gmail.com",
    edad : 30,
    musica : ["rock", "pop", "alternative"],
    hogar : {
        pais : "mexico",
        estado : "tabasco",
        municipio : "nacajuca"
    },
    nacimiento : function(){
        return new Date().getFullYear() - this.edad;
    }
}

persona.musica.push("trance");
console.log(persona.musica);
console.log(persona.hogar.municipio);
console.log(persona.nacimiento());
// console.log(persona["hogar"]["estado"]); no es muy recomendable
