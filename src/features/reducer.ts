import { Reducer } from 'react';
import { ReducerState, ReducerActions, Interview } from '../types';

const mainReducer: Reducer<ReducerState, ReducerActions> = (
  state: ReducerState,
  action: ReducerActions
) => {
  const { dateRange, interviews, selectedDate, selectedInterview } = state;
  return {
    dateRange: dateRangeReducer(dateRange, action),
    selectedDate: selectedDateReducer(selectedDate, action),
    selectedInterview: selectedInterviewReducer(selectedInterview, action),
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

function selectedDateReducer(
  state: Date | null,
  action: ReducerActions
): Date | null {
  switch (action.type) {
    case 'SET_SELECTED_DATE':
      return action.payload;
    default:
      return state;
  }
}

function selectedInterviewReducer(
  state: Interview | null,
  action: ReducerActions
): Interview | null {
  switch (action.type) {
    case 'SET_SELECTED_INTERVIEW':
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
