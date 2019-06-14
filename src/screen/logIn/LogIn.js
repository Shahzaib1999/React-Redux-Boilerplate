import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logIn } from '../../store/actions/Action'

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            pass: ""
        }
    }

    signIn = (e) => {
        e.preventDefault()
        const { id, pass } = this.state;

        this.props.signIn(id, pass);
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.loginData && nextProp.loginData.email){
            console.log('woprks')
            this.props.history.push('/')
        }
    }

    render() {
        const { AllData } = this.state;
        return (
            <div>
                <div className="container mt-5">
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={e => this.setState({ id: e.target.value })} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.setState({ pass: e.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.signIn}>LogIn</button>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps(states) {
    return ({
        USER: states.reducer.USER,
        UID: states.reducer.UID,
        loginData: states.reducer.loginData
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        signIn: (id, pass) => {
            dispatch(logIn(id, pass))
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);