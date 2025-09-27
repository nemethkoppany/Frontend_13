function $(str){
    return document.getElementById(str);
}

function kereses(){
    let keresett = $("input-zene").value;
    keresett = keresett.trim();
    console.log(keresett);
    keresett = keresett.replaceAll(' ', "+");

    const url = `https://itunes.apple.com/search?term=${keresett}&media=music&limit=200`;

    fetch(url)
    .then(response =>response.json())
    .then(datas =>{
        const results = datas.results;
        
        $('zenek').innerHTML = "";
        for(let i= 0; i < results.length; i++){
            newTableRow(results[i].artistName, results[i].trackName, results[i].releaseDate,results[i].primaryGenreName,results[i].trackTimeMillis,results[i].previewUrl);

        }
    })
    .catch(error =>{
        console.log(error)
    });

}

function newTableRow(eloado,cim,ev,tipus,millis, url){
    ev = ev == undefined ? '-':ev.substring(0,4);

    let tr = document.createElement("tr");
    let tdEloado = document.createElement("td");
    let tdCim = document.createElement("td");
    let tdEv = document.createElement("td");
    let tdTipus = document.createElement("td");
    let tdIdo = document.createElement("td");

    tdEloado.innerHTML = eloado;
    tdCim.innerHTML = cim;
    tdEv.innerHTML = ev;
    tdTipus.innerHTML = tipus;
    tdIdo.innerHTML = millisToTimeFormat(millis);
    tdCim.classList += "cim";

    tdCim.onclick = () =>{
        if($("lejatszo") != null)
            $("lejatszo").remove();

        const lejatszo = document.createElement("audio");
        lejatszo.id = "lejatszo";
        lejatszo.controls = true;
        lejatszo.autoplay = true;
        
        const src = document.createElement("source");
        src.src = url;
        lejatszo.appendChild(src);
        $("zene-lejatszo").appendChild(lejatszo);
    };

    tr.appendChild(tdEloado);
    tr.appendChild(tdCim);
    tr.appendChild(tdEv);
    tr.appendChild(tdTipus);
    tr.appendChild(tdIdo);
    $('zenek').appendChild(tr);
    
}

function millisToTimeFormat(input) {
    let h = Math.floor(input / (60 * 60 * 1000));
    input = input - h * 60 * 60 * 1000;
    let m = Math.floor(input / (60 * 1000));
    input = input - m * 60 * 1000;
    let s = Math.floor(input / 1000);
    let ms = input % 1000;

    let str = "";
    if (h > 0) {
        str += h.toString().padStart(2, "0") + ":";
    }
    str += m.toString().padStart(2, "0") + ":";
    str += s.toString().padStart(2, "0") + ":";
    str += ms.toString().padStart(3, "0");
    return str;
}


$("btn-kereses").addEventListener("click", kereses);
$("input-zene").addEventListener("keypress",event =>{
    if(event.key == "Enter"){
        kereses();
    }
});

