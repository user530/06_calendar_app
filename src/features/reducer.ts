import { Reducer } from 'react';
import { ReducerState, ReducerActions, Interview } from '../types';

const mainReducer: Reducer<ReducerState, ReducerActions> = (
  state: ReducerState,
  action: ReducerActions
) => {
  const { dateRange, interviews, selectedDate } = state;
  return {
    dateRange: dateRangeReducer(dateRange, action),
    selectedDate: selectedDateReducer(selectedDate, action),
    interviews: interviewsReducer(interviews, action),
  };
};

function dateRangeReducer(state: Date[], action: ReducerActions): Date[] {
  switch (action.type) {
    case 'SET_DATE_RANGE':
      return action.payload;
    default:
      return state;
  }
}

function selectedDateReducer(state: Date, action: ReducerActions): Date {
  switch (action.type) {
    case 'SET_SELECTED_DATE':
      return action.payload;
    default:
      return state;
  }
}

function interviewsReducer(
  state: Interview[],
  action: ReducerActions
): Interview[] {
  switch (action.type) {
    case 'SET_INTERVIEWS':
      return action.payload;
    default:
      return state;
  }
}

export default mainReducer;
