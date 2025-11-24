let  Autok_tomb = [
    {
        rendszam:"RED-341",
        evjarat: 2003,
        fogysztas: 4.9
    },
    
    {
        rendszam:"BLU-342",
        evjarat: 2012,
        fogysztas: 7.1
    },
    
    {
        rendszam:"LUL-067",
        evjarat: 2025,
        fogysztas: 6.7
    }
]

export function listaz(){
    return Autok_tomb;
} 

export function felvesz(ujAuto){
    if(ujAuto.rendszam === " "){
        return;
    } 

    if(Autok_tomb.find(a => a.rendszam === ujAuto.rendszam) !== undefined){
        return;
    }


    Autok_tomb = [...Autok_tomb, ujAuto]
}

export function torol(rendszam){
    Autok_tomb = Autok_tomb.filter((a) => a.rendszam != rendszam);
}