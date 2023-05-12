import { Interview } from '../types';

export const SET_DATE_RANGE_ACTION = (newDateRange: Date[]) =>
  ({
    type: 'SET_DATE_RANGE',
    payload: newDateRange,
  } as const);

export const SET_SELECTED_DATE_ACTION = (date: Date) =>
  ({
    type: 'SET_SELECTED_DATE',
    payload: date,
  } as const);

export const SET_INTERVIEWS_ACTION = (interviews: Interview[]) =>
  ({
    type: 'SET_INTERVIEWS',
    payload: interviews,
  } as const);
