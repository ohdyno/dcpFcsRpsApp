const React = require('react');

class RPSApp extends React.Component {
    constructor(usecase) {
        super(usecase);
        this.rps = usecase.rps;
        this.state = {
            result: 'invalid'
        }
    }

    playButtonClicked() {
        this.rps.play(null, null, this)
    }

    player1Wins() {
        this.setState({
            result: 'player 1 wins'
        })
    }

    invalid() {

    }

    render() {
        return <button id='playButton' onClick={this.playButtonClicked.bind(this)}>{this.state.result}</button>
    }
}

module.exports = RPSApp;