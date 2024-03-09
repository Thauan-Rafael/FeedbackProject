import { toast } from 'react-toastify';
function checkPlaceholder(event) {
    let placeholder = document.querySelector('#placeholder');
    let feedback = document.querySelector('#feedback');
    if (feedback.textContent.length > 180 && event.key != 'Backspace') {
        event.preventDefault();
      }
    else{  
      if(feedback.textContent == 'Feedback'){
        feedback.innerHTML = feedback.innerHTML.replace(/<div id="placeholder">Feedback<\/div>/g, '')
        placeholder.style.color = '#f1ecec;'
      }
      else if(feedback.textContent.length==1 && event.key=='Backspace'){
        feedback.textContent = '';
        feedback.innerHTML += '<div id="placeholder">Feedback</div>';
      }
    }
  }  
  function sendFeedback(){
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let feedback = document.querySelector('#feedback')
    if(name == '' || email == '' || feedback.textContent == '' || feedback.textContent == 'Feedback' ){
      toast.success('Fill all fields!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
        icon: false,
        });
        document.getElementById('feedbackForm').addEventListener('submit', (e) =>{e.preventDefault()});
    }
    else{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(emailRegex.test(email) == false){
        toast.success('Invalid email!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "dark",
          icon: false,
          })
        document.getElementById('feedbackForm').addEventListener('submit', (e) =>{e.preventDefault()});
      }
      else{
        document.querySelector('#feedbackValue').value = feedback.textContent
        document.getElementById('feedbackForm').submit()
      }
    }
  }
  export {checkPlaceholder, sendFeedback}