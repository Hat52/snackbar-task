import React, { useEffect } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';

function App() {

  const handleNewFormSubmission = (data) =>{
    console.log("Callback has been called", data)
  }

  useEffect(()=>{
    onMessage(handleNewFormSubmission)
  },[])

  return (
    <>
      <Header />
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
