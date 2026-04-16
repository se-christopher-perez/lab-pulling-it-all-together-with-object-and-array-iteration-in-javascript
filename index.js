
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

const data = gameObject()

function numPointsScored(playerName) {

    for (const key in data) {

        for (const subKey in data[key]) {

            if (subKey === "players") {

                for (const player in data[key][subKey]) {

                    if (playerName === player) {

                        for (const stat in data[key][subKey][player]) {

                            if (stat === "points") {

                                console.log(stat)
                                return data[key][subKey][player][stat]

                            }

                        }

                    }

                }

            }

        }

    }

}

function shoeSize(playerName) {

    for (const key in data) {

        for (const subKey in data[key]) {

            if (subKey === "players") {

                for (const player in data[key][subKey]) {

                    if (playerName === player) {

                        for (const stat in data[key][subKey][player]) {

                            if (stat === "shoe") {

                                console.log(stat)
                                return data[key][subKey][player][stat]

                            }

                        }

                    }

                }

            }

        }

    }

}

function teamColors(teamName) {

    for (const key in data) {

        if (data[key]["teamName"] === teamName) {

            return data[key]["colors"]

        }

    }

}

function teamNames() {

    const teamArray = []

    for (const key in data) {

        teamArray.push(data[key]["teamName"])

    }

    return teamArray

}

function playerNumbers(teamName) {

    const playersNumberArray = []

    for (const key in data) {

        if (data[key]["teamName"] === teamName) {

            for (const subKey in data[key]) {

                console.log(subKey)
                console.log(data[key][subKey])

                if (subKey === "players") {

                    for (const player in data[key][subKey]) {

                        console.log(player)
                        console.log(data[key][subKey][player]["number"])

                        playersNumberArray.push(data[key][subKey][player]["number"])

                    }

                }

            }

        }

    }

    return playersNumberArray

}


function playerStats(playerName) {

    for (const key in data) {

        for (const subKey in data[key]) {

            if (subKey === "players") {

                for (const player in data[key][subKey]) {

                    console.log(player)
                    console.log(data[key][subKey][player])

                    if (player === playerName) {

                        return data[key][subKey][player]

                    }

                }

            }

        }

    }

}

function bigShoeRebounds() {

    const playersShoeSize = []

    for (const key in data) {

        for (const subKey in data[key]) {

            if (subKey === "players") {

                for (const player in data[key][subKey]) {

                    playersShoeSize.push(data[key][subKey][player]["shoe"])

                }

            }

        }

    }

    const largestShoe = playersShoeSize.reduce((prev, current) => {

                    return (prev > current) ? prev : current

                });

    for (const key in data) {

        for (const subKey in data[key]) {

            if (subKey === "players") {

                for(const player in data[key][subKey]) {

                    const playerStats = data[key][subKey][player]

                    if (playerStats["shoe"] >= largestShoe) {

                        return playerStats["rebounds"]

                    }

                }

            }

        }

    }

}

console.log(numPointsScored("Brendan Hayword"))

console.log(shoeSize("Brendan Hayword"))

console.log(teamColors("Brooklyn Nets"))

console.log(teamNames())

console.log(playerNumbers("Brooklyn Nets"))

console.log(playerStats("Alan Anderson"))

console.log(bigShoeRebounds())