const gameId1 = 10016841656;
const gameId2 = 6756145250;

Promise.all([
    fetch(`https://games.roproxy.com/v1/games?universeIds=${gameId1}`),
    fetch(`https://games.roproxy.com/v1/games?universeIds=${gameId2}`)
])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(dataArray => {
        const info1 = dataArray[0].data[0];
        const info2 = dataArray[1].data[0];

        const totalActivePlayers = info1.playing + info2.playing;
        const totalVisits = info1.visits + info2.visits;
        const totalLikes = info1.favoritedCount + info2.favoritedCount;

        document.getElementById("activePlayers").textContent =
            "Active Players: " + totalActivePlayers;

        document.getElementById("visits").textContent =
            "Total Visits: " + totalVisits.toLocaleString();

        document.getElementById("likes").textContent =
            "Likes: " + totalLikes.toLocaleString();
    })
    .catch(err => {
        console.error(err);
        document.getElementById("activePlayers").textContent = "Error loading stats";
    });
