/*
Your penalty charge is a combination of numbers like: speed of your car, speed
limit in the area, speed of the police car chasing you, the number of police cars
involved, etc. So, your task is to combine the given numbers and make the penalty
charge to be as small as possible.
For example, if you are given numbers [45, 30, 50, 1] your best choice is 1304550
*/


const speedPenalty = numList => {
	// sort the list
	var sortedList = numList.sort();
	var finalPenalty = "";
	// add every number of the sortedList to the finalPenalty
	for ( var i = 0; i < sortedList.length; i++ ) {
		finalPenalty += sortedList[ i ];
	}
	return finalPenalty;
};


console.log( speedPenalty([ 45, 30, 50, 1 ]) );
