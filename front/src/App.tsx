import { FC } from 'react';

import CalendarBoard from './components/CalendarBoard';
import Providers from './Providers';

const App: FC = () => {
  return (
    <>
      <Providers>
        <h1>Calendar App</h1>
        <CalendarBoard />
      </Providers>
    </>
  );
};

export default App;
