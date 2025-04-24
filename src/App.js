import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Header from "./Header";
import Content from "./Content";
import { onMessage, saveLikedFormSubmission,fetchLikedFormSubmissions } from "./service/mockServer";
import Snackbar from "./components/snackbar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [isShowSnackbar, setIsShowSnackbar] = useState(false);
  const [formData, setFormData] = useState(null);
  const [likedSubmissions,setLikedSubmissions] = useState([])

  const handleNewFormSubmission = async (data) => {
    setIsShowSnackbar(true);
    setFormData(data);
  };

  const resetStates = () =>{
    setIsShowSnackbar(false)
    setFormData(null)
  }

  const handleSubmissionLike = async (data) => {
    try {
      resetStates()
      await saveLikedFormSubmission(data);
      setLikedSubmissions((prev)=>([...prev,data]))
      toast.success("You have liked the submission");
    } catch (error) {
      console.log("Error", error);
      toast.error("Unable to Like the submission");
    }
  };


  const getLikedComments =async () =>{
    try{
      const response = await fetchLikedFormSubmissions()
      setLikedSubmissions(response?.formSubmissions)
    }catch(error){
      console.log(error)
      toast.error("Something went wrong while fetching the liked submissions")
    }
  }


  useEffect(() => {
    try {
      getLikedComments()
      onMessage(handleNewFormSubmission);
    } catch (error) {
      console.log("Error", error);
      toast.error("Something went wrong while setting up the callback");
    }
  }, []);

  return (
    <>
      <Snackbar
        open={isShowSnackbar}
        onClose={resetStates}
        content={formData}
        onLike={handleSubmissionLike}
      />
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Container>
        <Content likedSubmissions={likedSubmissions}/>
      </Container>
    </>
  );
}

export default App;
