for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("Voy en el 5");
        continue;
        //break;
    }
    console.log(`Numero: ${i}`);
}

for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);

    }
}

const things = ["musica","code","God","love"];
console.log(things.length);
for(let i = 0; i < things.length; i++){
    console.log(`something that i like is: ${things[i]} `)
}
