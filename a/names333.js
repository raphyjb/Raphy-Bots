var names = {};

names.nameList = [
    "The Real Jumbo",
	"Official Jumbo",
	"Baby Jumbo",
	"Junior Jumbo",
	"Jumbo`s Ex-Wife",
	"Be A Jumbo Fan!",
	"Jumbo",
	"Jumbo",
	"Sub : Jumbo",
	"Jumbo Warrior",
	"Love Jumbo",
	"Sexy Jumbo",
	"I Love My Fans",
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
