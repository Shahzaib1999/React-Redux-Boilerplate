import React, { Component } from 'react';
import firebase from 'firebase'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                // this.props.history.push('/')
            }
            else{
                this.props.history.push('/LogIn')
            }
        })
    }

    render() {
        const { AllData } = this.state
        return (
            <div>
                Home
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);