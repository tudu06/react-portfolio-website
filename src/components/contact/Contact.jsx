import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vl72px4', 'template_flfh3xq', form.current, 'eCW0yasfVKR4qYYEs')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>parvathy.tudu@gmail.com</h5>
            <a href='mailto:parvathy.tudu@gmail.com' target="_blank">Send a mail</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone+919444559642' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact