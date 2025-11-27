document.getElementById("fetch-pokemon").addEventListener("click", fetchPokemon);

async function fetchPokemon() {
    const nameEl = document.getElementById("pokemon-name");
    const imgEl = document.getElementById("pokemon-img");

    nameEl.textContent = "Loading...";
    imgEl.src = "";

    try {
        const randomId = Math.floor(Math.random() * 151) + 1; // First 151 Pokémon
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await res.json();

        nameEl.textContent = data.name;
        imgEl.src = data.sprites.front_default;

    } catch (error) {
        nameEl.textContent = "Oops… something went wrong.";
        imgEl.src = "";
    }
}
