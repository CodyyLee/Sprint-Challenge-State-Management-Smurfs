import React, {useState} from "react";
import {connect} from "react-redux";
import axios from "axios";
import styled from "styled-components";

import {addSmurf, ADD_SMURF} from "../actions/addSmurf";

const Form = styled.form`
    background-color: #fff;
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 50px 10px;
    margin: 10px auto;
    align-item: center;
    justify-content: center;
    border-radius: 10px;
    border: 3px solid #224de3;
    color: red;
    font-weight: bold;

    input {
        background-color: rgba(0,0,0,0);
        border: none;
        border-bottom: 1px solid red;
        color: #224de3;
    }

    button {
        background-color: red;
        font-weight: bold;
        color: white;
        padding: 10px 30px;
        margin: auto;
        border-radius: 8px;
        border: 1px solid #224de3;
    }
`

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
        <Form onSubmit={submitHandler}>
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
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);