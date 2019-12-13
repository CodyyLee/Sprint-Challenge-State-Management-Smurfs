import React, {useEffect} from "react";
import {connect} from "react-redux";

import {renderSmurfs} from "../actions/renderSmurfs";

import SmurfForm from "./SmurfForm";

function Smurfs(props) {

    useEffect(() => {
        props.renderSmurfs();
    }, [props.smurf]);

    return (
        <>
            <SmurfForm />
            {props.smurfs.map((smurf) => {
                return (
                    <div>
                        <p>Name:{smurf.name}</p>
                        <p>Age:{smurf.age}</p>
                        <p>Height:{smurf.height}</p>
                    </div>
                )
            })}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {renderSmurfs})(Smurfs);