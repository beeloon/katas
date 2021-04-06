// First solution
function rot13(message) {
  const origin = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const replaces = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(
    /[a-zA-Z]/g,
    (letter) => replaces[origin.indexOf(letter)]
  );
}

// Clever solution
const rot13 = (str) =>
  str.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );
