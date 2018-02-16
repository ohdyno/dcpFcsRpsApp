const ReactDOM = require('react-dom');
const React = require('react');
const RPSApp = require('../src/web');

describe("play form", function () {
    beforeEach(setUpDom);

    let rpsStub;

    describe("when no rounds have been played", function () {
        beforeEach(function() {
            renderApp()
        });

        it("does not show any result", function () {
            expect(pageContent()).not.toContain('invalid');
            expect(pageContent()).not.toContain('player 1 wins');
            expect(pageContent()).not.toContain('player 2 wins');
            expect(pageContent()).not.toContain('tie')
        });

    });

    describe("when RPS.play tells the UI that the input is invalid", function () {
        beforeEach(function () {
            rpsStub = {
                play: function (p1, p2, ui) {
                    ui.invalid()
                }
            };
            renderApp(rpsStub);
        });

        it('tells the user that their input is invalid', function () {
            play();
            expect(pageContent()).toContain('invalid')
        });
    });

    describe("when RPS.play tells the UI that player 1 wins", function () {
        beforeEach(function () {
            rpsStub = {
                play: function (p1, p2, ui) {
                    ui.player1Wins()
                }
            };
            renderApp(rpsStub);
        });

        it('tells the user that player 1 wins', function () {
            play();
            expect(pageContent()).toContain('player 1 wins')
        });

    });

    describe("when RPS.play tells the UI that player 2 wins", function () {
        beforeEach(function () {
            rpsStub = {
                play: function (p1, p2, ui) {
                    ui.player2Wins()
                }
            };
            renderApp(rpsStub);
        });

        it('tells the user that player 2 wins', function () {
            play();
            expect(pageContent()).toContain('player 2 wins')
        });

    });

    describe("when RPS.play tells the UI that players tied", function () {
        beforeEach(function () {
            rpsStub = {
                play: function (p1, p2, ui) {
                    ui.tie()
                }
            };
            renderApp(rpsStub);
        });

        it('tells the user that players tied', function () {
            play();
            expect(pageContent()).toContain('tie')
        });

    });

    afterEach(teardownDom);
});

let domFixture;

function setUpDom() {
    domFixture = document.createElement('div');
    domFixture.id = 'reactApp';
    document.querySelector('body').appendChild(domFixture);
}

function teardownDom() {
    domFixture.remove()
}

function renderApp(rps) {
    ReactDOM.render(
        <RPSApp rps={rps}/>,
        domFixture
    );
}

function play() {
    document.querySelector('#playButton').click();
}

function pageContent() {
    return domFixture.innerText;
}
