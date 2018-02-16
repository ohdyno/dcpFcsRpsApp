class RPS {
    playRound(p1, p2, ui) {
        if (this.invalidInput(p1) || this.invalidInput(p2)) {
            ui.invalid();
            return
        }
        if (p1 === p2) {
            ui.tie();
            return
        }
        if (p1 === 'rock' && p2 === 'scissors' ||
            p1 === 'scissors' && p2 === 'paper' ||
            p1 === 'paper' && p2 === 'rock') {
            ui.player1Wins();
            return
        }
        ui.player2Wins()
    }

    invalidInput(p1) {
        return p1 !== 'rock' && p1 !== 'scissors' && p1 !== 'paper';
    }
}

module.exports = RPS;