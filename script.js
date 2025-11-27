document.getElementById("fetch-joke").addEventListener("click", fetchJoke);

async function fetchJoke() {
    const setupEl = document.getElementById("joke-setup");
    const punchlineEl = document.getElementById("joke-punchline");

    setupEl.textContent = "Loading joke...";
    punchlineEl.textContent = "";

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();

        setupEl.textContent = data.setup;
        punchlineEl.textContent = data.punchline;

    } catch (error) {
        setupEl.textContent = "Oops… something went wrong.";
        punchlineEl.textContent = "";
    }
}
