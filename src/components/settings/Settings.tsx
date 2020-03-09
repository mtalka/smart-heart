import React from "react";
import { connect } from "react-redux";
import { createPerson } from "../../redux/actions/personActions";

function Settings(props: any) {
    function handleClick() {
        props.createProfile({
            firstName: "Makko",
            lastName: "Mullikas",
            birthDate: new Date()
        });
    }

    return (
        <div>
            <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        createProfile: (profile: any) => dispatch(createPerson(profile))
    };
}

export default connect(null, mapDispatchToProps)(Settings);
