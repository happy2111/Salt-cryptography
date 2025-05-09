// let TEXT = "sentence to test the script";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function toACII(x) {
  return x.charCodeAt(0);
}

function toDefault(x) {
  return String.fromCharCode(x);
}

function randomSymbol() {
  let numbers = getRndInteger(48, 58);
  let upper = getRndInteger(65, 91);
  let lower = getRndInteger(97, 123);
  let arr = [numbers, upper, lower];
  return arr[getRndInteger(0, 3)];
}

function randomText() {
  let rtLength = getRndInteger(3, 11);
  let randomText = "";
  for (let i = 0; i < rtLength; i++) {
    randomText += toDefault(randomSymbol());
  }
  return [randomText, rtLength];
}

function putTextToRandomPossition(t) {
  let rp = getRndInteger(0, t.length); 
  let rndT = randomText();
  let newText = t.slice(0, rp) + rndT[0] + t.slice(rp);
  return [newText, rp, rndT[1]];
}

function changeTheSymbols(t, len, rp) {
  let acii = [],
    changed = "";
  let rndNumber = getRndInteger(1, 10);
  for (const i of t) {
    acii.push(toACII(i) + rndNumber);
  }
  for (const j of acii) {
    changed += toDefault(j);
  }
  return (
    String(rp).padStart(2, "0") +
    String(len).padStart(2, "0") +
    changed +
    String(rndNumber)
  );
}



function decipherFirstPart(encrypted) {
  let lastSymbol = parseInt(encrypted[encrypted.length - 1]);
  let rp = parseInt(encrypted.slice(0, 2)); 
  let len = parseInt(encrypted.slice(2, 4)); 
  let s = "";

  for (let i = 4; i < encrypted.length - 1; i++) {
    s += toDefault(toACII(encrypted[i]) - lastSymbol);
  }


  return [rp, len, s];
}

function decipherSecondPart(deciphered) {
  let rp = deciphered[0];
  let len = deciphered[1];
  let originalText = deciphered[2];

  let cleanedText = originalText.slice(0, rp) + originalText.slice(rp + len);
  return cleanedText;
}

// **************Integration with DOM*****************************************************


let shiftInput = document.querySelector("#shiftInput");
let shiftOutput = document.querySelector("#shifrOutput");
let deshiftInput = document.querySelector("#deshiftInput");
let deshiftOutput = document.querySelector("#deshifrOutput");
let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");

form1.addEventListener("submit", (e) => {
  e.preventDefault(); 
  let rndText = putTextToRandomPossition(shiftInput.value);
  let saltedText = rndText[0];
  let rndPos = rndText[1];
  let encryptedText = changeTheSymbols(saltedText, rndText[2], rndPos);
  shiftOutput.value = encryptedText
  shiftInput.value = ""
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();  
  let decryptedData = decipherFirstPart(deshiftInput.value);
  let decryptedText = decipherSecondPart(decryptedData);
  deshiftOutput.value = decryptedText;
  deshiftInput.value = "";
})
