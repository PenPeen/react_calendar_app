import { FC } from 'react';

import AddScheduleDialog from './components/AddScheduleDialog';
import CalendarBoard from './components/CalendarBoard';
import CurrentScheduleDialog from './components/CurrentScheduleDialog';
import Navigation from './components/Navigation';
import Providers from './Providers';

const App: FC = () => {
  return (
    <>
      <Providers>
        <Navigation />
        <CalendarBoard />
        <AddScheduleDialog />
        <CurrentScheduleDialog />
      </Providers>
    </>
  );
};

export default App;
