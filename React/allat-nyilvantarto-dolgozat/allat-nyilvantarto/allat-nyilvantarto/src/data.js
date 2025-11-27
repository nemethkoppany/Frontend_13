let Allatok = [
    {
        fajta:"majom",
        taplalkozas:"gyümölcs",
        eletkor:30
    },
    {
        fajta:"kutya",
        taplalkozas:"hús",
        eletkor:8
    },
    {
        fajta:"Hal",
        taplalkozas:"Hínár",
        eletkor:2
    }
]

export function lekerdez(){
    return Allatok;
}

export function beszur(ujAllat){


    Allatok = [...Allatok,ujAllat]
}

export function torol(fajta){
    Allatok = Allatok.filter(a => a.fajta != fajta);
}