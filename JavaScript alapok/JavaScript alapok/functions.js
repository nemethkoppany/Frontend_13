let n = 5;
let s = "A kedvenc számom: " + n;
let s2 = `A kedvenc számom: ${n*2}`;

console.log(s);
console.log(s2);

let o = {
    nev: "Béla",
    eletkor: 42,
    foglalkozas: "pék"
};

console.log(o);
console.log(o.foglalkozas);
console.log(o["foglalkozas"]);

function osszead(a,b){
    return a+b;
}

console.log(osszead);
console.log(osszead(4,8));

let osszead2 = function(a,b){
    return a+b;
}

let osszead3 = (a,b) => {return a+b};

let negyzet = (n) => {return n*n};

let negyzet2 = n => n*n;
console.log(negyzet2(3));

function oldal_hatter(szin){
    document.body.style.backgroundColor = szin;
}

function oldal_hatter2(){
    document.body.style.backgroundColor = "green";
}

document.getElementById("btn").addEventListener("click", () => oldal_hatter("green"))

