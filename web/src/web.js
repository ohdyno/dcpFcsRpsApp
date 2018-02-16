const React = require('react');

class RPSApp extends React.Component {
    constructor(usecase) {
        super(usecase);
        this.rps = usecase.rps;
        this.state = {
            p1Throw: '',
            p2Throw: ''
        }
    }

    playButtonClicked() {
        this.rps.playRound(this.state.p1Throw, this.state.p2Throw, this)
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

    updateThrow(event) {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    render() {
        return <div>
            <input id='p1Throw' onChange={this.updateThrow.bind(this)}/>
            <input id='p2Throw' onChange={this.updateThrow.bind(this)}/>
            <button id='playButton' onClick={this.playButtonClicked.bind(this)}>{this.state.result}</button>

            <div>no rounds have been played</div>
        </div>
    }
}

module.exports = RPSApp;