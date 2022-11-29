const str = "44439999444336999 439999444337777 9444332229999666777336";
// const str = "6";

console.log(split(str));

function split(str) {
  const mapping = {
    " ": " ",
    2: "a",
    22: "b",
    222: "c",
    3: "d",
    33: "e",
    333: "f",
    4: "g",
    44: "h",
    444: "i",
    5: "j",
    55: "k",
    555: "l",
    6: "m",
    66: "n",
    666: "o",
    7: "p",
    77: "q",
    777: "r",
    7777: "s",
    8: "t",
    88: "u",
    888: "v",
    9: "w",
    99: "x",
    999: "y",
    9999: "z",
  };

  const array = [];

  let currentPart = "";
  for (let i = 0; i < str.length; i++) {
    const curr = str.charAt(i);
    const next = i + 1 < str.length ? str.charAt(i + 1) : null;
    currentPart += curr;

    if (curr !== next) {
      array.push(currentPart);
      currentPart = "";
    }
  }

  return array.reduce((result, e) => (result += mapping[e]), "");
}
