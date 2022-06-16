async function klik() {
    const response = await fetch ("https:/pokeapi.co/api/v2/pokemon?limit=10", {
        method: "GET"
    });

    const json = await response.json();
    const result = json.results;

    let data = "";
    for( let i = 0; i < result.length; i++ ) {
        data = data + `<p>${result[i].name}</p>`;
    }

    document.getElementById('coba').innerHTML = data;
}