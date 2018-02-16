const {Round} = require('../src/rps');

function runContractAgainst(ConstructRepo) {
    describe("repository contract", function () {
        let repo;

        beforeEach(function () {
            repo = ConstructRepo();
        });

        describe("when the repository with no rounds and calling isEmpty", function () {
            describe("for isEmpty", function () {
                it("returns true", function () {
                    expect(repo.isEmpty()).toEqual(true)
                });
            });

            describe("for getAllRounds", function () {
                it("returns an empty array", function () {
                    expect(repo.getAllRounds()).toEqual([])
                });

            });
        });

        describe("when the repository has rounds", function () {
            const round1 = new Round('foo', 'bar', 'baz');
            const round2 = new Round('a', 'b', 'c');

            beforeEach(function () {
                repo.save(round1);
                repo.save(round2)
            });

            describe("for isEmpty", function () {
                it('returns false', function () {
                    expect(repo.isEmpty()).toEqual(false)
                });
            });

            describe("for getAllRounds", function () {
                it("returns an array with the round saved", function () {
                    expect(repo.getAllRounds()).toContain(round1, round2)
                });
            });
        });
    });
}

module.exports = runContractAgainst;