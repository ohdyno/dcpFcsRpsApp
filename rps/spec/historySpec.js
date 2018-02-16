const { RPS, Round } = require('../src/rps');
const FakeRepo = require('./fakeRepo');

describe("history", function () {
    let rps;

    beforeEach(function() {
      rps = new RPS(new FakeRepo());
    });

    describe("for when no rounds have been played", function () {
        let uiSpy;
        beforeEach(function () {
            uiSpy = {
                noRounds: jasmine.createSpy('noRoundsSpy')
            };
        });

        it("tells the UI that no rounds have been played", function () {
            rps.getHistory(uiSpy);
            expect(uiSpy.noRounds).toHaveBeenCalled()
        });
    });

    describe("for when rounds have been played", function () {
        let uiSpy;
        beforeEach(function () {
            uiSpy = {
                roundsPlayed: jasmine.createSpy('roundsPlayedSpy'),
                player1Wins: function() {}
            };

            rps.playRound('rock', 'scissors', uiSpy)
        });

        it("tells the UI that rounds have been played", function () {
            rps.getHistory(uiSpy);
            expect(uiSpy.roundsPlayed).toHaveBeenCalledWith(
                [new Round('rock', 'scissors', 'player 1 wins')]
            )
        });
    });
});