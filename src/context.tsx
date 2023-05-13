import React from 'react';
import mainReducer from './features/reducer';
import { Interview, ReducerState } from './types';
import {
  SET_DATE_RANGE_ACTION,
  SET_SELECTED_DATE_ACTION,
  SET_INTERVIEWS_ACTION,
  SET_SELECTED_INTERVIEW,
} from './features/actions';
import { fetchInterviews } from './utils';

const contextInitialState: ReducerState = {
  dateRange: [],
  interviews: [],
  selectedDate: null,
  selectedInterview: null,
};

interface IAppContext extends ReducerState {
  setDateRange: (dateRange: Date[]) => void;
  setSelectedDate: (date: Date) => void;
  setInterviews: (interviews: Interview[]) => void;
  setSelectedInterview: (interviewOrNull: Interview | null) => void;
}

const AppContext = React.createContext<IAppContext>({
  ...contextInitialState,
  setDateRange: () => {},
  setInterviews: () => {},
  setSelectedDate: () => {},
  setSelectedInterview: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(mainReducer, contextInitialState);

  const setDateRange = (newDateRange: Date[]): void => {
    dispatch(SET_DATE_RANGE_ACTION(newDateRange));
  };

  const setSelectedDate = (newSelectedDate: Date): void => {
    dispatch(SET_SELECTED_DATE_ACTION(newSelectedDate));
  };

  const setInterviews = (interviews: Interview[]): void => {
    dispatch(SET_INTERVIEWS_ACTION(interviews));
  };

  const setSelectedInterview = (interviewOrNull: Interview | null): void => {
    dispatch(SET_SELECTED_INTERVIEW(interviewOrNull));
  };

  const fetchAndSet = (signal: AbortSignal) => {
    const rangeStart = state.dateRange[0];
    const rangeEnd = state.dateRange[state.dateRange.length - 1];

    fetchInterviews([rangeStart, rangeEnd], { signal })
      .then((data) => {
        setInterviews(data);
      })
      .catch((err) => console.log(err));
  };

  // Fetch data
  React.useEffect(() => {
    if (state.dateRange.length === 0) return () => {};

    const controller = new AbortController();

    fetchAndSet(controller.signal);

    return () => controller.abort();
  }, [state.dateRange]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setDateRange,
        setSelectedDate,
        setInterviews,
        setSelectedInterview,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
