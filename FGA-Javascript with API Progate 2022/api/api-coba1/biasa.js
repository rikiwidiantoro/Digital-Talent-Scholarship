function klik() {
    const xhttp = new XMLHttpRequest();
    const url = "https:/pokeapi.co/api/v2/pokemon?limit=10";
    const httpMethod = "GET";

    xhttp.onload = function() {
        // console.log(this.responseText);

        const response = JSON.parse(this.responseText); // object
        const results = response.results; // array

        let data = "";
        for(let i = 0; i < results.length; i++) {
            data = data + `<p>${results[i].name}</p>`;
        }
        
        document.getElementById('coba').innerHTML = data;
        // console.log(results);
    }

    xhttp.open(httpMethod, url);
    xhttp.send();
}