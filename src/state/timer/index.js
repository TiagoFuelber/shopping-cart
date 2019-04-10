import { TIMER } from '../actionTypes';

const minute = 60;

const initialState = {
  remainingTime: null,
  interval: null
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER.START_TIMER:
      return { remainingTime: minute * 15, interval: action.interval };

    case TIMER.DECREASE_TIMER:
      return { ...state, remainingTime: state.remainingTime - 1 };

    case TIMER.END_TIMER:
      return { remainingTime: null, interval: null };

    default:
      return state;
  }
};

export default { timerReducer };
