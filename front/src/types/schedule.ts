export interface Schedule {
  title: string;
  description: string;
  date: string;
  location: string;
}
export interface ScheduleItem extends Schedule {
  id: number;
}
