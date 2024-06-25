import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { CalendarState } from '@/stores';
import { schedulesSlice } from '@/stores/schedules';
import { fetchScheduleItemsRequest } from '@/utils/api';
const { setLoading, fetchSchedule } = schedulesSlice.actions;

export const useFetchScheduleAction = (currentCalendar: CalendarState) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    const fetchAsyncSchedule = async () => {
      const currentSchedules = await fetchScheduleItemsRequest(
        `schedules?month=${currentCalendar.month}&year=${currentCalendar.year}`,
      );

      dispatch(fetchSchedule(currentSchedules));
    };

    void fetchAsyncSchedule();
  }, [dispatch, currentCalendar]);
};
