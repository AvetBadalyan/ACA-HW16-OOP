class Shiritori {
    constructor() {
        this.words = [];
        this.gameOver = false;
        
}

    play(word) {
        word = word.toUpperCase();
        let wordsArr = this.words;
        let lastWord = wordsArr[wordsArr.length - 1];
        if (wordsArr.length === 0) {
            wordsArr.push(word);
            return wordsArr;
        } else if (word[0] === lastWord[lastWord.length-1] && wordsArr.indexOf(word) === -1) {
                wordsArr.push(word);
                return wordsArr;
            } else {
                this.gameOver = true;
                return `Game Over`
            }
    }
    
    restart() {
        this.words = [];
        this.gameOver = false;
        return `The game restarted`
    }
}

const firstRound = new Shiritori();

firstRound.play("Avet");
firstRound.play("Tatev")
console.log(firstRound.play("Venera"))
console.log(firstRound.play("Avet"))

