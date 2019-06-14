import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/Action'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            pass: ''
        }
    }

    register = (e) => {
        e.preventDefault()
        const { id, pass } = this.state;

        this.props.create(id, pass);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container mt-5">
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => this.setState({ id: e.target.value })} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => this.setState({ pass: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.register}>Submit</button>
                </form>
            </div>
        )
    }
}


function mapStateToProps(states) {
    return ({
        UID: states.reducer.UID,
        loginData: states.reducer.loginData
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        create: (id, pass) => {
            dispatch(signIn(id, pass))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);