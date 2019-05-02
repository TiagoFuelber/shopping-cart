import { actionTypes } from '..';

const minute = 60;

const initialState = {
  remainingTime: null,
  interval: null
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TIMER.START_TIMER:
      return { remainingTime: minute * 15, interval: action.interval };

    case actionTypes.TIMER.DECREASE_TIMER:
      return { ...state, remainingTime: state.remainingTime - 1 };

    case actionTypes.TIMER.END_TIMER:
      return { remainingTime: null, interval: null };

    default:
      return state;
  }
};

export default { timerReducer };
