// /*
//     Name: Habtamu Debele
//     Amazon_SD calss at FLatiron

// */

function gameObject(){
    return {
        "home": {
            "teamName": "Brooklyn Nates",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    Number: 0,
                    Shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 1
                },
                "Reggie Evans": {
                    Number: 30,
                    Shoe: 14,
                    Points: 12,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 12,
                    Blocks: 12,
                    SlamDunks: 7,
                },
                "Brook Lopez": {
                    Number: 11,
                    Shoe: 17,
                    Points: 17,
                    Rebounds: 19,
                    Assists: 10,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 15,
                },
                "Mason Plumlee": {
                    Number: 1,
                    Shoe: 19,
                    Points: 26,
                    Rebounds: 12,
                    Assists: 6,
                    Steals: 3,
                    Blocks: 8,
                    SlamDunks: 5
                },
                "Jason Terry": {
                    Number: 31,
                    Shoe: 15,
                    Points: 19,
                    Rebounds: 2,
                    Assists: 2,
                    Steals: 4,
                    Blocks: 11,
                    SlamDunks: 1
                },
            },
        },

        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    Number: 4,
                    Shoe: 18,
                    Points: 10,
                    Rebounds: 1,
                    Assists: 1,
                    Steals: 2,
                    Blocks: 7,
                    SlamDunks: 2
                },
                "Bismak Biyombo": {
                    Number: 0,
                    Shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assists: 7,
                    Steals: 7,
                    Blocks: 15,
                    SlamDunks: 10
                },
                "DeSagna Diop": {
                    Number: 2,
                    Shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 4,
                    Blocks: 5,
                    SlamDunks: 5
                },
                "Ben Gordon": {
                    Number: 8,
                    Shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assists: 2,
                    Steals: 1,
                    Blocks: 1,
                    SlamDunks: 0
                },
                "Brendan Haywood": {
                    Number: 33,
                    Shoe: 15,
                    Points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    Blocks: 5,
                    SlamDunks: 12
                },
            }
        }
    }
}

const game = gameObject()
// console.log(gameObject())

//FINDING PLAYER AND LISTING THEM IN AN ARRAY
const players = [game.home.players, game.away.players]
// console.log(players)

const allPlayers = function(){
    const all = players.map(function(team){
        const newArr = []
        for(const player in team){
            newArr.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr
    })
    return all.flat()
}
// console.log(allPlayers())

// FINDING A PLAYER
const findPlayer = function(playerName){
    return allPlayers().find(player =>{
        return player.nameOfPlayer === playerName
    })
}
// console.log(findPlayer("Jeff Adrien"))

// PLAYER'S SCORE
function numPointsScored(playerName){
    return findPlayer(playerName).Points
}

function numJersey(playerName){
    return findPlayer(playerName).Number
}

// console.log(numJersey("Jeff Adrien"))
// console.log(`Jeff Adrien has: ${numPointsScored("Jeff Adrien")} points`)
// console.log(numPointsScored("Alan Anderson"))

// PLAYER's SHOES SIZE
const shoeSize = function (playerName){
    return findPlayer(playerName).Shoe
}
// console.log(`Jeff Adrien has: ${shoeSize("Jeff Adrien")} shoe size.`)
// console.log(`Alan Anderson: ${shoeSize("Alan Anderson")} shoe size.`)

// TEAM COLORS
function isHome(teamName){
    
    return teamName === homeTeam.teamName
}

const homeTeam = game.home
const awayTeam = game.away

// console.log(homeTeam.teamName)
// debugger
// console.log(isHome("Brooklyn Nets"))

// console.log(homeTeam)
function teamColors(teamName){
    if(teamName === homeTeam.teamName){
        return homeTeam.colors
    }
    return awayTeam.colors
    // return isHome(teamName)
}
// console.log(`The team color for Brooklyn Nates is ${teamColors("Brooklyn Nates")}`)
// console.log(`The team color for Brooklyn Nates is ${teamColors("Charlotte Hornets")}`)

// LIST OF TEAM NAMES AS AN ARRAY
function teamNames(){
    let namesArray = []
    namesArray.push(homeTeam.teamName, awayTeam.teamName)
    return namesArray
 }
// console.log(teamNames())

//FINDING PLAYER NUMBERS PROVIDED WITH TEAM NAME

function playerNumbers(teamName){
    const gameListNum = []
    for(const gameKey in game){
        if(game[gameKey].teamName === teamName){
            for(const player in game[gameKey].players){
                if(player === findPlayer(player)){
                    gameListNum.push(numJersey(player))
                    console.log(gameListNum)
                }
            }
        }
    }
    return gameListNum
}
 
 console.log(playerNumbers("Brooklyn Nates"))

//PLAYER STATUS GIVEN PLAYER NAME
 function playerStats(playerName){
     let newObj = {}
    const allPlayers = players.map(function(team){
        for(const player in team){
            if(playerName === player){
                newObj = {...team[player]}
            }
        }
    })
    return newObj  
 }
//  console.log("Alan Anderson")
//  console.log(playerStats("Alan Anderson"))

//BIGGEST REBOUND BASED ON THEIR SHOES SIZE
function bigShoeRebounds(){
    let shoeSizes = []
    debugger
    let playerShoe = allPlayers().Shoe
  shoeSizes.push(playerShoe)
}

console.log(bigShoeRebounds())
// // function shoeSize(playerName)
   