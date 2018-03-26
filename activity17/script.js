/*

  In this assignmenmt you are given a list of student names. The challenge
  is to pair students by how similar their names are in edit distance.
  The pairing algorithm  pseudocode is:

  sort the students by last name (A to Z)
  while there is > 1 unpaired student
    X = the first unpaired student
    if X's first name begins with a vowel
      compute the Hamming distance to all other unpaired students

    if X's first name begins with a consonant
      compute the Levenshtein distance to all other unpaired students

    pair X with the most similar name, Y (ie shortest edit distance). If there
    is a tie in edit distance, sort the results by last name (A...Z) and
    take the first.

    remove X and Y from the list of unpaired students.


  to help you, you are provided with the scripts:
    levenshtein.js and hamming.js

  **THERE IS CURRENTLY A NAMING CONFLICT, solve this by wrapping each
    provided distance function the JavaScirpt namespace-like construct of your choice.

    YOU CANNOT SIMPLY RENAME the distance functions!
    YOU CANNOT MODIFY THE distance functions IN ANY WAY other than
    to implement your namespace construct!

    I suggest putting each in it's own unique object so in your main
    code you can write:
     hamming.distance(a,b)
      or
     levenshtein.distance(a,b)
 */

var names = ["Jordan Voves", "Keller Chambers", "Stefano Cobelli",
"Jenna Slusar", "Jason Corriveau", "Cole Whitley", "Dylan Zucker",
"Danny Toback", "Eric Marshall", "Allan La", "Natalie Altman",
"Evan Harrington", "Jack Napor", "Jingya Wu", "Christian Ouellette",
"Junjie Jiang", "Morgan Muller", "Sarah Xu", "Aleksandar Antonov",
"Parker Watson", "Haipu Sun", "Ryan Pencak", "Dan Kershner",
"John Venditti", "Jacob Mendelowitz", "Dunni Adenuga", "Jeff Lee",
"Uttam Kumaran", "Jack Hall-Tipping"]

var pairings = [];


/* STEP 1: SORT NAMES by LAST NAME! */

function compareNames(x, y) {
	var xSplit = x.split(" ");
	var ySplit = y.split(" "); 
	var lastNameX = xSplit[xSplit.length - 1];
	var lastNameY = ySplit[ySplit.length - 1];
	
	if (lastNameX < lastNameY) return -1;
	if (lastNameX > lastNameY) return 1;
	return 0; 
}

var sortedNames = names.sort(compareNames);


/* WHILE > 1 students are UNPAIRED
     take 1st student, compute distance to all others,
      pair with lowest score.
      */
while(sortedNames.length > 1) {
	var maxCount = 99;
	var maxI = 0;
	var out = 1;
	var i = 1;
	var pair = [];
	
	var x = sortedNames[0]; 
	
	//search for vowels 
	if (x[0] == "A" || "E" || "I" || "O" || "U") {
		for (i; i < sortedNames.length; i++) {
			out = distanceH(sortedNames[0], sortedNames[i]);
			console.log(sortedNames[i], out);
			if (out < maxCount) {
				maxCount = out;
				maxI = i; 
			}
		}
	} else {
		for (var i = 1; i < sortedNames.length; i++) {
			out = distanceL(sortedNames[0], sortedNames[i]);
			if (out < maxCount) {
				maxCount = out;
				maxI = i; 
			}
		}
	}
	
	pair = [sortedNames[0], sortedNames[maxI], maxCount];
	sortedNames.splice(0, 1);
	sortedNames.splice(maxI-1, 1);
	
	pairings = pairings.concat([pair]);
	console.log(sortedNames);
}

console.log("Final pairs: ");
console.log(pairings); 
	
