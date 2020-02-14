import React from "react";
import "./Discover.scss";

function Discover() {
    return (
        <div className="discover-wrapper">
            <div className="row">
                <div className="col s12">
                    <h6>Your criteria</h6>
                </div>
                <div className="col s12">
                    <div className="chip">
                        Tag
                        <i className="close material-icons">close</i>
                    </div>
                    <div className="chip">
                        Tag
                        <i className="close material-icons">close</i>
                    </div>
                    <div className="chip">
                        Tag
                        <i className="close material-icons">close</i>
                    </div>
                    <div className="chip">
                        Tag
                        <i className="close material-icons">close</i>
                    </div>
                    <div className="chip">
                        Tag
                        <i className="close material-icons">close</i>
                    </div>
                </div>
                <div className="col s12">
                    <h6>Matching profiles</h6>
                </div>
            </div>
        </div>
    );
}

export default Discover;
