function generate(){
    const url = " https://randomuser.me/api/"

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        
        const div = document.getElementById("kartya_div");
        div.textContent = ""
        const img = document.createElement("img");
        img.src = data.results[0].picture.large
        div.appendChild(img);

        const full_name = document.createElement("p");
        full_name.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`
        div.appendChild(full_name);

        const address = document.createElement("p");
        address.textContent = `${data.results[0].location.country}, ${data.results[0].location.city}, ${data.results[0].location.street.name}, ${data.results[0].location.street.number}`
        div.appendChild(address);

        const email = document.createElement("p");
        email.textContent = `${data.results[0].email}`
        div.appendChild(email);

        const id = document.createElement("id");
       if( data.results[0].id.value != null){
        id.textContent = `${data.results[0].id.value}`
       }
       else{
        id.textContent = "-"
       }

       div.appendChild(id);

    })
    .catch(
        error => console.error(error)
    )
}

generate();