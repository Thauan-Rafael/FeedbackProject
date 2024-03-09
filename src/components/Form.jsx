import React from 'react';
import {checkPlaceholder, sendFeedback} from './functions'

function Form() {
    return(
        <>
        <main>
        <h1>Give Me Feedback</h1>
        <form name ='feedbackForm' id='feedbackForm' action='https://feedbackserver-u4wq.onrender.com/submit-form' method='post' className='container' autoComplete='off'>
        <input id='name' name='name' type='text' placeholder='Name' maxLength='20' required/>
        <input id='email' name='email' type='text' placeholder='Email' maxLength='40' required/>
        <div id ='feedback' name='feedback' contentEditable='true' onKeyDown={checkPlaceholder} suppressContentEditableWarning={true}>
        <div id="placeholder">Feedback</div>
        <input type='hidden' name='feedbackValue' id ='feedbackValue'/>    
        </div>
        <button id='btnSend' className="btn btn-outline-success" onClick={sendFeedback}>Send</button>
        </form>
        </main>
        </>
    )
}
document.addEventListener('invalid', (function () {return function (e) {e.preventDefault()}})(), true);
export default Form; 