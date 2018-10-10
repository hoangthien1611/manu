import {
    POPOVER_OPEN,
    POPOVER_CLOSE
} from "./Constant";

const initialState = {
    popover: false
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case POPOVER_OPEN:
            return Object.assign({}, state, {
                popover: true
            });
        case POPOVER_CLOSE:
            return Object.assign({}, state, {
                popover: false
            });
        default:
            return state;
    }
}
