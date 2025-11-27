document.getElementById("loadBtn").addEventListener("click", () => {

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight}</p>
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error loading Pokémon.";
        });

});
