function mostRepeated(str) {
  let freqCounter = {};
  let lowStr = str.toLowerCase();
  let maxCount = 0;
  let maxChar = null;
  let repetition = null;

  for (let char of lowStr) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }

  for (let key in freqCounter) {
    if (freqCounter[key] > maxCount) {
      maxCount = freqCounter[key];
      maxChar = key;
      repetition = freqCounter[key];
    }
  }
  return `${maxChar} es el caracter más repetido, con ${repetition} apariciones en ${str}`;
}

function repeatedV2(str) {
  let lowStr = str.toLowerCase();
  let contFinal = 0;
  let letra = '';

  for (let i = 0; i < lowStr.length; i++) {
    let contadorTemp = 1;
    for (let j = i + 1; j < lowStr.length; j++) {
      if (lowStr.charAt(i) == lowStr.charAt(j)) contadorTemp++;
    }
    if (contadorTemp > contFinal) {
      contFinal = contadorTemp;
      letra = lowStr.charAt(i);
    }
  }

  return `${letra} se repite ${contFinal} veces`;
}

// Reverse a string ------------------------------------------------------------------------------

function reversedStr(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// Palindromo ------------------------------------------------------------------------------
function esPal(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return str.toLowerCase().split(' ').join('') ==
    newStr.toLocaleLowerCase().split(' ').join('')
    ? `${str} es un palindromo`
    : `${str} no es un palindromo`;
}

