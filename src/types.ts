import * as reducer_actions from './features/actions';

export interface Interview {
  id: string;
  date: Date;
  position: string;
  interviewee: string;
}

export interface dbInterview {
  _id: string;
  date: string;
  position: string;
  interviewee: string;
}

export interface ReducerState {
  dateRange: Date[];
  selectedDate: Date | null;
  selectedInterview: Interview | null;
  interviews: Interview[];
}

type InferTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ReducerActions = ReturnType<InferTypes<typeof reducer_actions>>;
