// Tout d'abord nous allons creer notre fonction qui prend un tableau d'entier en parametre

function numberToString(intArray) {
  let numbersStrings = {
    1: "un",
    2: "deux",
    3: "trois",
    4: "quatre",
    5: "cinq",
    6: "six",
    7: "sept",
    8: "huit",
    9: "neuf",
    10: "dix",
  };

  let stringArray = [];

  for (let i = 0, c = intArray.length; i < c; i++) {
    stringArray[i] = numbersStrings[intArray[i]];
  }

  return stringArray;
}


module.exports = numberToString;
