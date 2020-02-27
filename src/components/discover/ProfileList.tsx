import React from "react";
import ProfileListItem from "./ProfileListItem";
import { connect } from "react-redux";

function ProfileList(props: any) {
    return (
        <div>
            {props.persons.map((p: any) => (
                <ProfileListItem key={p.id} person={p} />
            ))}
        </div>
    );
}

function mapStateToProps(state: any) {
    const persons = state.persons.persons;
    return {
        persons
    };
}

export default connect(mapStateToProps)(ProfileList);
