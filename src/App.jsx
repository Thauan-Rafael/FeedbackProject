import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let success = window.location.href;
    let params = success.split('?');
    if (success.includes('?success')) {
      setShowToast(true);
      const updatedUrl = success.replace('?'+params[1], '');
      window.history.replaceState({}, document.title, updatedUrl);
    }
  }, []);

  useEffect(() => {
    if (showToast) {
      toast.success('Data sent with success!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'dark',
      });
      setShowToast(false);
    }
  }, [showToast]);

  return (
    <>
      <Form />
      <ToastContainer />
    </>
  );
}

export default App;
