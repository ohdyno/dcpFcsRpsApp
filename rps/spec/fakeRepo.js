class FakeRepo {
    constructor() {
        this.rounds = []
    }

    isEmpty() {
        return this.rounds.length === 0
    }

    save(round) {
        this.rounds.push(round)
    }

    getAllRounds() {
        return this.rounds;
    }
}

module.exports = FakeRepo;