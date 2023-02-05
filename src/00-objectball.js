function gameObject()
{
    const newObject=
    {
        home:
        {
            teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players:
            [
                {
                    name:'Alan Anderson',
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks:1 
                },
                {
                    name:'Reggie Evans',
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks:7 
                },
                {
                    name:'Brook Lopez',
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                {
                    name:'Mason Plumlee',
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks:5 
                },
                {
                    name:'Jason Terry',
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            ]
        },
        away:
        {
            teamName:'Charlotte Hornets',
            colors:['Turquoise','Purple'],
            players:
            [
                {
                    name:'Jeff Adrien',
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks:2 
                },
                {
                    name:'Bismak Biyombo',
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10 
                },
                {
                    name:'DeSagna Diop',
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },
                {
                    name:'Ben Gordon',
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },
                {
                    name:'Brendan Haywood',
                    number:33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals:22,
                    blocks: 5,
                    slamDunks: 12 
                }
            ]
        }
    }
    return newObject;
}

function numPointsScored(inputName)
{
    let obj=gameObject();

    // For every object within our game object
    for (const teamKey in obj)
    {   
        // define team (home the first time, away the second time)
        // to make the code easier to read
        const team=obj[teamKey];
        // For every object within each team (home/away)
        for (const playerIndex in team.players)
        {
            // define player (each player in the array)
            // to make the code easier to read   
            const player=team.players[playerIndex];
            // when we get a player name that matches the input...
            if (player.name===inputName)
            {
                // return that player's points
                return player.points;
            }
        }
    }

    /////////////////////////////////////
    // SOLVED USING .forEach but not  //
    // what the lab was looking for   //
    ///////////////////////////////////

    // Object.values(obj).forEach(value=>
    // {
    //     var players=value.players;
    //     players.forEach(player=>
    //     {
    //         if (player.name===inputName)
    //         {
    //             answer=player.points;
    //         }
    //     })
    // });
    // return answer;
}

function shoeSize(inputName)
{
    let obj=gameObject();
   
    for (const teamKey in obj)
    {   
        const team=obj[teamKey];
        for (const playerIndex in team.players)
        {
            const player=team.players[playerIndex];
            if (player.name===inputName)
            {
                return player.shoe;
            }
        }
    }
}

function teamColors(teamName)
{
    let obj=gameObject();

    for (const teamKey in obj)
    {
        const team=obj[teamKey];
        if (team.teamName===teamName)
        {
            return team.colors;
        }
    }

}

function teamNames()
{
    let obj=gameObject();
    for (const teamKey in obj)
    {
        return obj[teamKey].teamName;
    }
}

function playerNumbers(teamName)
{
    let playerNums=[];
    let obj=gameObject();

    for (const teamKey in obj)
    {   
        const team=obj[teamKey];
        if (team.teamName!==teamName) continue
        for (const playerIndex in team.players)
        {
            const player=team.players[playerIndex];
            playerNums.push(player.number);
        }
        
    }
    return playerNums;
}


function bigShoeRebounds()
{
    let obj=gameObject();
    let playerIWant={shoe:0};

    for (const teamKey in obj)
    {
        const team=obj[teamKey];
        for (const playerIndex in team.players)
        {
            const player=team.players[playerIndex];
            if (player.shoe>playerIWant.shoe)
            {
                playerIWant=player;
            }
        }
    }
    return playerIWant.rebounds;
}


function winningTeam()
{
    let obj=gameObject();
    let teamIWant;
    let topScore=0;

    for (const teamKey in obj)
    {
        let points=0;
        const team=obj[teamKey];
        for (const playerIndex in team.players)
        {
            const player=team.players[playerIndex];
            points=points+player.points;
        }
        if (points>topScore)
        {
            topScore=points;
            teamIWant=team.teamName;
            console.log(teamIWant);
        }
    }
    
}

winningTeam();


// console.log(bigShoeRebounds());
// console.log(playerNumbers('Charlotte Hornets'));
// console.log(teamNames());
//console.log(teamColors("Charlotte Hornets"));
// console.log(numPointsScored('Ben Gordon'));
// console.log(shoeSize('Ben Gordon'));