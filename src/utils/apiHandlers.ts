import { dbInterview, Interview } from '../types';
import { interviewFromDb } from './other';

const API_ENDPOINT = 'http://127.0.0.1:5000/api/v1';

export const fetchInterviews = async (
  dateRange: [Date, Date],
  options?: RequestInit | undefined
): Promise<Interview[]> => {
  const reqURL = '/interviews/range?';
  const params = new URLSearchParams({
    start: dateRange[0].getTime().toString(),
    end: dateRange[1].getTime().toString(),
  });

  const { data } = await apiCall<{
    success: boolean;
    data: dbInterview[];
  }>(API_ENDPOINT + reqURL + params, options);

  // Check correct data and return accordingly
  if (
    data instanceof Array &&
    data.reduce((correct, arrElem) => correct && isInterview(arrElem), true)
  )
    return data.map((dbInerview) => interviewFromDb(dbInerview));
  else return [];
};

// Add's element to the DB and returns it
export const addInterview = async (date: Date): Promise<Interview> => {
  const reqURL = '/interviews';

  // Placeholder dummy data, can be added to the input prompt
  const plName = 'name';
  const plPosition = 'position';
  // ---

  const newInterview: Pick<Interview, 'date' | 'interviewee' | 'position'> = {
    date,
    interviewee: plName,
    position: plPosition,
  };

  const { data } = await apiCall<{
    success: boolean;
    data: dbInterview;
  }>(API_ENDPOINT + reqURL, {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newInterview),
    cache: 'default',
  });

  return interviewFromDb(data);
};

export const deleteInterview = async (
  interviewId: string
): Promise<boolean> => {
  const reqURL = '/interviews/' + interviewId;

  const { success } = await apiCall<{ success: boolean }>(
    API_ENDPOINT + reqURL,
    {
      method: 'DELETE',
    }
  );

  return success;
};

async function apiCall<T>(
  url: string,
  options?: RequestInit | undefined
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

const isInterview = (data: unknown): data is Interview => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'date' in data &&
    'position' in data &&
    'interviewee' in data
  );
};
