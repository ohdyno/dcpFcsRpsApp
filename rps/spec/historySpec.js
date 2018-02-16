const RPS = require('../src/rps');

describe("history", function () {
    describe("for when no rounds have been played", function () {
        it("tells the UI that no rounds have been played", function () {
            const rps = new RPS();
            let uiSpy = {
                noRounds: jasmine.createSpy('noRoundsSpy')
            };
            rps.getHistory(uiSpy);
            expect(uiSpy.noRounds).toHaveBeenCalled()
        });
    });
});