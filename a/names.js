var names = {};

names.nameList = [
    "Raphy FAN!",
    "Fan Of Raphy!",
    "Raphy Bot",
    "Raphy FAN! :D",
    "Raphy FAN!!!",
    "RAPHYBOOOYY",
    "I LUV RAPHY"
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
