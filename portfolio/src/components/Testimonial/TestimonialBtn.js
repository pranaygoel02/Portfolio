import React,{useRef,useState,useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Testimonial.css'
import axios from 'axios'
import { CircularProgress } from '@mui/material';

export default function TestimonialBtn() {
  const addIconRef = useRef()
  const AddTestimonialCardRef = useRef()
  const formRef = useRef();
  const form_btnRef = useRef();
  const [sendingMail, setSendingMail] = useState(false);
  const [emailSent,setEmailSent] = useState(false);
  const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [sub,setSub] = useState('');
    const [msg,setMsg] = useState('');
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: '',
});
function resetForm(){
  setName('');
  setEmail('');
  setMsg('');
}
function handleName(e){
  // console.log(e.target.value);
  setName(e.target.value);
}
function handleEmail(e){
  // console.log(e.target.value);
  setEmail(e.target.value);
}

function handleMsg(e){
  // console.log(e.target.value);
  setMsg(e.target.value);
}

  const showPopup = () => {
    addIconRef.current.classList.toggle('rotate')
    AddTestimonialCardRef.current.classList.toggle('showpopup')
  }
  useEffect(()=>{
    setForm({
        fullName: name,
        emailId: email,
        message: msg
    })
},[name,email,msg])

  function handleSubmit(e){
    setSendingMail(true);
    axios.post("/sendTestimonial",form)
    .then(res => {
        setEmailSent(true);
        resetForm();
        setSendingMail(false);
            setTimeout(()=> {
                setEmailSent(false)
            },2000);
    })
    .catch(error => {
        console.log("Error. Can't send mail.");
    })
    e.preventDefault();
}

  return (
    <div style={{position:'relative'}}>
      <div ref={AddTestimonialCardRef}  className='add-testimonial-card'>
        <h3 style={{fontWeight:400}}>Hey! 👋 </h3>
        <h4>Would you like to add a testimonial?</h4>
        <div ref={formRef} className='form-wrapper'>
                <form className='form' autoComplete='none' onSubmit={handleSubmit}>
                    <div className='form-element'>
                        <input autoComplete='false' className='form-input' name='name' value={name} onChange={handleName} required type={'text'} placeholder={'Full Name'} autoFocus ></input>
                    </div>
                    <div className='form-element'>
                        <input className='form-input' name='email' value={email} onChange={handleEmail} required type={'email'} placeholder={'Email'}  autoComplete='none'></input>
                    </div>
                    <div className='form-element'>
                        <textarea className='form-input' name='message' value={msg} onChange={handleMsg} required placeholder='Your Message Here...'  autoComplete='none'></textarea>
                    </div>
                    {sendingMail ? <div style={{"display":"flex","alignItems":"center","justifyContent":"center"}}><CircularProgress color='secondary'/></div> : <input ref={form_btnRef} className='form-btn link' type={'submit'} value={emailSent ?'THANK YOU!' :'SEND TESTIMONIAL'}></input>}
                </form>
            </div>
      </div>
      <div onClick={showPopup} className='add-testimonial-btn'>
      <AddIcon  ref={addIconRef} id='add-icon'/>
      </div>
    </div>
  )
}
