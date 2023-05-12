import { Interview } from '../types';

const API_ENDPOINT = 'https://pokeapi.co/api/v2/';

export const fetchInterviews = async (
  dateRange: [Date, Date],
  options?: RequestInit | undefined
): Promise<Interview[]> => {
  const reqURL = 'pokemon-species?';
  const params = new URLSearchParams({
    start: dateRange[0].getTime().toString(),
    end: dateRange[1].getTime().toString(),
  });

  const { data } = await apiCall<{ data: Interview[] }>(
    API_ENDPOINT + reqURL + params,
    options
  );

  // Check correct data and return accordingly
  if (
    data instanceof Array &&
    data.reduce((correct, arrElem) => correct && isInterview(arrElem), true)
  )
    return data;
  else return [];
};

export const addInterview = async (date: Date): Promise<boolean> => {
  const reqURL = 'pokemon-species';

  // Placeholder dummy data, can be added to the input prompt
  const plName = 'name';
  const plPosition = 'position';
  // ---

  const newInterview: Pick<Interview, 'date' | 'interviewee' | 'position'> = {
    date,
    interviewee: plName,
    position: plPosition,
  };

  const { success } = await apiCall<{ success: boolean }>(
    API_ENDPOINT + reqURL,
    {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInterview),
      cache: 'default',
    }
  );

  return success;
};

export const deleteInterview = async (interviewId: number) => {
  const reqURL = '';

  const { success } = await apiCall<{ success: boolean }>(
    API_ENDPOINT + reqURL + interviewId.toString(),
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
    'interviewee' in data &&
    'id' in data
  );
};
