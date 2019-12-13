import React, {useState} from "react";
import {connect} from "react-redux";
import axios from "axios";

import {addSmurf, ADD_SMURF} from "../actions/addSmurf";

function SmurfForm(props) {

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const changeHandler = e => {
        setSmurf({...smurf,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addSmurf(smurf)
        setSmurf({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Name:
                <input type="text" name="name" id="name" placeholder="Enter a name..." value={smurf.name} onChange={changeHandler}/>
            </label>
            <br/>
            <label>Age:
                <input type="text" name="age" id="age" placeholder="Enter an age..." onChange={changeHandler} value={smurf.age}/>
            </label>
            <br/>
            <label>Height:
                <input type="text" name="height" id="height" placeholder="Enter a height..." onChange={changeHandler} value={smurf.height}/>
            </label>
            <br/>
            <button type="submit">Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);