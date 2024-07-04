import facebook from "../../../assets/socials/facebook.png";
import instagram from "../../../assets/socials/instagram.png";
import dribbble from "../../../assets/socials/dribbble.png";
import email from "../../../assets/socials/sms.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24 border-top border-3">
      <div className="text-black bt-1 flex flex-col md:flex-row justify-between items-center my-5 font-bold">
        <p>@ Copyright 2024 | Mohammad Didarul Islam</p>
        <p>Fullstack Developer</p>
      
      
        <p>
          
        <div className="flex mb-5 justify-center md:justify-start ">
        <a href="https://www.facebook.com/didarul1981" target="_blank" rel="noreferrer" className='flex ml-10 mb-2'>
         
          <FaFacebookF  className='mr-2 size-6' />
          
         </a>
         
        
       
        
        <a className='' href="https://www.linkedin.com/in/didartech/" target="_blank" rel="noreferrer">
       
        <FaLinkedinIn className='mr-2 size-6' />
       
        </a>
        <a className='' href="https://github.com/didarulZend1981" target="_blank" rel="noreferrer">
        <FaGitlab  className='mr-2 size-6' />
       
        </a>
        <a className="" href="mailto:didarul1981@live.com" target="_blank" rel="noreferrer">
        <MdEmail  className='mr-2 size-6' />
        
        </a>

        
      </div></p>
      </div>
      {/* social media */}
      
    </div>
  );
};

export default Footer;