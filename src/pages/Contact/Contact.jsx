
import ContactForm from './ContactForm';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-5 text-black md:w-3/4 leading-[2]">
      Satisfied with me? Please contact me
      </p>
      
      <div className="ml-5">
       
          <a href="https://www.facebook.com/didarul1981" target="_blank" rel="noreferrer" className='flex ml-10 mb-2'>
         
          <FaFacebookF  className='mr-2 size-6' />
           didarul1981
         </a>
         
        
       
        
        <a className='flex ml-8 mb-2' href="https://www.linkedin.com/in/didartech/" target="_blank" rel="noreferrer">
       
        <FaLinkedinIn className='mr-2 size-6' />
        didartech
        </a>
        <a className='flex ml-6' href="https://github.com/didarulZend1981" target="_blank" rel="noreferrer">
        <FaGitlab  className='mr-2 size-6' />
        didarulZend1981
        </a>
        <a className="ml-4 flex" href="mailto:didarul1981@live.com" target="_blank" rel="noreferrer">
        <MdEmail  className='mr-2 size-6' />
        didarul1981@live.com
        </a>

        <a className="ml-2 flex" href="#" target="_blank" rel="noreferrer">
        <FaMobileScreen  className='mr-2 size-6' />
        01552404583
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-black text-2xl mb-6">Contact me, let's make magic together</p>
            <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;