import React, {useEffect} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {renderSmurfs} from "../actions/renderSmurfs";

import SmurfForm from "./SmurfForm";

const Container = styled.div`
    background-color: #fff;
    width: 20%;
    padding: 20px;
    margin: 10px auto;
    border-radius: 5px;
    border: 1px solid #224de3;
    
    span {
        color: red;
    }

    p {
        color: #224de3;
    }
`

function Smurfs(props) {

    useEffect(() => {
        props.renderSmurfs();
    }, [props.smurf]);

    return (
        <>
            <SmurfForm />
            {props.smurfs.map((smurf) => {
                return (
                    <Container>
                        <p><span>Name:</span>{smurf.name}</p>
                        <p><span>Age:</span>{smurf.age}</p>
                        <p><span>Height:</span>{smurf.height}</p>
                    </Container>
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