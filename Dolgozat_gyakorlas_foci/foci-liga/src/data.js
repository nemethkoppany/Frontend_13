let FociLiga = [
    {
        nev: "Ferencváros",
        varos: "Ferencváros",
        alapitasEve: 1989
    },
      {
        nev: "FC Barcelona",
        varos: "Barcelona",
        alapitasEve: 1999
    },
      {
        nev: "Újpest",
        varos: "Újpest",
        alapitasEve: 1988
    }
]

export function listaz(){
    return FociLiga;
}

export function felvesz(ujCsapat){
    FociLiga = [...FociLiga, ujCsapat]
}

export function torol(csapatNev){
    FociLiga = FociLiga.filter(f => f.nev != csapatNev)
}