import { ScheduleItem } from '@/types';

const host = 'http://localhost:8080/api';
const url = (path: string) => `${host}/${path}`;
const defaultHeader = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const get = async (path: string): Promise<ScheduleItem[]> => {
  const res = await fetch(url(path));
  const result = await res.json();

  return result;
};

export const post = async (
  path: string,
  body: object,
  header: object = defaultHeader,
) => {
  const options = { ...header, method: 'POST', body: JSON.stringify(body) };
  const res = await fetch(url(path), options);
  const result = await res.json();

  return result;
};
