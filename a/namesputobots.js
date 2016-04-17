var names = {};

names.nameList = [
    "I Luv Pussy",
	"Your The Cunt",
	"GoFuckYourSelf",
	"?? Ur a nub..",
	"Leave Me Alone",
	"Are U Retard?",
	"Get A Life",
    "You Got Rekt",
    "Die Madah facka",
    "? What ?",
    " G T F O ",
    "Raphy FANS! :D",
    "Raphy Fans! :)",
    "Bait",
    "Suck Me Hard",
    "Raphy FANNN",
    "Raphy Fan :D",
    "? Fuck you..",
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
