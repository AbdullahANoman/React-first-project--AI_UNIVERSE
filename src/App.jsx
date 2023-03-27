import React from 'react';
import Button from './Components/Button/Button';
import Header from './Components/Header/Header';
import LoadData from './Components/LoadData/LoadData';

const App = () => {
  return (
    <>
      <Header></Header>
      <Button>Sort By date</Button>
      <LoadData></LoadData>
    </>
  );
};

export default App;