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

const totalValue = backpackFullOfAmmo.reduce((total, ammo) => {
    return total + ammo.quantity * ammo.priceEa;
}, 0);
console.log(totalValue);




