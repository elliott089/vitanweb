// Replace with your Universe ID
const gameId = 10016841656;

fetch(`https://games.roproxy.com/v1/games?universeIds=${gameId}`)
    .then(res => res.json())
    .then(data => {
        const info = data.data[0];

        document.getElementById("activePlayers").textContent =
            "Active Players: " + info.playing;

        document.getElementById("visits").textContent =
            "Total Visits: " + info.visits.toLocaleString();

        document.getElementById("likes").textContent =
            "Likes: " + info.favoritedCount.toLocaleString();
    })
    .catch(err => {
        console.error(err);
        document.getElementById("activePlayers").textContent = "Error loading stats";
    });
