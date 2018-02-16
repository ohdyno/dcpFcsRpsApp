class Round {
    constructor(p1Throw, p2Throw, result) {
        this.p1Throw = p1Throw;
        this.p2Throw = p2Throw;
        this.result = result;
    }

}

class RPS {
    constructor(repo) {
        this.repo = repo
    }

    playRound(p1Throw, p2Throw, ui) {
        let result;
        if (this.invalidThrow(p1Throw) || this.invalidThrow(p2Throw)) {
            ui.invalid();
            result = 'invalid';
        } else if (p1Throw === p2Throw) {
            ui.tie();
            result = 'tie';
        } else if (p1Throw === 'rock' && p2Throw === 'scissors' ||
            p1Throw === 'scissors' && p2Throw === 'paper' ||
            p1Throw === 'paper' && p2Throw === 'rock') {
            ui.player1Wins();
            result = 'player 1 wins';
        } else {
            ui.player2Wins()
            result = 'player 2 wins'
        }

        const round = new Round(p1Throw, p2Throw, result);
        this.repo.save(round);
    }

    getHistory(ui) {
        if (this.repo.isEmpty()) {
            ui.noRounds();
        } else {
            ui.roundsPlayed(this.repo.getAllRounds())
        }
    }

    invalidThrow(playerThrow) {
        return playerThrow !== 'rock' && playerThrow !== 'scissors' && playerThrow !== 'paper';
    }
}

module.exports = {RPS, Round};