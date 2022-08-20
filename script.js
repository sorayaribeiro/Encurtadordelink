function encurtarUrl(){
    let url = document.getElementById("input-url").value;
    if(!url){
        alert("É preciso inserir uma url ");
        return;
    }
        //api key: df2c392120324b7c8d97efea3da9b54d

        //encurtar link
        //headers
        let headers = {
            "Content-Type": "application/json",
            "apiKey": "df2c392120324b7c8d97efea3da9b54d"
        }

        //dados
        let linkRequest = {
            destination: url,
            domain: { fullName: "rebrand.ly"}
        }

        fetch("https://api.rebrandly.com/v1/links",{
            method: "POST",
            headers: headers,
            body: JSON.stringify(linkRequest)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                let inputUrl = document.getElementById("input-url");
                inputUrl.value = json.shortUrl;
            });
}

function copiar(){
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`url copiada ${inputUrl.value}`);
}