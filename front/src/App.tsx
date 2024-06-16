import { FC } from 'react';

import CalendarBoard from './components/CalendarBoard';
import Navigation from './components/Navigation';
import Providers from './Providers';

const App: FC = () => {
  return (
    <>
      <Providers>
        <Navigation />
        <CalendarBoard />
      </Providers>
    </>
  );
};

export default App;
