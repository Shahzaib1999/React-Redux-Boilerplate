import React, { Component } from 'react';
import firebase from 'firebase'
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { AllData } = this.state
        return (
            <div>
                Dashboard
            </div>
        )
    }
}


function mapStateToProps(states) {
    return ({
        USER: states.reducer.USER,
        UID: states.reducer.UID,
    })
}

function mapDispatchToProps(dispatch) {
    return ({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);