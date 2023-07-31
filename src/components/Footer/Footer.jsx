import { FaRegCopyright } from "react-icons/fa"
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <FaRegCopyright size={20}/>
      <p className="footer__text"> website created by erickfabianDev</p>
    </div>
  );
};

export default Footer;