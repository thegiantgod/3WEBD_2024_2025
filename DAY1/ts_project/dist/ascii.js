function getAscii(word) {
    let asciiNumbers = [];
    for (let i = 0; i < word.length; i++) {
        asciiNumbers.push(word[i].charCodeAt(0));
    }
    return asciiNumbers;
}
const ascii = getAscii("Word_1");
console.log(ascii);
function getAsciiFactorized(word) {
    return [...word].map(char => char.charCodeAt(0));
}
//# sourceMappingURL=ascii.js.map