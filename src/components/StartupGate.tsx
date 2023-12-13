import React, {PropsWithChildren, useEffect, useState} from 'react';

import {PersistGate} from 'redux-persist/integration/react';

import {persistor} from '../store';
import FullscreenLoader from './FullscreenLoader';

export const StartupGate = (props: PropsWithChildren) => {
  const {children} = props;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    /**
     * TODO: Perform any startup tasks here
     */

    setReady(true);
  }, []);

  return (
    <PersistGate
      loading={<FullscreenLoader loading={true} />}
      persistor={persistor}>
      {ready ? children : <FullscreenLoader loading={true} />}
    </PersistGate>
  );
};
