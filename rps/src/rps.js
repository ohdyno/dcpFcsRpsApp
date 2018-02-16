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
        if (this.invalidThrows(p1Throw, p2Throw)) {
            ui.invalid();
            result = 'invalid';
        } else if (this.tie(p1Throw, p2Throw)) {
            ui.tie();
            result = 'tie';
        } else if (this.p1Wins(p1Throw, p2Throw)) {
            ui.player1Wins();
            result = 'player 1 wins';
        } else {
            ui.player2Wins();
            result = 'player 2 wins'
        }

        this.repo.save(new Round(p1Throw, p2Throw, result));
    }

    p1Wins(p1Throw, p2Throw) {
        return p1Throw === 'rock' && p2Throw === 'scissors' ||
            p1Throw === 'scissors' && p2Throw === 'paper' ||
            p1Throw === 'paper' && p2Throw === 'rock';
    }

    tie(p1Throw, p2Throw) {
        return p1Throw === p2Throw;
    }

    invalidThrows(p1Throw, p2Throw) {
        return this.invalidThrow(p1Throw) || this.invalidThrow(p2Throw);
    }

    invalidThrow(playerThrow) {
        return playerThrow !== 'rock' && playerThrow !== 'scissors' && playerThrow !== 'paper';
    }

    getHistory(ui) {
        if (this.repo.isEmpty()) {
            ui.noRounds();
        } else {
            ui.roundsPlayed(this.repo.getAllRounds())
        }
    }
}

module.exports = {RPS, Round};