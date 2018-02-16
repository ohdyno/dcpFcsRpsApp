const React = require('react');

class RPSApp extends React.Component {
    constructor(usecase) {
        super(usecase);
        this.rps = usecase.rps;
        this.state = {}
    }

    playButtonClicked() {
        this.rps.play(null, null, this)
    }

    player1Wins() {
        this.setState({
            result: 'player 1 wins'
        })
    }

    player2Wins() {
        this.setState({
            result: 'player 2 wins'
        })
    }

    tie() {
        this.setState({
            result: 'tie'
        })
    }

    invalid() {
        this.setState({
            result: 'invalid'
        })
    }

    render() {
        return <button id='playButton' onClick={this.playButtonClicked.bind(this)}>{this.state.result}</button>
    }
}

module.exports = RPSApp;