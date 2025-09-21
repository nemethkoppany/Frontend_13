//Osztály != Objektum
//Az osztály egy sablon amit ha példányosítunk akkor létrehozható egy objektum


class Szemely{
    constructor(nev,foglalkozas,szuletesiEv) {
        this.nev = nev;
        this.foglalkozas = foglalkozas;
        this.szuletesiEv = szuletesiEv;
    }

    hanyEves(){
        return (new Date()).getFullYear() - this.szuletesiEv;
    }
}

let odon = new Szemely("Tök Ödön", "kertész", 1978);
console.log(odon);
console.log(`${odon.nev} ${odon.hanyEves()} éves`)

let ors = new Szemely("Buda Örs","cukrász", 1997)
// let ors_obj = {
//     nev: "Bda Örs",
//     foglalkozas: "cukrász",
//     szuletesiEv: 1997,
// }

//-------------------------------------------------------------------
//Öröklés

class Alkalmazott extends Szemely{
    static bonusz = 10; //10%

    #belepesiKod = undefined;
    constructor(nev, foglalkozas, szuletesiEv, fizetes){
        super(nev, foglalkozas, szuletesiEv);
        this.fizetes = fizetes;
    }

    setBelepesiKod(kod){
        if(typeof(kod) == 'number' ){
            this.#belepesiKod = kod;
        }
    }
    getBelepesiKod(){
        return kod;
    }

    set belepesiKod(kod){
        if(typeof(kod) == "number" ){
            this.#belepesiKod = kod;
        }
    }

    get belepesiKod(){
        return this.#belepesiKod;
    }

    get fizetesLekerdez(){
        if((new Date).getMonth() == 11){
            return this.fizetes*(1+(Alkalmazott.bonusz/100));
        }
        else{
            return this.fizetes;
        }
    }

    static get bonusz(){return Alkalmazott.bonusz;}
}

let virag = new Alkalmazott("Vad Virág", "titkárnő", 2004, 480000);
console.log(virag);
console.log(`${virag.nev} ${virag.hanyEves()} éves.` );
virag.setBelepesiKod(854671);
console.log(`${virag.nev} belépési kódja: ${virag.belepesiKod}`);
//virag.belepesiKod = 336531;

console.log(`${virag.nev} fizetése ebben a hónapban: ${virag.fizetesLekerdez}Ft`)



/*
Készítsen egy Jarmu osztályt amely nyilántartja a következő tulajdonságokat
-típus(bicikli, autó, stb
-Üzemanyag(benzin, kerozin, null)
-Kerekek száma
-Végsebesség

Készítsen az osztályhoz egy olyan metódust amellyel lekérdezhető, hogy hány jármű lett létrehozva(Példányosítva)

Készítsen egy olyan metódust amely paraméterben egy távolságot vár, a függvény pedig megmondja, hogy az adott járműnek mennyi időbe kerül mire ezt a távolságot megteszi(végsebességgel)

*/ 

class Jarmu{
    static peldanyokSzama = 0;
    constructor(tipus,uzemanyag, kereke_szama,vegsebesseg){
        this.tipus = tipus;
        this.uzemanyag = uzemanyag;
        this.kereke_szama = kereke_szama;
        this. vegsebesseg = vegsebesseg;
        Jarmu.peldanyokSzama++;
    }

    static get peldanyokSzama(){
        return Jarmu.peldanyokSzama;
    }

    tavolsag_ido_alatt(tavolsag){
        return tavolsag/this.vegsebesseg;
    }
}

let bicikli = new Jarmu("bicikli",null,2,40);
let auto = new Jarmu("Autó", "benzin", 4, 170);
let repulo = new Jarmu("Repülő", "kerozin",16, 800)

console.log(`A ${bicikli.tipus}-nek ${bicikli.tavolsag_ido_alatt(50)} óra kell ahhoz, hogy megtegyen 50km-t ha ${bicikli.vegsebesseg}-el megy.`)

console.log(`Az ${auto.tipus}-nak ${Math.round( auto.tavolsag_ido_alatt(200))} óra kell ahhoz, hogy megtegyen 200km-t ha ${auto.vegsebesseg}-el megy.`)

console.log(`A ${repulo.tipus}-nek ${repulo.tavolsag_ido_alatt(1000)} óra kell ahhoz, hogy megtegyen 1000km-t ha ${repulo.vegsebesseg}-el megy.`)

console.log(`A járművek száma: ${Jarmu.peldanyokSzama}`)