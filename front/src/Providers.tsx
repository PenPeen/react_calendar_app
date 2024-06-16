import { FC, PropsWithChildren } from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import store from './stores';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Providers;
