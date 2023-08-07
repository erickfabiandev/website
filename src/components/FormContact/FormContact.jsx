import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { HiOutlineUser } from "react-icons/hi2"
import { BiMessageRoundedDots } from "react-icons/bi"
import { MdOutlineAlternateEmail } from "react-icons/md"
import './FormContact.scss'

const FormContact = ({ onConfetti }) => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_7wm24mm', 'template_vxdp16z', form.current, 'u1I1xojzTClmuL3Jr')
      .then((result) => {
        onConfetti()
        form.current.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='form-contact'>
      <div className='form-contact__group'>
        <label htmlFor='user_name'>Your full name</label>
        <HiOutlineUser className='icon' size={20} />
        <input
          type='text'
          id='user_name'
          name='user_name'
          placeholder='Erick Carrasco'
          required
        />
      </div>
      <div className='form-contact__group'>
        <label htmlFor='user_email'>Your Email</label>
        <MdOutlineAlternateEmail className='icon' size={20} />
        <input
          type='email'
          id='user_email'
          name='user_email'
          placeholder='example@email.com'
          required
        />
      </div>
      <div className='form-contact__message'>
        <label htmlFor='message'>Message</label>
        <BiMessageRoundedDots className='icon' size={20} />
        <textarea
          id='message'
          name='message'
          placeholder='Leave me your message'
          required
        />
      </div>
      <button type="submit" className='form-contact__button'>Send</button>
    </form>
  );
};

export default FormContact;