/**
 * Hello
 */
import { WORK_SELECTED } from '../actions/types';

const active = (state = null, action) => {
  switch (action.type) {
    case WORK_SELECTED:
      return action.index;
    default:
      return state;
  }
};

export default active;
