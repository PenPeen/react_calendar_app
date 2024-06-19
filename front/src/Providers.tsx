import { FC, PropsWithChildren } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider as ReduxProvider } from 'react-redux';

import store from './stores';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </ReduxProvider>
  );
};

export default Providers;
