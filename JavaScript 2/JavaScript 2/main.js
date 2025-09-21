const autok = ["Audi", "BMW", "Suzuki", "Ford", "Opel", "BYD"];

console.log(autok[3]);
console.log(autok.length);

autok.push("Skoda")
console.log(autok);
autok.pop();

console.log(autok.at(2));
//console.log(autok[-1]); //Hiba
console.log(autok.at(-1));

console.log(autok.find((value)=>{return value == "BYD"}));
// console.find((value)=>{return value == "Ferrari"}); //Undefined
console.log(autok.findIndex((value)=>{return value == "Ford"}));

console.log(autok.includes("Audi"));
console.log(autok.indexOf("Ford"));

autok.sort()
console.log(autok);
autok.reverse();
console.log(autok);

for(let i = 0; i < autok.length; i++){
    console.log(i + ".:" + autok[i]);
}

autok.forEach((value) => {
    console.log(value);
})

//-------------------------------------------------------------------
let szamok = [9, 122, -3, 6, 78];

//1.
for(i = 0; i<10; i++){
    szamok.push(Math.round(Math.random()*200)-100);
}
console.log(szamok);

//2.
let ujTomb = szamok.filter(value => value%2 == 0 && value > 0);
console.log(ujTomb);

//3.
console.log(szamok.find(value => value > 100) != undefined);

//4.
//Maximum megkeresése: Spread operátor (...[tömb])
console.log(Math.max(...szamok));

//5.
//A lista elejére befűztünk egy számot
szamok = [6, ...szamok];
console.log(szamok);

/*Készítünk egy függvény amely nárhány számot össze tud adni*/

// function osszead(a,b){
//     return a+b;
// }
// function osszead(a,b,c){
//     return a+b+c;
// }

//REST paraméter (...)
function osszead(...param){
    let sum = 0;
    for(let i =0; i > param.length; i++){
        sum += param[i];
    }
    return sum;
}

console.log(osszead(2,4));
console.log(osszead(2,4,9,4));
console.log(osszead(2,4,9,4,12,345,89));

//Map
//Lehet módosítani a már meglévő tömböket
ujSzamok = szamok.map(value => value * 2 + 1);
console.log(ujSzamok);

ujAutok = autok.map(value => value.substring(0,2) + " asd");
console.log(osszead(ujAutok));