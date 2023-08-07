import { BsLinkedin, BsGithub } from "react-icons/bs"
import { useState } from "react"
import FormContact from "../../components/FormContact/FormContact"
import Confetti from 'react-confetti'
import './Contact.scss'

const Contact = () => {
  const [send, setSend] = useState(false)

  const handleConfetti = () => {
    setSend(true)
    setTimeout(() => {
      setSend(false);
    }, 5000);

  }
  return (
    <section className='contact-us'>
      <img className='contact-us__img' src='https://res.cloudinary.com/dkddd5aky/image/upload/v1691381848/site-web/logo-contact_kmpt9j.webp' alt='logo-section' />
      <div className='contact-us__container'>
        <div className='contact-us__container__redes'>
          <a className='contact-us__container__redes--linkedin' href='https://www.linkedin.com/in/erickfabiandev/'>
            <BsLinkedin size={25} style={{ color: '#2874A6', background: '#FDFEFE' }} className='icon' />
          </a>
          <a className='contact-us__container__redes--github' href='https://github.com/erickfabiandev'>
            <BsGithub size={25} className='icon' />
          </a>
        </div>
        <FormContact onConfetti={handleConfetti} />
      </div>
      {send && (<Confetti />)}
    </section>
  )
}

export default Contact