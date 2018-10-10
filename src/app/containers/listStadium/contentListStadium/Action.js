import {
    POPOVER_OPEN,
    POPOVER_CLOSE,
} from "./Constant";

export const popoverOpen = () => ({
    type: POPOVER_OPEN
});

export const popoverClose = items => ({
    type: POPOVER_CLOSE
});

export const onPopoverOpen = () => (dispatch) => {
    dispatch(popoverOpen());
};

export const onPopoverClose = () => (dispatch) => {
    dispatch(popoverClose());
};