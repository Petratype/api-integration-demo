document.getElementById("fetch-pokemon").addEventListener("click", fetchPokemon);

async function fetchPokemon() {
    const nameEl = document.getElementById("pokemon-name");
    const imgEl = document.getElementById("pokemon-img");

    nameEl.textContent = "Loading...";
    imgEl.src = "";

    try {
        const randomId = Math.floor(Math.random() * 151) + 1;
        console.log("Fetching Pokémon ID:", randomId);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        console.log("Response status:", res.status);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Data:", data);

        nameEl.textContent = data.name;
        imgEl.src = data.sprites.front_default || "";

        if (!data.sprites.front_default) {
            console.log("No image available for this Pokémon");
        }

    } catch (error) {
        console.error("Fetch error:", error);
        nameEl.textContent = "Oops… something went wrong.";
        imgEl.src = "";
    }
}
