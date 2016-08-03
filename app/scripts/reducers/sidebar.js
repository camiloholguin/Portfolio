/**
 * Sidebar
 */
import { TOGGLE_SIDEBAR } from '../actions/types';

const sidebar = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return action.value;
    default:
      return state;
  }
};

export default sidebar;
