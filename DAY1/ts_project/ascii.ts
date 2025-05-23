

function getAscii(word: String): Array<number> {
    let asciiNumbers: Array<number> = [];
    for(let i: number=0; i < word.length; i++) {
        asciiNumbers.push(word[i].charCodeAt(0));
    }
    
    return asciiNumbers;
}

const ascii: Array<Number> = getAscii("Word_1");
console.log(ascii);











function getAsciiFactorized(word: string): number[] {
    return [...word].map(char => char.charCodeAt(0));
  }