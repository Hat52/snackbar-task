import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
// import { Snackbar } from '@mui/material';
import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';
import Snackbar from './components/snackbar';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [isShowSnackbar,setIsShowSnackbar] = useState(false)
  const [formData,setFormData] = useState(null)

  const handleNewFormSubmission = async(data) =>{
    setIsShowSnackbar(true)
    setFormData(data)
  }

  useEffect(()=>{
    try{
      onMessage(handleNewFormSubmission)
    }catch(error){
      console.log("Error",error)
      toast.error("Something went wrong while setting up the callback")

    }
  },[])

  return (
    <>
    <Snackbar open={isShowSnackbar} onClose={()=>{
      setIsShowSnackbar(false)
      setFormData(null)
    }} 
    content={formData}
    onLike={()=>console.log("Like button click")}/>
    <Toaster position="bottom-center" reverseOrder={false} />
      <Header />
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
