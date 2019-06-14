import firebase from '../../config/Config';
import swal from 'sweetalert';

function signIn(email, password) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            const db = firebase.firestore();
            db.collection("Users")
                .doc(res.user.uid)
                .set({ email, name: "a", role: 'user' })
                .then(() => {
                    localStorage.setItem('loginData', JSON.stringify(res.user));
                    dispatch({
                        type: 'SIGNUP',
                        payload: res.user
                    });
                    this.props.history.replace("/");
                    swal("Registration Successful", "", "success");
                })
                .catch(function (error) {
                    swal(error.message, "", "error");
                });
        }).catch(function (error) {
            swal(error.message, '', 'error');
        });

    }

}

const logIn = (email, password) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            swal('SigIn successful', '', 'success');
            localStorage.setItem('loginData', JSON.stringify(res.user));
            dispatch({
                type: 'LOGIN',
                payload: res.user
            });
        }).catch(error => {
            swal(error.message, '', 'error');
        })
    }
}

const logOut = (user) => {
    return dispatch => {
        firebase.auth().signOut().then(() => {
            swal("Logged Out successfully", "", "success");
            dispatch({
                type: 'LOGOUT',
                payload: null
            });
        }).catch(function (error) {
            swal(error.message, '', 'error');
        });
    }
}

export {
    logIn,
    logOut,
    signIn
}