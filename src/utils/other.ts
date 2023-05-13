import { dbInterview, Interview } from '../types';

export const validateEventInput = (inputStr: string): boolean => {
  const regex =
    /^([0-9]{4})-(01|02|03|04|05|06|07|08|09|10|11|12)-([0-3][0-9])\s([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$/;

  return regex.test(inputStr);
};

export const interviewFromDb = (fetchedInterview: dbInterview): Interview => {
  const { _id, date, interviewee, position } = fetchedInterview;
  return { id: _id, date: new Date(date), interviewee, position };
};
