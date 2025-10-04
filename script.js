let printableAscii = [];
for (let i = 32; i <= 126; i++) {
  printableAscii.push(String.fromCharCode(i));
}


function passWordGeneration() {
  const passWord = []
  for (i = 0; i < printableAscii.length; i++) {
    const randomPassword = Math.floor(Math.random() * printableAscii.length)
    const generatedPassword = printableAscii[randomPassword]
    passWord.push(generatedPassword)
  }
  return passWord.join("")
}


console.log(passWordGeneration())