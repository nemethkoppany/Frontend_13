let AUTOK = [
  {
    rendszam: "GHK-582",
    evjarat: 2003,
    fogyasztas: 5.3,
  },
  {
    rendszam: "RET-123",
    evjarat: 2022,
    fogyasztas: 8.1,
  },
  {
    rendszam: "NNZ-931",
    evjarat: 2016,
    fogyasztas: 7.6,
  },
];

export function listaz() {
  return AUTOK;
}

export function felvesz(ujAuto) {
  if(ujAuto.rendszam == " "){
    return;
  }

  if(AUTOK.find(a => a.rendszam == ujAuto.rendszam) != undefined){
    return;
  }
  
  //Itt belekerül a tömbe, de nem változik a state ezért nem renderelődik újra az oldal
  //AUTOK.push(ujAuto)
  AUTOK = [...AUTOK, ujAuto];
}

export function torol(rendszam) {
  AUTOK = AUTOK.filter((a) => a.rendszam != rendszam);

  //let ujTomb = [];
  // for (let i = 0; i < AUTOK.length; i++)
  //  if (AUTOK[i].rendszam != rendszam) ujTomb = [...ujTomb, AUTOK[i]];
}
