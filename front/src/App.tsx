import { FC } from 'react';

import AddScheduleDialog from './components/AddScheduleDialog';
import CalendarBoard from './components/CalendarBoard';
import Navigation from './components/Navigation';
import Providers from './Providers';

const App: FC = () => {
  return (
    <>
      <Providers>
        <Navigation />
        <CalendarBoard />
        <AddScheduleDialog />
      </Providers>
    </>
  );
};

export default App;
