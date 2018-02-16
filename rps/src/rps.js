class RPS {
    playRound(p1Throw, p2Throw, ui) {
        if (this.invalidThrow(p1Throw) || this.invalidThrow(p2Throw)) {
            ui.invalid();
            return
        }
        if (p1Throw === p2Throw) {
            ui.tie();
            return
        }
        if (p1Throw === 'rock' && p2Throw === 'scissors' ||
            p1Throw === 'scissors' && p2Throw === 'paper' ||
            p1Throw === 'paper' && p2Throw === 'rock') {
            ui.player1Wins();
            return
        }
        ui.player2Wins()
    }

    getHistory(ui) {
        ui.noRounds()
    }

    invalidThrow(playerThrow) {
        return playerThrow !== 'rock' && playerThrow !== 'scissors' && playerThrow !== 'paper';
    }
}

module.exports = RPS;