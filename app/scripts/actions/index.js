/**
 * Actions
 */
import { WORK_SELECTED, TOGGLE_SIDEBAR } from './types';

export function selectWork(index) {
  return {
    type: WORK_SELECTED,
    index,
  };
}

export function sidebarToggle(value) {
  return {
    type: TOGGLE_SIDEBAR,
    value,
  };
}
