import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const finals2014 = fifaData.filter(function (item) {
	return item.Year === 2014 && item.Stage === 'Final';
});

console.log(finals2014);

//(a) Home Team name for 2014 world cup final

const homeTeam = finals2014.map((home) => home['Home Team Name']);

console.log(homeTeam);

//(b) Away Team name for 2014 world cup final

const awayTeam = finals2014.map((away) => away['Away Team Name']);

console.log(awayTeam);

//(c) Home Team goals for 2014 world cup final

const homeGoals = finals2014.map((goals) => goals['Home Team Goals']);

console.log(homeGoals);

//(d) Away Team goals for 2014 world cup final

const awayGoals = finals2014.map((goals) => goals['Away Team Goals']);

console.log(awayGoals);

//(e) Winner of 2014 world cup final */

const winner = function (homeCB, awayCB, homeScoreCB, awayScoreCB) {
	if (homeScoreCB === awayScoreCB) {
		return 'Tie';
	} else if (homeScoreCB > awayScoreCB) {
		return `${homeCB} wins!`;
	} else {
		return `${awayCB} wins!`;
	}
};

console.log(winner(homeTeam, awayTeam, homeGoals, awayGoals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
	const finalTeams = data.filter((item) => item.Stage === 'Final');

	return finalTeams;
}

console.log(getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, getFinalsCB) {
	let data = getFinalsCB(array);
	const years = [];

	data.map((year) => years.push(year.Year));

	// for (let i = 0; i < data.length; i++) {
	// 	years.push(data[i].Year);
	// }

	return years;
}
console.log(getYears(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(array, getFinalsCB) {
	let data = getFinalsCB(array);
	const winners = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i]['Home Team Goals'] > data[i]['Away Team Goals']) {
			winners.push(data[i]['Home Team Name']);
		} else {
			winners.push(data[i]['Away Team Name']);
		}
	}

	return winners;
}

console.log(getWinners(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getYearsCB, getWinnersCB) {
	let years = getYearsCB(array, getFinals);
	let winners = getWinnersCB(array, getFinals);
	const games = [];

	for (let i = 0; i < years.length; i++) {
		games.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
	}

	return games;
}

console.log(getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals) {
	const data = getFinals;

	const homeScoreTotals = data.reduce(function (accumulator, data) {
		return accumulator + data['Home Team Goals'];
	}, 0);

	const awayScoreTotals = data.reduce(function (accumulator, data) {
		return accumulator + data['Away Team Goals'];
	}, 0);

	return ((homeScoreTotals + awayScoreTotals) / data.length).toFixed(2);
}

console.log(getAverageGoals(getFinals(fifaData)));

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
	/* code here */
}

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
	/* code here */
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
	/* code here */
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
	console.log('its working');
	return 'bar';
}
export default {
	foo,
	getFinals,
	getYears,
	getWinners,
	getWinnersByYear,
	getAverageGoals,
};
