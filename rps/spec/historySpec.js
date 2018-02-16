const RPS = require('../src/rps');

describe("history", function () {
    const rps = new RPS();
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
});