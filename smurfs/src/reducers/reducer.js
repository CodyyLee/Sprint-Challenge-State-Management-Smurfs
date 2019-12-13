import axios from "axios";

import {RENDER_SMURFS} from "../actions/renderSmurfs";
import {ADD_SMURF} from "../actions/addSmurf";

export const initialState = {
    smurfs: []
}

axios.get("http://localhost:3333/smurfs")
.then((res) => {
    initialState.smurfs = res.data.map((smurf) => {
        return smurf;
    })
})
.catch((err) => {

})


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case RENDER_SMURFS:
            return {
                ...state,
                smurfs: [...state.smurfs]
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }

        default:
            console.log(state)
            return state;
    }
}