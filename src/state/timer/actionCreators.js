import { TIMER } from '../actionTypes';
import store from '../store';

export const endTimer = (dispatch, onEndTime) =>
  () => {
    onEndTime && onEndTime();
    dispatch({ type: TIMER.END_TIMER });
  };

export const decreaseTimer = (dispatch, onEndTime) =>
  () => {
    if (store.getState().timer.remainingTime === 0) {
      endTimer(dispatch, onEndTime)();
      return;
    }

    dispatch({ type: TIMER.DECREASE_TIMER });
  };

export const startTimer = (dispatch, onEndTime) =>
  () => {
    const interval = setInterval(() => {
      decreaseTimer(dispatch, onEndTime)();
    }, 1000);

    clearInterval(store.getState().timer.interval);

    dispatch({ type: TIMER.START_TIMER, interval });
  };

export default { startTimer, decreaseTimer };
