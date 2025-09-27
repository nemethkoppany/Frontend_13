function kereses(){
    let keresett_elem = document.getElementById("pokemon-nev").value;
    keresett_elem = keresett_elem.trim().toLowerCase();
    console.log(keresett_elem);
    //keresett_elem = keresett_elem.replaceAll(" ", "+");

    const url = `https://pokeapi.co/api/v2/pokemon/${keresett_elem}/`

    fetch(url)
    .then(response => response.json())
    .then(datas => {
        const results = datas.results;

        
        for(let i = 0; i < results.length; i++){
            const nev = results[i].name;
            kiiras(nev);
        }
    })
    .catch(error => {
        console.log(error);
    });

}

function kiiras(nev){
    document.body.innerText = nev;
}

document.getElementById("btn-kereses").addEventListener("click", kereses);
