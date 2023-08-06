import './Heard.scss'
import { AiOutlineMenuUnfold, AiOutlineClose, AiFillHome, AiFillFileZip } from "react-icons/ai"
import { HiMiniAcademicCap } from "react-icons/hi2";
import { MdContactSupport } from "react-icons/md"
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";
import { useContext, useState } from 'react'
import { ThemeContext } from '../../store/ThemeContext'
import { NavLink } from 'react-router-dom';
const Heard = () => {

  const [isHeardBody, setIsHeardBody] = useState(false)
  const { modeDark, handleTheme } = useContext(ThemeContext)

  const handleShow = () => {
    setIsHeardBody(!isHeardBody)
  }

  return (
    <header className='heard'>
      <div className='heard__main'>
        <NavLink>
          <img className='heard__main__logo' src='https://res.cloudinary.com/dkddd5aky/image/upload/v1690435139/site-web/Logo-1_fetwtx.webp' />
        </NavLink>
        <button className='heard__main--button' onClick={handleShow}>
          <AiOutlineMenuUnfold className='icon' size={30} />
        </button>
      </div>
      <div className={`heard__body ${!isHeardBody ? 'visibility' : ''}`}>
        <button className='heard__body--button' onClick={handleShow}>
          <AiOutlineClose className='icon' size={35} />
        </button>
        <nav className='heard__body--options'>
          <NavLink>
            <img className='logo' src='https://res.cloudinary.com/dkddd5aky/image/upload/v1690435139/site-web/Logo-1_fetwtx.webp' />
          </NavLink>
          <ul className='options'>
            <li className='option'>
              <AiFillHome className='option_icon' size={20} />
              <NavLink to='/' className='option_text'>Home</NavLink>
            </li>
            <li className='option'>
              <AiFillFileZip className='option_icon' size={20} />
              <a href='/#project-list' className='option_text'>Projects</a>
            </li>
            <li className='option'>
              <HiMiniAcademicCap className='option_icon' size={20} />
              <NavLink to='/formation' className='option_text'>Formation</NavLink>
            </li>
            <li className='option'>
              <MdContactSupport className='option_icon' size={20} />
              <NavLink to='/contact' className='option_text' >Contact</NavLink>
            </li>
            <li className='option'>
              {modeDark ? <BsFillLightbulbOffFill size={25} onClick={handleTheme} /> : <BsFillLightbulbFill size={25} onClick={handleTheme} />}
            </li>
          </ul>
          <p></p>
        </nav>
      </div>
    </header>
  )
}

export default Heard