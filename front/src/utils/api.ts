import { ScheduleItem } from '@/types';

const host = 'http://localhost:8080/api';
const url = (path: string) => `${host}/${path}`;

export const get = async (path: string): Promise<ScheduleItem[]> => {
  const res = await fetch(url(path));
  const result = await res.json();

  return result;
};
