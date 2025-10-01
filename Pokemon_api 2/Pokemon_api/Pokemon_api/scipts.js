function kereses(){
    let keresett_elem = document.getElementById("pokemon-nev").value;
    keresett_elem = keresett_elem.trim().toLowerCase();
    if(!keresett_elem) return;

    const url = `https://pokeapi.co/api/v2/pokemon/${keresett_elem}/`;

fetch(url)
    .then(response => response.json())
    .then(datas => {
        if (!datas || !datas.sprites) {
            throw new Error("Nincs ilyen Pokémon!");
        }

        const img = datas.sprites.front_default;

        const stats = {};
        datas.stats.forEach(s => {
            stats[s.stat.name] = s.base_stat;
        });

        const tipusok = datas.types.map(t => t.type.name).join(", ");

        const div = document.getElementById("eredmeny");
        div.style.display = "block";
        div.style.background = `linear-gradient(135deg, #feffa3, #dbdcff)`
        div.id = "eredmeny";
        div.innerHTML = "";

        const nev = document.createElement("h3");
        nev.textContent = datas.name.toUpperCase();
        div.appendChild(nev);

        const kep = document.createElement("img");
        kep.src = img;
        kep.alt = datas.name;
        div.appendChild(kep);

        const hp = document.createElement("p");
        hp.textContent = `HP: ${stats.hp}`;
        div.appendChild(hp);

        const attack = document.createElement("p");
        attack.textContent = `Attack: ${stats.attack}`;
        div.appendChild(attack);

        const defense = document.createElement("p");
        defense.textContent = `Defense: ${stats.defense}`;
        div.appendChild(defense);

        const speed = document.createElement("p");
        speed.textContent = `Speed: ${stats.speed}`;
        div.appendChild(speed);

        const tipusElem = document.createElement("p");
        tipusElem.textContent = `Típus(ok): ${tipusok}`;
        div.appendChild(tipusElem);
        
        nev.style.textAlign = `center`;
        kep.style.margin = `auto`;
        kep.style.display = `block`;
        kep.style.width = `150px`
    })
   .catch(error => {
    const div = document.getElementById("eredmeny");
    div.innerHTML = ""; 

    const erroMsg = document.createElement("p");
    erroMsg.textContent = error.message;

    div.appendChild(erroMsg);
});

}

document.getElementById("btn-kereses").addEventListener("click", kereses);
