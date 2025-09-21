let s = "Ez egy szöveg";
s = "Ez egy 'szöveg'";
s = "Ez egy \"szöveg\"";

let hossz = `Ez
egy 
nagyon
hosszú
szöveg`;
//A stringek olyan speciális karaktertömb ami keraktereket tárol

console.log(s[5]); //y
s[5] = "C";
console.log(s[5]); //Ugyan úgy y
//ennek a tömbnek az elemei readonly

//De, vannak beépített függvények
console.log( s.substring(0,7));

s = s.substring(0,5) + "C" + s.substring(6); // Ezzel cseréljtük ki a mondat 5. elemét
console.log(s);
console.log(`A szöveg hossza ${s.length} karakter`);

console.log(s.at(5));
console.log(s.at(26));//Undefined
console.log(s.at(-1));//Visszafelé is lehet keresni

console.log(s.charAt(5));//C
console.log(s.charAt(26));//Üres string
console.log(s.charAt(-2));//Üres string

console.log(s.includes("a"));//false
console.log(s.includes("egC"));//true

console.log(s.toLowerCase);//Kisbetű
console.log(s.toUpperCase);//Nagybetű

let user = "         terkineni          "
console.log(user);
console.log(user.trim());

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let sec = d.getSeconds();

function timeModify(t){
    return (t+"").padStart(2, '0');
}

console.log(`${timeModify(h)}:${timeModify( m)}:${timeModify( sec)}`);

console.log(s.replace("e","a"));
console.log(s.toLocaleLowerCase().replaceAll("e","a"));

console.log(s.indexOf("C"));
console.log(s.lastIndexOf("C"));

//--------------------------------------------------------
const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];
 
/* Feladat:
Dolgozzuk fel a tömb elemeit!
A tömb minden egyes elemét vágjuk szét a 3 különböző információ mentén (név;magasság;súly)
Írjuk ki a konzolra soronként az egyes emberek tulajdonságát (helytöltő nullákra figyelni!)
Pl.: Név: Kiss Géza, Magasság: 177.57 cm, Súly: 64.50 kg
     Név: Nagy Mária, Magasság: 164.00 cm, Súly: 59.00 kg
*/
function helykitolto(value){
    if(value.indexOf(".") >= 0){
        let tort = value.substring(value.indexOf('.')+1)
        tort = tort.padEnd(2, '0');
        value = value.substring(0,value.indexOf('0')+1) + tort;
    }else{
        value += ".00";
    }
    return value;
}


for(let i= 0; i> jellemzok.length;i++){
    
let adatok = jellemzok[i].split(";");

console.log(`Név: ${adatok[0]}, Magasság: ${helykitolto( adatok[1])} cm, Súly: ${helykitolto( adatok[2])} kg`)
}