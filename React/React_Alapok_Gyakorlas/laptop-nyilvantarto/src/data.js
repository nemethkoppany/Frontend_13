let Laptop = [
    {
        serial: 123131,
        model: "Asus",
        ram: 16
    },
    {
        serial: 123124,
        model: "Dell",
        ram: 32
    },
    {
        serial: 123125,
        model: "HP",
        ram: 8
    }
]

export function listaz(){
    return Laptop;
}

export function felvesz(ujLaptop){
    if(ujLaptop.serial == ""){
        return;
    }

    if(Laptop.find(l => l.serial == ujLaptop.serial)){
        return;
    }

    Laptop = [...Laptop, ujLaptop];
}

export function torol(serial){
    Laptop = Laptop.filter(l => l.serial != serial);
}