let kartya = [
    {
        kartyaszam: 456784678,
        lejarat: 2023,
        ccv: 990,
        tulajdonos_neve: "Béla"
    },
    
    {
        kartyaszam: 456784421,
        lejarat: 3023,
        ccv: 991,
        tulajdonos_neve: "Pista"
    },
    
    {
        kartyaszam: 456876678,
        lejarat: 2019,
        ccv: 888,
        tulajdonos_neve: "Piri"
    }
]

export function listaz(){
    return kartya;
}

export function felvesz(ujKartya){
    if(ujKartya.kartyaszam == ""){
        return;
    }

    if(kartya.find(k => k.kartyaszam == ujKartya.kartyaszam)){
        return;
    }


    kartya = [...kartya, ujKartya]
}

export function torol(kartyaSzam){
    kartya = kartya.filter(k => k.kartyaszam != kartyaSzam);
}