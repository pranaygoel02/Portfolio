import React, {useRef, useEffect   } from 'react'
import Lottie from 'lottie-web'
import './Contact.css'


export default function Contact() {
    const contactLottieRef = useRef(null);
    
    useEffect(() => {
      const instance = Lottie.loadAnimation({
        container: contactLottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../images/lottie/contact.json')
      })
      return () => instance.destroy();
    }, [])
    
  return (
    <div className='contact wrapper'>
        <header>
            <div ref={contactLottieRef} className='background' id='contact-left'></div>
        </header>
        <div id='contact-right'>
            <div className='form-wrapper'>
                <h1>Leave a Message!</h1>
                <form className='form' autoComplete='none'>
                    <div className='form-element'>
                        {/* <label className='form-label'>Name</label> */}
                        <input className='form-input' name='name' required type={'text'} placeholder={'Full Name'} autoFocus autoComplete='none'></input>
                    </div>
                    <div className='form-element'>
                        {/* <label className='form-label'>Email</label> */}
                        <input className='form-input' name='email' required type={'email'} placeholder={'Email'}  autoComplete='none'></input>
                    </div>
                    <div className='form-element'>
                        {/* <label className='form-label'>Subject</label> */}
                        <input className='form-input' name='subject' required type={'text'} placeholder={'Subject'}  autoComplete='none'></input>
                    </div>
                    <div className='form-element'>
                        {/* <label className='form-label'>Message</label> */}
                        <textarea className='form-input'rea name='message' required placeholder='Your Message Here...'  autoComplete='none'></textarea>
                    </div>
                    <input className='form-btn link' type={'submit'} value={'SEND MESSAGE'}></input>
                </form>
            </div>
        </div>
    </div>
  )
}
