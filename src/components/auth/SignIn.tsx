import React, { useState } from "react";

function SignIn() {
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
        console.log(user);
    }

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
                </div>
            </form>
        </div>
    );
}

export default SignIn;
