import {RENDER_SMURFS} from "./renderSmurfs";
import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: ADD_SMURF, payload: smurf})
    axios.post("http://localhost:3333/smurfs", smurf)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}