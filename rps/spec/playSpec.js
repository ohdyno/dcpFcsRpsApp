const { RPS } = require('../src/rps');
const FakeRepo = require('./fakeRepo')

describe("RPS", function () {
    let repo = new FakeRepo();
    const rps = new RPS(repo);
    describe("play a single round", function () {
        describe("for valid inputs", function () {
            describe("and player 1 wins", function () {
                let uiSpy = {
                    player1Wins: jasmine.createSpy('player1WinsSpy')
                };

                it("tells the ui for rock vs. scissors", function () {
                    rps.playRound("rock", "scissors", uiSpy);
                    expect(uiSpy.player1Wins).toHaveBeenCalled()
                });

                it("tells the ui for scissors vs. paper", function () {
                    rps.playRound("scissors", "paper", uiSpy);
                    expect(uiSpy.player1Wins).toHaveBeenCalled()
                });

                it("tells the ui for paper vs. rock", function () {
                    rps.playRound("paper", "rock", uiSpy);
                    expect(uiSpy.player1Wins).toHaveBeenCalled()
                });
            });

            describe("and player 2 wins", function () {
                let uiSpy = {
                    player2Wins: jasmine.createSpy('player2WinsSpy')
                };

                it("tells the ui for scissors vs. rock", function () {
                    rps.playRound("scissors", "rock", uiSpy);
                    expect(uiSpy.player2Wins).toHaveBeenCalled()
                });

                it("tells the ui for rock vs. paper", function () {
                    rps.playRound("rock", "paper", uiSpy);
                    expect(uiSpy.player2Wins).toHaveBeenCalled()
                });

                it("tells the ui for paper vs. scissors", function () {
                    rps.playRound("paper", "scissors", uiSpy);
                    expect(uiSpy.player2Wins).toHaveBeenCalled()
                });
            });

            describe("and tie", function () {
                let uiSpy = {
                    tie: jasmine.createSpy('tieSpy')
                };

                it("tells the ui for the same throws", function () {
                    rps.playRound("rock", "rock", uiSpy);
                    expect(uiSpy.tie).toHaveBeenCalled()
                });
            });
        });
        describe("for invalid inputs", function () {
            let uiSpy = {
                invalid: jasmine.createSpy('invalidSpy')
            };

            it('tells the ui for player 1 invalid throw', function () {
                rps.playRound('sailboat', 'rock', uiSpy);
                expect(uiSpy.invalid).toHaveBeenCalled()
            });

            it('tells the ui for player 2 invalid throw', function () {
                rps.playRound('rock', 'sailboat', uiSpy);
                expect(uiSpy.invalid).toHaveBeenCalled()
            });
        });
    });
});