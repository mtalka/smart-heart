import React, { useState } from "react";
import { signIn } from "../../redux/actions/authActions";
import { connect } from "react-redux";

function SignIn(props: any) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function handleChange(e: any) {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        props.signIn(user);
    }

    const { authError } = props;

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">
                        Login
                    </button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    );
}

function mapStateToProps(state: any) {
    return {
        authError: state.auth.authError,
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        signIn: (creds: any) => dispatch(signIn(creds))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
