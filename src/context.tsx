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
  interviews: [],
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

  // Dummy data - CLEAR LATER!
  const d1 = new Date(new Date().setDate(new Date().getDate() - 1));
  d1.setHours(9);
  const d2 = new Date(new Date().setDate(new Date().getDate() - 2));
  d2.setHours(17);
  const d3 = new Date(new Date().setDate(new Date().getDate()));
  d3.setHours(8);
  const d4 = new Date(new Date().setDate(new Date().getDate() + 2));
  d4.setHours(13);
  const d5 = new Date(new Date().setDate(new Date().getDate() + 5));
  d5.setHours(9);

  const dummyData1: Interview[] = [
    {
      date: new Date(),
      interviewee: 'Bob',
      position: 'pos1',
    },
    {
      date: d1,
      interviewee: 'Jack',
      position: 'pos2',
    },
    {
      date: d2,
      interviewee: 'Eve',
      position: 'pos2',
    },
    {
      date: d3,
      interviewee: 'Stew',
      position: 'pos3',
    },
    {
      date: d4,
      interviewee: 'Ellie',
      position: 'pos1',
    },
    {
      date: d5,
      interviewee: 'Tom',
      position: 'pos3',
    },
  ];

  // Fetch data placeholder
  React.useEffect(() => {
    const filtered = dummyData1.filter(
      (interview) =>
        interview.date >= state.dateRange[0] &&
        interview.date <= state.dateRange[state.dateRange.length - 1]
    );

    setInterviews(filtered);
  }, [state.dateRange]);

  return (
    <AppContext.Provider
      value={{ ...state, setDateRange, setSelectedDate, setInterviews }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
