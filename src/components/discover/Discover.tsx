import React, { useEffect } from "react";
import "./Discover.scss";
import ProfileList from "./ProfileList";
import * as personActions from "../../redux/actions/personActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Discover(props: any) {
    useEffect(() => {
        props.actions.getPersons();
    });

    const mockChips: string[] = [
        "Funny",
        // "Cute",
        "Smart",
        "Handsome",
        "Educated"
    ];

    return (
        <div className="discover-wrapper">
            <div className="row">
                <div className="col s12 centered-col">
                    {mockChips.map(c => (
                        <div key={c} className="chip">
                            {c}
                            <i className="close material-icons">close</i>
                        </div>
                    ))}
                    {mockChips.length < 5 && (
                        <div className="add chip">
                            Add
                            <span className="mdi mdi-pencil-plus-outline"></span>
                        </div>
                    )}
                </div>
                <div className="col s12 centered-col">
                    <h6>Matching profiles</h6>
                </div>
            </div>
            <div className="row">
                <ProfileList />
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(personActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Discover);
