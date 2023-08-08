import './Home.scss'
import { BsLinkedin, BsGithub, BsFillRocketFill } from "react-icons/bs"
import { useContext } from 'react'
import { ThemeContext } from '../../store/ThemeContext'
import ProjectList from '../../components/ProjectList/ProjectList'

const Home = () => {
  const { modeDark } = useContext(ThemeContext)

  return (
    <>
      <div className={`home ${modeDark ? 'dark' : ''}`} id='home'>
        <img className='home__profile' alt='imageProfile' src='https://res.cloudinary.com/dkddd5aky/image/upload/v1690535615/site-web/Perfil_p63ej7.webp' />
        <div className='home__information'>
          <h2 className='home__information__title'>
            <span >Hi</span>
            <div className='message'>
              <div className='word'>world!</div>
              <div className='word'>users!</div>
              <div className='word'>developers!</div>
            </div>
          </h2>

          <h2 className='home__information__subtitle'>My Name is Erick Fabian</h2>
          <h3 className='home__information__post'>COMPUTER ENGINEER, FULL STACK DEVELOPER</h3>
          <p className='home__information__description'>Passionate about programming and the world of web development.
            I am excited to share my innovative projects and solutions. Lets program the future together!</p>
          <p className='home__information__redes'>
            <a className='home__information__redes--linkedin' href='https://www.linkedin.com/in/erickfabiandev/'>
              <BsLinkedin size={25} style={{ color: '#2874A6', background: '#FDFEFE' }} className='icon' />
            </a>
            <a className='home__information__redes--github' href='https://github.com/erickfabiandev'>
              <BsGithub size={25} className='icon' />
            </a>
            <i className='rocket'><BsFillRocketFill size={40} /></i>
          </p>

        </div>
      </div>
      <ProjectList />
    </>

  );
};

export default Home;