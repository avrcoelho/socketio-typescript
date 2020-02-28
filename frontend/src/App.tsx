import React from 'react';

import ListProducts from './components/ListProducts';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ListProducts />
    </>
  );
};

export default App;
