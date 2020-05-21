import React from 'react';
import { AppProvider } from '8base-react-sdk';
import { Main } from './Main';

function App() {
  const onRequestSuccess = React.useCallback(() => {}, []);

  const onRequestError = React.useCallback(() => {}, []);

  return (
    <AppProvider
      uri={`https://api.8base.com/ckadxkneq005t09js2xb40fyc`}
      onRequestSuccess={onRequestSuccess}
      onRequestError={onRequestError}
    >
      {({ loading }) => {
        if (loading) {
          return <>Loading...</>;
        }

        return <Main />;
      }}
    </AppProvider>
  );
}

export default App;
