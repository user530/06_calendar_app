import React from 'react';
import mainReducer from './features/reducer';
import { Interview, ReducerState } from './types';
import {
  SET_DATE_RANGE_ACTION,
  SET_SELECTED_DATE_ACTION,
  SET_INTERVIEWS_ACTION,
} from './features/actions';

const contextInitialState: ReducerState = {
  dateRange: [],
  interviews: [
    { date: new Date(), interviewee: 'John Doe', position: 'developer' },
  ],
  selectedDate: new Date(),
};

interface IAppContext extends ReducerState {
  setDateRange: (dateRange: Date[]) => void;
  setSelectedDate: (date: Date) => void;
  setInterviews: (interviews: Interview[]) => void;
}

const AppContext = React.createContext<IAppContext>({
  ...contextInitialState,
  setDateRange: () => {},
  setInterviews: () => {},
  setSelectedDate: () => {},
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

  return (
    <AppContext.Provider
      value={{ ...state, setDateRange, setSelectedDate, setInterviews }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
