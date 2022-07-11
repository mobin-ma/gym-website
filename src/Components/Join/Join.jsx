import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c4o9qym', 'template_eiyklr5', form.current, 'Wl0j9-jKXBSj5tdcj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='join' id='Join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="text" name='user-email' placeholder='Enter your Email address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join;