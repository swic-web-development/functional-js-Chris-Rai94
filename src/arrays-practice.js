// filter method
const players = [
    { name: 'DoomGuy', frags: 25, deaths: 0 },
    { name: 'Slayer', frags: 25, deaths: 1 },
    { name: 'Marine', frags: 12, deaths: 15 },
    { name: 'Noob', frags: 0, deaths: 25 },
  ];

const playersWithMoreFragsThanDeaths = players.filter((player) => {
    console.log(`We are now looking at this player: ${player.name}`);

    return player.frags > player.deaths;
})

console.log(playersWithMoreFragsThanDeaths);

// reduce method

const totalFrags = players.reduce((total, player) => {
    return total + player.frags;
}, 0);
console.log(totalFrags);

// find method

const firstPlayerWithMoreFragsThanDeaths = players.find((player) => {
    return player.frags > player.deaths;
});
console.log(firstPlayerWithMoreFragsThanDeaths);//This reminds me of the break method in loops.

//some method
const hasFrags = players.some((player) => player.frags)
console.log(hasFrags); /*It is hard to wrap my mind around implicit coercion.
I am not used to it as most code I have written needed everything to be spelled out.*/

//every method
const allPlayersHaveMoreFragsThanDeaths = players.every((player) => player.frags > player.deaths);
console.log(allPlayersHaveMoreFragsThanDeaths);

//sort method
const sortedPlayers = players.sort((a, b) => b.frags - a.frags);
console.log(sortedPlayers);

const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5 },
    { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
    { item: 'rockets', quantity: 1, priceEa: 5.0 },
    { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
  ];

const totalValue = backpackFullOfAmmo.reduce((total, ammo) => {//Creates the total value of the ammo in the backpack.
    return total + ammo.quantity * ammo.priceEa;
}, 0);
console.log(totalValue);//Display the total value of the ammo in the backpack.

const monsters = [
    // Deals 10-60 damage per bite
    { name: 'Cacodemon', health: 400, damage: 35 },
    
    // Deals 15-75 damage per claw/fireball
    { name: 'Baron of Hell', health: 1000, damage: 45 },
    
    // Deals 20-200 damage per rocket
    { name: 'Cyberdemon', health: 4000, damage: 125 },
    
    // Deals 5-50 damage per bite
    { name: 'Hell Knight', health: 800, damage: 25 },
    
    // Deals 10-100 damage per bite
    { name: 'Imp', health: 200, damage: 20 },
    
    // Deals 5-25 damage per bite
    { name: 'Lost Soul', health: 100, damage: 10 },
    
    // Deals 5-50 damage per bite
    { name: 'Pinky', health: 300, damage: 15 },
    
    // Deals 10-100 damage per bite
    { name: 'Revenant', health: 500, damage: 30 },
    
    // Deals 5-50 damage per bite
    { name: 'Spectre', health: 200, damage: 20 },
    
    // Deals 5-50 damage per bite
    { name: 'Spider Mastermind', health: 2000, damage: 50 },
    
    // Deals 5-50 damage per bite
    { name: 'Vile', health: 1000, damage: 40 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombie', health: 100, damage: 5 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombieman', health: 200, damage: 10 },
  ];

const monsterNames = monsters.map((monster) => monster.name);
console.log(monsterNames);


