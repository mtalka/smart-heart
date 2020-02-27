import React from "react";

function ProfileListItem(props: any) {
    return (
        <div className="row">
            <div className="col s1"></div>
            <div className="col s4">
                <div>{props.person.firstName}</div>
                <div>Lives in {props.person.city}</div>
                <div>3.0 kilometers</div>
            </div>
            <div className="col s6">{props.person.about}</div>
            <div className="col s1"></div>
        </div>
    );
}

export default ProfileListItem;
